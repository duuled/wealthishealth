export type Category = 'All' | 'Energy & Vitality' | 'Healing & Detox' | 'Immunity & Strength' | 'Mind & Rest';

export interface Ingredient {
  item: string;
  amount: string;
  notes?: string;
  amazonUrl?: string;
}

export interface Recipe {
  id: string;
  title: string;
  category: 'Energy & Vitality' | 'Healing & Detox' | 'Immunity & Strength' | 'Mind & Rest';
  description: string;
  prepTime: string;
  cookTime: string;
  servings: number;
  calories: number;
  difficulty: 'Easy' | 'Medium' | 'Advanced';
  rating: number;
  reviewsCount: number;
  image: string;
  featured?: boolean;
  tags: string[];
  keyBenefits: string[];
  ingredients: Ingredient[];
  instructions: string[];
  superfoodsUsed: string[];
  nutrition: {
    protein: string;
    carbs: string;
    fat: string;
    fiber: string;
    vitamins: string[];
  };
}

export interface Supplement {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  image: string;
  badge?: string;
  description: string;
  keyBenefits: string[];
  dosage: string;
  origin: string;
  weight: string;
  amazonUrl: string;
}

export interface CartItem {
  type: 'supplement' | 'guide';
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  amazonUrl?: string;
}
