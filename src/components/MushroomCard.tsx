import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mushroom } from '@/types/mushroom';
import { useTranslation } from 'react-i18next';

interface MushroomCardProps {
  mushroom: Mushroom;
  onClick?: () => void;
}

export function MushroomCard({ mushroom, onClick }: MushroomCardProps) {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const getToxicityColor = (toxicity: string) => {
    switch (toxicity) {
      case 'edible': return 'bg-green-100 text-green-800 border-green-200';
      case 'poisonous': return 'bg-red-100 text-red-800 border-red-200';
      case 'medicinal': return 'bg-blue-100 text-blue-800 border-blue-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getTranslatedName = () => {
    return currentLanguage === 'es' ? mushroom.nameEs : mushroom.name;
  };

  const getTranslatedDescription = () => {
    return currentLanguage === 'es' ? mushroom.descriptionEs : mushroom.description;
  };

  const getTranslatedToxicity = () => {
    return currentLanguage === 'es' ? mushroom.toxicityEs : mushroom.toxicity;
  };

  const getTranslatedHabitat = () => {
    return currentLanguage === 'es' ? mushroom.habitatEs : mushroom.habitat;
  };

  return (
    <Card 
      className="cursor-pointer hover:shadow-lg transition-all duration-300 h-full"
      onClick={onClick}
    >
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{getTranslatedName()}</CardTitle>
          <Badge className={getToxicityColor(mushroom.toxicity)}>
            {getTranslatedToxicity()}
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground italic">
          {mushroom.scientificName}
        </p>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
          <img 
            src={mushroom.image} 
            alt={getTranslatedName()}
            className="w-full h-full object-cover rounded-lg"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/images/photo1763448772.jpg';
            }}
          />
        </div>
        <p className="text-sm line-clamp-2">{getTranslatedDescription()}</p>
        <div className="flex flex-wrap gap-1">
          {mushroom.season.slice(0, 2).map((season) => (
            <Badge key={season} variant="outline" className="text-xs">
              {season}
            </Badge>
          ))}
        </div>
        <div className="text-xs text-muted-foreground">
          <strong>Habitat:</strong> {getTranslatedHabitat()}
        </div>
      </CardContent>
    </Card>
  );
}