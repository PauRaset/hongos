import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { mushrooms } from '@/data/mushrooms';
import { Search, ChefHat, MapPin, BookOpen } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();
  const featuredMushrooms = mushrooms.slice(0, 3);
  const edibleCount = mushrooms.filter(m => m.toxicity === 'edible').length;
  const poisonousCount = mushrooms.filter(m => m.toxicity === 'poisonous').length;
  const medicinalCount = mushrooms.filter(m => m.toxicity === 'medicinal').length;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-100 py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            {t('home.title')}
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            {t('home.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/catalog">
              <Button size="lg" className="flex items-center gap-2">
                <Search className="h-5 w-5" />
                {t('home.exploreButton')}
              </Button>
            </Link>
            <Link to="/recipes">
              <Button size="lg" variant="outline" className="flex items-center gap-2">
                <ChefHat className="h-5 w-5" />
                {t('home.recipesButton')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">{t('home.stats.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <Card>
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-green-600">{mushrooms.length}</div>
                <p className="text-gray-600">{t('home.stats.title')}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-green-600">{edibleCount}</div>
                <p className="text-gray-600">{t('home.stats.edible')}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-red-600">{poisonousCount}</div>
                <p className="text-gray-600">{t('home.stats.poisonous')}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-blue-600">{medicinalCount}</div>
                <p className="text-gray-600">{t('home.stats.medicinal')}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">{t('home.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Search className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>{t('home.features.identification.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  {t('home.features.identification.description')}
                </p>
                <Link to="/catalog">
                  <Button>{t('home.exploreButton')}</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <ChefHat className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle>{t('home.features.recipes.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  {t('home.features.recipes.description')}
                </p>
                <Link to="/recipes">
                  <Button>{t('home.recipesButton')}</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>{t('home.features.distribution.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  {t('home.features.distribution.description')}
                </p>
                <Link to="/map">
                  <Button>{t('nav.map')}</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Mushrooms */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-4xl font-bold">{t('catalog.title')}</h2>
            <Link to="/catalog">
              <Button variant="outline" className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                {t('common.viewAll')}
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredMushrooms.map((mushroom) => (
              <Card key={mushroom.id} className="hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{mushroom.name}</CardTitle>
                    <Badge className={
                      mushroom.toxicity === 'edible' ? 'bg-green-100 text-green-800' :
                      mushroom.toxicity === 'poisonous' ? 'bg-red-100 text-red-800' :
                      'bg-blue-100 text-blue-800'
                    }>
                      {t(`catalog.toxicityTypes.${mushroom.toxicity}`)}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground italic">{mushroom.scientificName}</p>
                </CardHeader>
                <CardContent>
                  <div className="aspect-square bg-muted rounded-lg mb-3 flex items-center justify-center">
                    <img 
                      src={mushroom.image} 
                      alt={mushroom.name}
                      className="w-full h-full object-cover rounded-lg"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/assets/mushroom-placeholder_variant_2.jpg';
                      }}
                    />
                  </div>
                  <p className="text-sm text-gray-600 line-clamp-2">{mushroom.description}</p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {mushroom.season.slice(0, 2).map((season) => (
                      <Badge key={season} variant="outline" className="text-xs">
                        {t(`catalog.seasons.${season}`)}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Notice */}
      <section className="py-12 bg-red-50 border-t border-red-200">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold text-red-800 mb-4">⚠️ {t('common.important')}</h3>
          <p className="text-red-700 max-w-2xl mx-auto">
            {t('home.safetyNotice')}
          </p>
        </div>
      </section>
    </div>
  );
}