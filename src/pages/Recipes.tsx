import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { recipes } from '@/data/recipes';
import { mushrooms } from '@/data/mushrooms';
import { Recipe } from '@/types/mushroom';
import { Plus, ChefHat } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Recipes() {
  const { t } = useTranslation();
  const [userRecipes, setUserRecipes] = useState<Recipe[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newRecipe, setNewRecipe] = useState({
    title: '',
    description: '',
    ingredients: [''],
    instructions: [''],
    mushroomId: '',
    image: '',
    difficulty: 'easy' as 'easy' | 'medium' | 'hard',
    cookingTime: 0,
    servings: 1
  });

  const allRecipes = [...recipes, ...userRecipes];

  // Filter mushrooms to ensure they have valid IDs
  const validMushrooms = mushrooms.filter(mushroom => mushroom.id && mushroom.id.trim() !== '');

  const handleAddIngredient = () => {
    setNewRecipe({
      ...newRecipe,
      ingredients: [...newRecipe.ingredients, '']
    });
  };

  const handleAddInstruction = () => {
    setNewRecipe({
      ...newRecipe,
      instructions: [...newRecipe.instructions, '']
    });
  };

  const handleIngredientChange = (index: number, value: string) => {
    const newIngredients = [...newRecipe.ingredients];
    newIngredients[index] = value;
    setNewRecipe({ ...newRecipe, ingredients: newIngredients });
  };

  const handleInstructionChange = (index: number, value: string) => {
    const newInstructions = [...newRecipe.instructions];
    newInstructions[index] = value;
    setNewRecipe({ ...newRecipe, instructions: newInstructions });
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setNewRecipe({
          ...newRecipe,
          image: e.target?.result as string
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmitRecipe = () => {
    const recipe: Recipe = {
      id: Date.now().toString(),
      name: newRecipe.title,
      description: newRecipe.description,
      ingredients: newRecipe.ingredients.filter(ing => ing.trim() !== ''),
      instructions: newRecipe.instructions.filter(inst => inst.trim() !== ''),
      mushroomType: newRecipe.mushroomId,
      difficulty: newRecipe.difficulty,
      cookingTime: newRecipe.cookingTime,
      servings: newRecipe.servings,
      image: newRecipe.image || '/assets/recipe-placeholder_variant_1_variant_4.jpg',
      submittedBy: 'User',
      createdAt: new Date().toISOString()
    };
    setUserRecipes([...userRecipes, recipe]);
    setIsDialogOpen(false);
    setNewRecipe({
      title: '',
      description: '',
      ingredients: [''],
      instructions: [''],
      mushroomId: '',
      image: '',
      difficulty: 'easy',
      cookingTime: 0,
      servings: 1
    });
  };

  const getMushroomName = (mushroomId: string) => {
    const mushroom = mushrooms.find(m => m.id === mushroomId);
    return mushroom ? mushroom.name : 'Unknown Mushroom';
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold">{t('recipes.title')}</h1>
          <p className="text-muted-foreground">
            {t('recipes.subtitle')}
          </p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              {t('recipes.submitRecipe')}
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{t('recipes.recipeForm.title')}</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <Input
                placeholder={t('recipes.recipeForm.name')}
                value={newRecipe.title}
                onChange={(e) => setNewRecipe({ ...newRecipe, title: e.target.value })}
              />
              <Textarea
                placeholder={t('recipes.recipeForm.description')}
                value={newRecipe.description}
                onChange={(e) => setNewRecipe({ ...newRecipe, description: e.target.value })}
              />
              
              {/* Image Upload */}
              <div>
                <label className="text-sm font-medium mb-2 block">
                  {t('recipes.recipeForm.image')}
                </label>
                <div className="flex items-center gap-2">
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="flex-1"
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  {t('recipes.recipeForm.uploadImage')}
                </p>
              </div>

              <Select value={newRecipe.mushroomId} onValueChange={(value) => setNewRecipe({ ...newRecipe, mushroomId: value })}>
                <SelectTrigger>
                  <SelectValue placeholder={t('recipes.recipeForm.mushroomType')} />
                </SelectTrigger>
                <SelectContent>
                  {validMushrooms.map((mushroom) => (
                    <SelectItem key={mushroom.id} value={mushroom.id}>
                      {mushroom.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={newRecipe.difficulty} onValueChange={(value: 'easy' | 'medium' | 'hard') => setNewRecipe({ ...newRecipe, difficulty: value })}>
                <SelectTrigger>
                  <SelectValue placeholder={t('recipes.recipeForm.difficulty')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="easy">{t('recipes.difficulty.easy')}</SelectItem>
                  <SelectItem value="medium">{t('recipes.difficulty.medium')}</SelectItem>
                  <SelectItem value="hard">{t('recipes.difficulty.hard')}</SelectItem>
                </SelectContent>
              </Select>

              <Input
                type="number"
                placeholder={t('recipes.recipeForm.cookingTime')}
                value={newRecipe.cookingTime}
                onChange={(e) => setNewRecipe({ ...newRecipe, cookingTime: parseInt(e.target.value) || 0 })}
              />

              <Input
                type="number"
                placeholder={t('recipes.recipeForm.servings')}
                value={newRecipe.servings}
                onChange={(e) => setNewRecipe({ ...newRecipe, servings: parseInt(e.target.value) || 1 })}
              />
              
              <div>
                <h4 className="font-semibold mb-2">{t('recipes.recipeForm.ingredients')}</h4>
                {newRecipe.ingredients.map((ingredient, index) => (
                  <div key={index} className="flex gap-2 mb-2">
                    <Input
                      placeholder={`${t('recipes.recipeForm.ingredients')} ${index + 1}`}
                      value={ingredient}
                      onChange={(e) => handleIngredientChange(index, e.target.value)}
                    />
                  </div>
                ))}
                <Button variant="outline" onClick={handleAddIngredient} className="w-full">
                  {t('recipes.recipeForm.addIngredient')}
                </Button>
              </div>

              <div>
                <h4 className="font-semibold mb-2">{t('recipes.recipeForm.instructions')}</h4>
                {newRecipe.instructions.map((instruction, index) => (
                  <div key={index} className="flex gap-2 mb-2">
                    <Textarea
                      placeholder={`${t('recipes.recipeForm.step')} ${index + 1}`}
                      value={instruction}
                      onChange={(e) => handleInstructionChange(index, e.target.value)}
                    />
                  </div>
                ))}
                <Button variant="outline" onClick={handleAddInstruction} className="w-full">
                  {t('recipes.recipeForm.addStep')}
                </Button>
              </div>

              <Button onClick={handleSubmitRecipe} className="w-full">
                {t('recipes.recipeForm.submit')}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allRecipes.map((recipe) => (
          <Card key={recipe.id} className="hover:shadow-lg transition-all duration-300">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <ChefHat className="h-5 w-5 text-primary" />
                <CardTitle className="text-lg">{recipe.name}</CardTitle>
              </div>
              <p className="text-sm text-muted-foreground">
                {t('recipes.recipeForm.mushroomType')}: {getMushroomName(recipe.mushroomType)}
              </p>
              <div className="flex gap-2 text-xs">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                  {t(`recipes.difficulty.${recipe.difficulty}`)}
                </span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded">
                  {recipe.cookingTime} min
                </span>
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded">
                  {recipe.servings} servings
                </span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                <img 
                  src={recipe.image} 
                  alt={recipe.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/assets/recipe-placeholder_variant_2.jpg';
                  }}
                />
              </div>
              <p className="text-sm text-muted-foreground">{recipe.description}</p>
              <div className="space-y-2">
                <h4 className="font-semibold text-sm">{t('recipes.recipeForm.ingredients')}:</h4>
                <ul className="text-sm space-y-1">
                  {recipe.ingredients.slice(0, 3).map((ingredient, index) => (
                    <li key={index} className="text-muted-foreground">• {ingredient}</li>
                  ))}
                  {recipe.ingredients.length > 3 && (
                    <li className="text-muted-foreground text-xs">+ {recipe.ingredients.length - 3} more ingredients</li>
                  )}
                </ul>
              </div>
              <div className="text-xs text-muted-foreground italic">
                {t('recipes.recipeForm.submittedByUser')}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {allRecipes.length === 0 && (
        <div className="text-center py-12">
          <ChefHat className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
          <p className="text-muted-foreground text-lg">
            {t('recipes.noRecipes')}
          </p>
        </div>
      )}
    </div>
  );
}