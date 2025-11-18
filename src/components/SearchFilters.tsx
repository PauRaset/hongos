import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface SearchFiltersProps {
  onFiltersChange: (filters: {
    searchTerm?: string;
    toxicity?: string;
    season?: string;
    color?: string;
    shape?: string;
  }) => void;
}

export function SearchFilters({ onFiltersChange }: SearchFiltersProps) {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [toxicity, setToxicity] = useState('');
  const [season, setSeason] = useState('');
  const [color, setColor] = useState('');
  const [shape, setShape] = useState('');

  const handleSearch = () => {
    onFiltersChange({
      searchTerm,
      toxicity,
      season,
      color,
      shape
    });
  };

  const handleClear = () => {
    setSearchTerm('');
    setToxicity('');
    setSeason('');
    setColor('');
    setShape('');
    onFiltersChange({});
  };

  const activeFilters = [
    searchTerm && `${t('catalog.searchPlaceholder')}: ${searchTerm}`,
    toxicity && `${t('catalog.toxicity')}: ${t(`catalog.toxicityTypes.${toxicity}`)}`,
    season && `${t('catalog.season')}: ${t(`catalog.seasons.${season}`)}`,
    color && `${t('catalog.color')}: ${color}`,
    shape && `${t('catalog.shape')}: ${shape}`
  ].filter(Boolean);

  return (
    <div className="space-y-4 p-4 bg-muted/30 rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Input
          placeholder={t('catalog.searchPlaceholder')}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
        />
        
        <Select value={toxicity} onValueChange={setToxicity}>
          <SelectTrigger>
            <SelectValue placeholder={t('catalog.toxicity')} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="edible">{t('catalog.toxicityTypes.edible')}</SelectItem>
            <SelectItem value="poisonous">{t('catalog.toxicityTypes.poisonous')}</SelectItem>
            <SelectItem value="medicinal">{t('catalog.toxicityTypes.medicinal')}</SelectItem>
            <SelectItem value="unknown">{t('catalog.toxicityTypes.unknown')}</SelectItem>
          </SelectContent>
        </Select>

        <Select value={season} onValueChange={setSeason}>
          <SelectTrigger>
            <SelectValue placeholder={t('catalog.season')} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Spring">{t('catalog.seasons.Spring')}</SelectItem>
            <SelectItem value="Summer">{t('catalog.seasons.Summer')}</SelectItem>
            <SelectItem value="Fall">{t('catalog.seasons.Fall')}</SelectItem>
            <SelectItem value="Winter">{t('catalog.seasons.Winter')}</SelectItem>
          </SelectContent>
        </Select>

        <Select value={color} onValueChange={setColor}>
          <SelectTrigger>
            <SelectValue placeholder={t('catalog.color')} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="white">White</SelectItem>
            <SelectItem value="brown">Brown</SelectItem>
            <SelectItem value="yellow">Yellow</SelectItem>
            <SelectItem value="red">Red</SelectItem>
            <SelectItem value="orange">Orange</SelectItem>
            <SelectItem value="black">Black</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex gap-2">
        <Button onClick={handleSearch}>{t('catalog.applyFilters')}</Button>
        <Button variant="outline" onClick={handleClear}>
          {t('catalog.clearAll')}
        </Button>
      </div>

      {activeFilters.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {activeFilters.map((filter, index) => (
            <Badge key={index} variant="secondary" className="flex items-center gap-1">
              {filter}
              <X 
                className="h-3 w-3 cursor-pointer" 
                onClick={() => {
                  // Remove specific filter logic would go here
                  handleClear();
                }}
              />
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
}