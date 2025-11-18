import { useState, useMemo } from 'react';
import { MushroomCard } from '@/components/MushroomCard';
import { SearchFilters } from '@/components/SearchFilters';
import { mushrooms } from '@/data/mushrooms';
import { Mushroom } from '@/types/mushroom';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useTranslation } from 'react-i18next';

interface FilterState {
  searchTerm?: string;
  toxicity?: string;
  season?: string;
  color?: string;
  shape?: string;
}

export default function MushroomCatalog() {
  const { t } = useTranslation();
  const [filters, setFilters] = useState<FilterState>({});
  const [selectedMushroom, setSelectedMushroom] = useState<Mushroom | null>(null);

  const filteredMushrooms = useMemo(() => {
    return mushrooms.filter((mushroom) => {
      if (filters.searchTerm && !mushroom.name.toLowerCase().includes(filters.searchTerm.toLowerCase()) && 
          !mushroom.scientificName.toLowerCase().includes(filters.searchTerm.toLowerCase())) {
        return false;
      }
      if (filters.toxicity && mushroom.toxicity !== filters.toxicity) {
        return false;
      }
      if (filters.season && !mushroom.season.includes(filters.season)) {
        return false;
      }
      if (filters.color && !mushroom.characteristics.color.toLowerCase().includes(filters.color.toLowerCase())) {
        return false;
      }
      return true;
    });
  }, [filters]);

  const getToxicityColor = (toxicity: string) => {
    switch (toxicity) {
      case 'edible': return 'bg-green-100 text-green-800 border-green-200';
      case 'poisonous': return 'bg-red-100 text-red-800 border-red-200';
      case 'medicinal': return 'bg-blue-100 text-blue-800 border-blue-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold">{t('catalog.title')}</h1>
        <p className="text-muted-foreground">
          {t('catalog.subtitle')}
        </p>
      </div>

      <SearchFilters onFiltersChange={setFilters} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMushrooms.map((mushroom) => (
          <MushroomCard
            key={mushroom.id}
            mushroom={mushroom}
            onClick={() => setSelectedMushroom(mushroom)}
          />
        ))}
      </div>

      {filteredMushrooms.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg">
            {t('catalog.noResults')}
          </p>
        </div>
      )}

      <Dialog open={!!selectedMushroom} onOpenChange={() => setSelectedMushroom(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedMushroom && (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  {selectedMushroom.name}
                  <Badge className={getToxicityColor(selectedMushroom.toxicity)}>
                    {t(`catalog.toxicityTypes.${selectedMushroom.toxicity}`)}
                  </Badge>
                </DialogTitle>
                <p className="text-sm text-muted-foreground italic">
                  {selectedMushroom.scientificName}
                </p>
              </DialogHeader>

              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="overview">{t('catalog.details.overview')}</TabsTrigger>
                  <TabsTrigger value="characteristics">{t('catalog.details.characteristics')}</TabsTrigger>
                  <TabsTrigger value="distribution">{t('catalog.details.distribution')}</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-4">
                  <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                    <img 
                      src={selectedMushroom.image} 
                      alt={selectedMushroom.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/assets/mushroom-placeholder_variant_3.jpg';
                      }}
                    />
                  </div>
                  <p className="text-lg">{selectedMushroom.description}</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold">{t('catalog.details.habitat')}</h4>
                      <p className="text-muted-foreground">{selectedMushroom.habitat}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">{t('catalog.details.season')}</h4>
                      <div className="flex flex-wrap gap-1">
                        {selectedMushroom.season.map((season) => (
                          <Badge key={season} variant="outline">
                            {t(`catalog.seasons.${season}`)}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="characteristics" className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold">{t('catalog.details.color')}</h4>
                      <p className="text-muted-foreground">{selectedMushroom.characteristics.color}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">{t('catalog.details.shape')}</h4>
                      <p className="text-muted-foreground">{selectedMushroom.characteristics.shape}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">{t('catalog.details.size')}</h4>
                      <p className="text-muted-foreground">{selectedMushroom.characteristics.size}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">{t('catalog.details.gills')}</h4>
                      <p className="text-muted-foreground">{selectedMushroom.characteristics.gills}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">{t('catalog.details.stem')}</h4>
                      <p className="text-muted-foreground">{selectedMushroom.characteristics.stem}</p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="distribution" className="space-y-4">
                  <h4 className="font-semibold">{t('catalog.details.regions')}</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedMushroom.regions.map((region) => (
                      <Badge key={region} variant="secondary">
                        {region}
                      </Badge>
                    ))}
                  </div>
                  <div className="bg-muted rounded-lg p-4 text-center">
                    <p className="text-muted-foreground">
                      {t('catalog.details.mapComingSoon')}
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}