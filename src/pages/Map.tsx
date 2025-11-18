import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { mushrooms } from '@/data/mushrooms';
import { Mushroom } from '@/types/mushroom';
import { MapPin, Search } from 'lucide-react';

export default function Map() {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [selectedMushroom, setSelectedMushroom] = useState<string | null>(null);

  const regions = Array.from(new Set(mushrooms.flatMap(m => m.regions))).sort();
  
  const filteredMushrooms = mushrooms.filter(mushroom => {
    if (selectedRegion && !mushroom.regions.includes(selectedRegion)) return false;
    if (selectedMushroom && mushroom.id !== selectedMushroom) return false;
    return true;
  });

  const getMushroomsByRegion = (region: string) => {
    return mushrooms.filter(m => m.regions.includes(region));
  };

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
        <div className="flex items-center justify-center gap-2">
          <MapPin className="h-8 w-8 text-primary" />
          <h1 className="text-4xl font-bold">Mushroom Distribution Map</h1>
        </div>
        <p className="text-muted-foreground">
          Explore where different mushroom species grow around the world
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="h-5 w-5" />
                Filters
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Region</label>
                <Select value={selectedRegion || undefined} onValueChange={(value) => setSelectedRegion(value || null)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Region" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all-regions">All Regions</SelectItem>
                    {regions.map(region => (
                      <SelectItem key={region} value={region}>
                        {region}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Mushroom Species</label>
                <Select value={selectedMushroom || undefined} onValueChange={(value) => setSelectedMushroom(value || null)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Mushroom" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all-mushrooms">All Mushrooms</SelectItem>
                    {mushrooms.map(mushroom => (
                      <SelectItem key={mushroom.id} value={mushroom.id}>
                        {mushroom.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="text-xs text-muted-foreground">
                <p>Click on regions to see local mushrooms</p>
                <p>Filter by species to see their distribution</p>
              </div>
            </CardContent>
          </Card>

          {selectedRegion && selectedRegion !== 'all-regions' && (
            <Card>
              <CardHeader>
                <CardTitle>Mushrooms in {selectedRegion}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 max-h-60 overflow-y-auto">
                {getMushroomsByRegion(selectedRegion).map(mushroom => (
                  <div key={mushroom.id} className="flex items-center justify-between p-2 border rounded">
                    <span className="text-sm font-medium">{mushroom.name}</span>
                    <Badge className={getToxicityColor(mushroom.toxicity)}>
                      {mushroom.toxicity}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          )}
        </div>

        <div className="lg:col-span-3">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>World Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-muted rounded-lg p-8 text-center">
                <div className="max-w-md mx-auto space-y-4">
                  <MapPin className="h-16 w-16 text-muted-foreground mx-auto" />
                  <h3 className="text-xl font-semibold">Interactive Map Coming Soon</h3>
                  <p className="text-muted-foreground">
                    We're working on an interactive world map that will show mushroom distribution 
                    by region. For now, use the filters to explore which mushrooms grow in different areas.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    {regions.slice(0, 6).map(region => (
                      <Card 
                        key={region}
                        className="cursor-pointer hover:bg-accent transition-colors"
                        onClick={() => setSelectedRegion(region)}
                      >
                        <CardContent className="p-4 text-center">
                          <div className="font-medium">{region}</div>
                          <div className="text-xs text-muted-foreground">
                            {getMushroomsByRegion(region).length} species
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>

              {filteredMushrooms.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-4">
                    {selectedMushroom && selectedMushroom !== 'all-mushrooms'
                      ? `Distribution of ${mushrooms.find(m => m.id === selectedMushroom)?.name}`
                      : selectedRegion && selectedRegion !== 'all-regions'
                        ? `All Mushrooms in ${selectedRegion}`
                        : 'All Mushrooms Worldwide'
                    }
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {filteredMushrooms.map(mushroom => (
                      <Card key={mushroom.id}>
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between">
                            <div>
                              <h4 className="font-semibold">{mushroom.name}</h4>
                              <p className="text-sm text-muted-foreground italic">
                                {mushroom.scientificName}
                              </p>
                            </div>
                            <Badge className={getToxicityColor(mushroom.toxicity)}>
                              {mushroom.toxicity}
                            </Badge>
                          </div>
                          <div className="mt-2">
                            <p className="text-sm">
                              <strong>Regions:</strong> {mushroom.regions.join(', ')}
                            </p>
                            <p className="text-sm">
                              <strong>Season:</strong> {mushroom.season.join(', ')}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}