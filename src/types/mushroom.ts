export interface Mushroom {
  id: string;
  name: string;
  nameEs: string;
  scientificName: string;
  image: string;
  description: string;
  descriptionEs: string;
  toxicity: 'edible' | 'poisonous' | 'medicinal';
  toxicityEs: string;
  habitat: string;
  habitatEs: string;
  season: string[];
  regions: string[];
  characteristics: {
    color: string;
    colorEs: string;
    shape: string;
    shapeEs: string;
    size: string;
    sizeEs: string;
    gills: string;
    gillsEs: string;
    stem: string;
    stemEs: string;
  };
}

export interface Recipe {
  id: string;
  name: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  mushroomType: string;
  difficulty: 'easy' | 'medium' | 'hard';
  cookingTime: number;
  servings: number;
  image?: string;
  submittedBy: string;
  createdAt: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
}