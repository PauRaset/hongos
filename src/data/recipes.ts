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
  },
    {
    id: '4',
    name: 'Garlic Butter Oyster Mushrooms',
    description: 'Pan-seared oyster mushrooms in garlic butter, perfect as a tapa or side dish',
    ingredients: [
      '400g fresh oyster mushrooms (Pleurotus ostreatus)',
      '3 tbsp butter',
      '2 tbsp olive oil',
      '3 cloves garlic, minced',
      '1 tbsp fresh parsley, chopped',
      '1 tsp lemon juice',
      'Salt and freshly ground black pepper',
      'Optional: pinch of chili flakes'
    ],
    instructions: [
      'Clean oyster mushrooms with a damp cloth and trim any tough stem parts',
      'Heat olive oil and 2 tbsp of butter in a large skillet over medium-high heat',
      'Add the mushrooms in a single layer and cook without moving for 3–4 minutes until golden on one side',
      'Flip the mushrooms, add remaining butter and minced garlic, and cook 2–3 minutes more',
      'Season with salt, pepper, lemon juice and chili flakes if using',
      'Sprinkle with chopped parsley and serve immediately as a tapa or side dish'
    ],
    mushroomType: '10', // Pleurotus ostreatus
    difficulty: 'easy',
    cookingTime: 15,
    servings: 2,
    image: '/images/GarlicButterOyster.jpg',
    submittedBy: 'Admin',
    createdAt: '2024-01-01T00:00:00Z'
  },
  {
    id: '5',
    name: 'Grilled King Oyster Mushroom Steaks',
    description: 'Thick slices of king oyster mushrooms grilled like vegan “steaks”',
    ingredients: [
      '4 large king oyster mushrooms (Pleurotus eryngii)',
      '3 tbsp olive oil',
      '1 tbsp soy sauce',
      '1 tbsp lemon juice',
      '1 tsp smoked paprika',
      '1 clove garlic, minced',
      'Salt and pepper to taste',
      'Fresh parsley or chives to garnish'
    ],
    instructions: [
      'Clean king oyster mushrooms and slice them lengthwise into 1–1.5 cm thick “steaks”',
      'In a bowl, mix olive oil, soy sauce, lemon juice, smoked paprika, garlic, salt and pepper',
      'Brush the marinade over both sides of the mushroom steaks and let rest for 10–15 minutes',
      'Preheat a grill pan or barbecue over medium-high heat',
      'Grill mushrooms 3–4 minutes per side until nicely charred and tender',
      'Garnish with chopped parsley or chives and serve hot'
    ],
    mushroomType: '11', // Pleurotus eryngii
    difficulty: 'medium',
    cookingTime: 25,
    servings: 2,
    image: '/images/KingOysterSteaks.jpg',
    submittedBy: 'Admin',
    createdAt: '2024-01-01T00:00:00Z'
  },
  {
    id: '6',
    name: 'Saffron Milk Cap à la Plancha',
    description: 'Traditional grilled saffron milk caps with garlic and parsley',
    ingredients: [
      '500g fresh saffron milk caps (Lactarius deliciosus)',
      '3 tbsp olive oil',
      '2 cloves garlic, finely chopped',
      '2 tbsp fresh parsley, chopped',
      'Salt to taste',
      'Lemon wedges to serve'
    ],
    instructions: [
      'Clean the saffron milk caps carefully, removing any dirt from the gills with a brush',
      'Preheat a griddle or large skillet over medium-high heat',
      'Brush mushrooms lightly with olive oil and place them cap-side down',
      'Cook 4–5 minutes, then flip and cook another 3–4 minutes until tender and lightly browned',
      'Sprinkle with chopped garlic and parsley during the last minute of cooking',
      'Season with salt and serve immediately with lemon wedges'
    ],
    mushroomType: '6', // Lactarius deliciosus
    difficulty: 'easy',
    cookingTime: 20,
    servings: 4,
    image: '/images/NiscalosPlancha.jpeg',
    submittedBy: 'Admin',
    createdAt: '2024-01-01T00:00:00Z'
  },
  {
    id: '7',
    name: 'Golden Chanterelle Cream Pasta',
    description: 'Creamy pasta with golden chanterelles, garlic and white wine',
    ingredients: [
      '300g fresh chanterelles (Cantharellus cibarius)',
      '300g pasta (tagliatelle or fettuccine)',
      '2 tbsp butter',
      '1 tbsp olive oil',
      '2 cloves garlic, minced',
      '1 small shallot, finely chopped',
      '1/2 cup dry white wine',
      '200ml cooking cream',
      '1/4 cup grated Parmesan cheese',
      'Salt and black pepper to taste',
      'Fresh parsley to garnish'
    ],
    instructions: [
      'Cook pasta in salted boiling water according to package directions, then drain',
      'Clean chanterelles gently and cut larger ones in half',
      'In a large pan, heat butter and olive oil over medium heat',
      'Sauté shallot and garlic until soft and fragrant',
      'Add chanterelles and cook 4–5 minutes until lightly browned',
      'Deglaze with white wine and let it reduce by half',
      'Add cream and simmer a few minutes until slightly thickened',
      'Stir in Parmesan, season with salt and pepper',
      'Add cooked pasta to the pan and toss to coat in the sauce',
      'Serve immediately topped with extra Parmesan and parsley'
    ],
    mushroomType: '8', // Cantharellus cibarius
    difficulty: 'medium',
    cookingTime: 30,
    servings: 3,
    image: '/images/ChanterellePasta.jpg',
    submittedBy: 'Admin',
    createdAt: '2024-01-01T00:00:00Z'
  },
  {
    id: '8',
    name: 'Wild Mushroom Bruschetta',
    description: 'Toasted bread topped with a mix of wild mushrooms, garlic and herbs',
    ingredients: [
      '300g mixed wild mushrooms (porcini, chanterelles, oyster, etc.)',
      '1 small onion, finely chopped',
      '2 cloves garlic, minced',
      '3 tbsp olive oil',
      '1 tbsp butter',
      '8 slices rustic bread',
      'Fresh thyme or parsley, chopped',
      'Salt and pepper to taste',
      'Optional: splash of white wine'
    ],
    instructions: [
      'Clean and slice the mushrooms',
      'Heat olive oil and butter in a pan over medium heat',
      'Add onion and cook until soft, then add garlic and cook 1 minute more',
      'Add mushrooms and sauté 6–8 minutes until golden and their liquid has evaporated',
      'Season with salt, pepper, herbs and a splash of white wine if desired; cook 1–2 minutes more',
      'Toast bread slices until crisp',
      'Top each slice with the mushroom mixture and serve immediately'
    ],
    mushroomType: '19', // Referenced to Boletus edulis as main wild mushroom
    difficulty: 'easy',
    cookingTime: 25,
    servings: 4,
    image: '/images/WildMushroomBruschetta.jpg',
    submittedBy: 'Admin',
    createdAt: '2024-01-01T00:00:00Z'
  },
  {
    id: '9',
    name: 'Creamy Button Mushroom Soup',
    description: 'Classic creamy soup made with common button mushrooms',
    ingredients: [
      '500g button mushrooms (Agaricus bisporus), sliced',
      '1 onion, chopped',
      '2 cloves garlic, minced',
      '3 tbsp butter',
      '2 tbsp olive oil',
      '3 tbsp flour',
      '1L vegetable or chicken broth',
      '200ml cream or evaporated milk',
      'Salt and pepper to taste',
      'Fresh thyme or parsley to serve'
    ],
    instructions: [
      'In a large pot, heat olive oil and butter over medium heat',
      'Add onion and cook until translucent, then add garlic and cook 1 minute',
      'Add sliced mushrooms and cook 8–10 minutes until they soften and reduce',
      'Stir in flour and cook 1–2 minutes, stirring constantly',
      'Gradually add broth while stirring to avoid lumps',
      'Simmer 10–15 minutes, then blend part or all of the soup to desired texture',
      'Return to low heat, add cream, and adjust seasoning with salt and pepper',
      'Serve hot with fresh herbs on top'
    ],
    mushroomType: '1', // Agaricus bisporus
    difficulty: 'easy',
    cookingTime: 35,
    servings: 4,
    image: '/images/ButtonMushroomSoup.jpg',
    submittedBy: 'Admin',
    createdAt: '2024-01-01T00:00:00Z'
  },
  {
    id: '10',
    name: 'Maitake & Reishi Wellness Broth',
    description: 'Light, aromatic broth featuring maitake and reishi, inspired by medicinal mushroom traditions',
    ingredients: [
      '150g fresh maitake (Grifola frondosa), torn into pieces',
      '20–30g dried reishi slices (Ganoderma lucidum)',
      '1.5L water',
      '1 small onion, quartered',
      '2 cloves garlic, lightly crushed',
      '3 slices fresh ginger',
      '1 tbsp soy sauce or tamari',
      'Salt to taste',
      'Optional: 1 small carrot, sliced',
      'Optional: chopped spring onion to serve'
    ],
    instructions: [
      'Rinse reishi slices briefly under cold water',
      'In a large pot, add water, reishi, onion, garlic, ginger and carrot if using',
      'Bring to a boil, then reduce heat and simmer gently for 40–50 minutes',
      'Add maitake pieces and simmer 10–15 minutes more',
      'Season with soy sauce and salt to taste',
      'Strain if you prefer a clear broth, or serve with the maitake pieces in the bowl',
      'Top with chopped spring onion before serving'
    ],
    mushroomType: '13', // Grifola frondosa (maitake) como base comestible
    difficulty: 'medium',
    cookingTime: 60,
    servings: 4,
    image: '/images/MaitakeReishiBroth.jpg',
    submittedBy: 'Admin',
    createdAt: '2024-01-01T00:00:00Z'
  }
];

