import { Recipe } from '@/types/mushroom';

export const recipes: Recipe[] = [
  {
    id: '1',
    name: 'Sautéed Chanterelles with Garlic and Herbs',
    description: 'Simple and delicious way to enjoy fresh chanterelle mushrooms',
    ingredients: [
      '500g fresh chanterelle mushrooms',
      '3 cloves garlic, minced',
      '2 tbsp butter',
      '2 tbsp olive oil',
      '1/4 cup fresh parsley, chopped',
      'Salt and pepper to taste',
      '1 tbsp fresh thyme leaves'
    ],
    instructions: [
      'Clean chanterelles gently with a brush or damp cloth',
      'Heat butter and olive oil in a large skillet over medium heat',
      'Add mushrooms and sauté for 5-7 minutes until they release their liquid',
      'Add garlic and cook for 1-2 minutes more',
      'Season with salt, pepper, and fresh herbs',
      'Serve immediately as a side dish or over pasta'
    ],
    mushroomType: '1',
    difficulty: 'easy',
    cookingTime: 15,
    servings: 4,
    image: '/images/Chanterelle.jpg',
    submittedBy: 'Admin',
    createdAt: '2024-01-01T00:00:00Z'
  },
  {
    id: '2',
    name: 'Creamy Porcini Mushroom Risotto',
    description: 'Rich and creamy risotto featuring the earthy flavor of porcini mushrooms',
    ingredients: [
      '300g fresh porcini mushrooms',
      '1.5 cups Arborio rice',
      '1 onion, finely chopped',
      '2 cloves garlic, minced',
      '1/2 cup dry white wine',
      '4-5 cups vegetable broth, hot',
      '1/2 cup grated Parmesan cheese',
      '3 tbsp butter',
      '2 tbsp olive oil',
      'Salt and pepper to taste'
    ],
    instructions: [
      'Clean and slice porcini mushrooms',
      'Sauté onions and garlic in olive oil until translucent',
      'Add rice and toast for 2 minutes',
      'Deglaze with white wine and cook until absorbed',
      'Add hot broth one ladle at a time, stirring constantly',
      'In separate pan, sauté mushrooms in butter',
      'When rice is creamy and al dente, stir in mushrooms and Parmesan',
      'Season and serve immediately'
    ],
    mushroomType: '3',
    difficulty: 'medium',
    cookingTime: 40,
    servings: 4,
    image: '/images/Risotto.jpg',
    submittedBy: 'Admin',
    createdAt: '2024-01-01T00:00:00Z'
  },
  {
    id: '3',
    name: 'Shiitake Mushroom Stir-fry',
    description: 'Quick and healthy Asian-inspired stir-fry with shiitake mushrooms',
    ingredients: [
      '400g fresh shiitake mushrooms',
      '1 bell pepper, sliced',
      '1 carrot, julienned',
      '2 cloves garlic, minced',
      '1 inch ginger, grated',
      '3 tbsp soy sauce',
      '1 tbsp sesame oil',
      '1 tbsp vegetable oil',
      '2 green onions, chopped',
      '1 tsp cornstarch mixed with 2 tbsp water'
    ],
    instructions: [
      'Clean and slice shiitake mushrooms',
      'Heat vegetable oil in wok or large pan',
      'Stir-fry garlic and ginger for 30 seconds',
      'Add mushrooms and vegetables, stir-fry for 5 minutes',
      'Add soy sauce and sesame oil',
      'Thicken with cornstarch slurry',
      'Garnish with green onions and serve with rice'
    ],
    mushroomType: '5',
    difficulty: 'easy',
    cookingTime: 20,
    servings: 3,
    image: '/images/ShiitakeStirFry.jpg',
    submittedBy: 'Admin',
    createdAt: '2024-01-01T00:00:00Z'
  }
];