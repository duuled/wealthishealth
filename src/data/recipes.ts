import { Recipe } from '../types';

export const recipes: Recipe[] = [
  {
    id: 'power-5-health-smoothie',
    title: 'Power 5 Health Smoothie',
    category: 'Energy & Vitality',
    description: 'A legendary blend of ancient superfoods including Moringa, Neem, Chaga Mushroom, and Shilajit for ultimate vitality, cellular defense, and deep metabolic energy.',
    prepTime: '5 mins',
    cookTime: '0 mins',
    servings: 2,
    calories: 180,
    difficulty: 'Easy',
    rating: 5.0,
    reviewsCount: 512,
    image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&q=80&w=800',
    featured: true,
    tags: ['Signature', 'Superfoods', 'Ayurvedic', 'Power 5', 'Antioxidant'],
    keyBenefits: [
      'Delivers 90+ bioavailable nutrients and 85 mineral electrolytes',
      'Provides smooth, steady clean energy without caffeine spikes',
      'Boosts immune cell response & reduces systemic inflammation',
      'Supports mental clarity and stamina throughout the day'
    ],
    superfoodsUsed: ['Moringa Powder', 'Neem Powder', 'Chaga Mushroom', 'Shilajit'],
    ingredients: [
      { item: 'Moringa Leaf Powder', amount: '1 tsp', notes: 'Nutrient-dense superfood', amazonUrl: 'https://www.amazon.com/s?k=organic+moringa+leaf+powder&tag=healthiswealth-20' },
      { item: 'Neem Powder', amount: '1/4 tsp', notes: 'Anti-inflammatory purifier', amazonUrl: 'https://www.amazon.com/s?k=organic+neem+leaf+powder&tag=healthiswealth-20' },
      { item: 'Chaga Mushroom Powder', amount: '1/2 tsp', notes: 'Immune adaptogen base', amazonUrl: 'https://www.amazon.com/s?k=wild+chaga+mushroom+powder&tag=healthiswealth-20' },
      { item: 'Pure Himalayan Shilajit Resin', amount: 'Rice-grain size', notes: '85+ ionic minerals', amazonUrl: 'https://www.amazon.com/s?k=pure+himalayan+shilajit+resin&tag=healthiswealth-20' },
      { item: 'Organic Amla Powder', amount: '1/2 tsp', notes: 'Vitamin C & Collagen Booster', amazonUrl: 'https://www.amazon.com/s?k=organic+amla+powder+vitamin+c&tag=healthiswealth-20' },
      { item: 'Frozen Banana', amount: '1 medium', notes: 'Natural sweetness & potassium', amazonUrl: 'https://www.amazon.com/s?k=organic+fresh+bananas&tag=healthiswealth-20' },
      { item: 'Coconut Water or Almond Milk', amount: '1 cup', notes: 'Hydrating electrolyte base', amazonUrl: 'https://www.amazon.com/s?k=organic+coconut+water&tag=healthiswealth-20' },
      { item: 'Raw Honey or Medjool Date', amount: '1 tsp / 1 date', notes: 'Optional natural sweetener', amazonUrl: 'https://www.amazon.com/s?k=raw+unfiltered+honey&tag=healthiswealth-20' }
    ],
    instructions: [
      'Brew 1 cup of Chaga Mushroom Tea using fresh boiling water for 10 minutes, then chill completely in the refrigerator.',
      'In a high-speed blender, combine the chilled Chaga tea, almond milk or coconut water, and frozen banana slices.',
      'Add 1 tsp Moringa Leaf Powder, 1/4 tsp Neem Powder, and 1/4 tsp Chaga Mushroom Powder.',
      'Add 5 to 10 drops of Pure Shilajit liquid resin and optional raw wildflower honey.',
      'Blend on high for 45-60 seconds until smooth, creamy, and vibrant emerald green.',
      'Pour into chilled glass jars, garnish with chia seeds or fresh mint, and drink immediately for maximum enzyme vitality!'
    ],
    nutrition: {
      protein: '6g',
      carbs: '28g',
      fat: '2.5g',
      fiber: '5g',
      vitamins: ['Vitamin C (180% DV)', 'Iron (45% DV)', 'Calcium (30% DV)', 'Potassium (15% DV)']
    }
  },
  {
    id: 'golden-amla-immunity-elixir',
    title: 'Golden Amla Vitamin C Elixir',
    category: 'Immunity & Strength',
    description: 'Bright citrusy tonic made with organic Amla (Indian Gooseberry), ginger, turmeric, and black pepper for maximum bio-absorption.',
    prepTime: '5 mins',
    cookTime: '2 mins',
    servings: 1,
    calories: 65,
    difficulty: 'Easy',
    rating: 4.9,
    reviewsCount: 184,
    image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80&w=800',
    tags: ['Immunity', 'Vitamin C', 'Anti-Inflammatory', 'Cold Pressed'],
    keyBenefits: [
      'Provides over 300% daily recommended Vitamin C',
      'Stimulates digestion and metabolic fire',
      'Reduces oxidative stress in blood vessels'
    ],
    superfoodsUsed: ['Amla Powder', 'Turmeric Root'],
    ingredients: [
      { item: 'Organic Amla Powder', amount: '1 tsp' },
      { item: 'Fresh Ground Turmeric', amount: '1/2 tsp' },
      { item: 'Fresh Ginger Juice', amount: '1 tbsp' },
      { item: 'Raw Manuka Honey', amount: '1 tbsp' },
      { item: 'Pinch of Black Pepper', amount: '1 pinch', notes: 'Enhances absorption' },
      { item: 'Warm Spring Water', amount: '1.5 cups' }
    ],
    instructions: [
      'Warm spring water gently to around 120°F (do not boil to preserve Vitamin C).',
      'Whisk in 1 tsp Organic Amla Powder, ground turmeric, and fresh ginger juice.',
      'Stir in raw Manuka honey and a pinch of black pepper until fully dissolved.',
      'Sip slowly first thing in the morning on an empty stomach.'
    ],
    nutrition: {
      protein: '1g',
      carbs: '16g',
      fat: '0g',
      fiber: '2g',
      vitamins: ['Vitamin C (320% DV)', 'Manganese (25% DV)']
    }
  },
  {
    id: 'moringa-green-goddess-bowl',
    title: 'Moringa Green Goddess Smoothie Bowl',
    category: 'Energy & Vitality',
    description: 'Thick, creamy superfood smoothie bowl topped with pumpkin seeds, coconut flakes, and fresh berries.',
    prepTime: '10 mins',
    cookTime: '0 mins',
    servings: 1,
    calories: 290,
    difficulty: 'Easy',
    rating: 4.8,
    reviewsCount: 142,
    image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&q=80&w=800',
    tags: ['Breakfast', 'Superfood Bowl', 'High Fiber', 'Vegan'],
    keyBenefits: [
      'Rich in complete plant protein and chlorophyll',
      'Supports healthy digestion with 9g natural fiber',
      'Keeps you full and energized until lunch'
    ],
    superfoodsUsed: ['Moringa Powder'],
    ingredients: [
      { item: 'Moringa Leaf Powder', amount: '1.5 tsp' },
      { item: 'Frozen Avocado', amount: '1/2' },
      { item: 'Frozen Mango Cubes', amount: '1 cup' },
      { item: 'Baby Spinach', amount: '1 cup' },
      { item: 'Unsweetened Coconut Milk', amount: '1/3 cup' },
      { item: 'Top: Hemp Seeds, Goji Berries, Blueberries', amount: '2 tbsp total' }
    ],
    instructions: [
      'Add spinach, avocado, frozen mango, and coconut milk to a heavy-duty blender.',
      'Add 1.5 tsp Moringa Powder.',
      'Blend on low using the tamper tool until thick and smooth like soft-serve ice cream.',
      'Scoop into a ceramic bowl and arrange toppings artfully.'
    ],
    nutrition: {
      protein: '8g',
      carbs: '38g',
      fat: '12g',
      fiber: '9g',
      vitamins: ['Vitamin A (120% DV)', 'Vitamin K (200% DV)', 'Iron (30% DV)']
    }
  },
  {
    id: 'chaga-mushroom-golden-latte',
    title: 'Chaga Mushroom Warm Spice Latte',
    category: 'Immunity & Strength',
    description: 'Comforting, grounding hot elixir with wild Chaga, Ceylon cinnamon, cardamom, and creamy oat milk.',
    prepTime: '5 mins',
    cookTime: '5 mins',
    servings: 1,
    calories: 120,
    difficulty: 'Easy',
    rating: 4.9,
    reviewsCount: 210,
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&q=80&w=800',
    tags: ['Warm Latte', 'Coffee Alternative', 'Adaptogen', 'Immune Support'],
    keyBenefits: [
      'Adaptogenic balance for stress resilience',
      'Caffeine-free warmth for evening or afternoon recovery',
      'Supports gut health and immune cell activity'
    ],
    superfoodsUsed: ['Chaga Mushroom Powder'],
    ingredients: [
      { item: 'Chaga Mushroom Powder', amount: '1 tsp' },
      { item: 'Oat Milk or Coconut Milk', amount: '1 cup' },
      { item: 'Ceylon Cinnamon', amount: '1/2 tsp' },
      { item: 'Cardamom Pod (Crushed)', amount: '1' },
      { item: 'Pure Maple Syrup', amount: '1 tsp' },
      { item: 'MCT Oil or Ghee', amount: '1 tsp', notes: 'For creamy emulsion' }
    ],
    instructions: [
      'In a small saucepan, gently heat oat milk with Ceylon cinnamon and crushed cardamom.',
      'Whisk in Chaga Mushroom Powder and MCT oil until completely dissolved and steaming.',
      'Pour into a mug through a small mesh strainer.',
      'Sweeten with maple syrup and froth top with a hand frother for 15 seconds.'
    ],
    nutrition: {
      protein: '3g',
      carbs: '14g',
      fat: '6g',
      fiber: '3g',
      vitamins: ['Potassium (12% DV)', 'Zinc (15% DV)']
    }
  },
  {
    id: 'neem-herbal-detox-tea',
    title: 'Neem & Peppermint Purifying Tonic',
    category: 'Healing & Detox',
    description: 'Refreshing herbal infusion designed to soothe skin, purify blood, and reset digestive balance after heavy meals.',
    prepTime: '3 mins',
    cookTime: '7 mins',
    servings: 2,
    calories: 15,
    difficulty: 'Easy',
    rating: 4.7,
    reviewsCount: 118,
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=800',
    tags: ['Detox', 'Ayurvedic Tea', 'Clear Skin', 'Blood Cleanser'],
    keyBenefits: [
      'Natural blood cleanser & liver supporter',
      'Calms intestinal cramping and bloating',
      'Promotes clear, radiant complexion'
    ],
    superfoodsUsed: ['Neem Powder'],
    ingredients: [
      { item: 'Organic Neem Powder', amount: '1/3 tsp' },
      { item: 'Fresh Peppermint Leaves', amount: '1/4 cup' },
      { item: 'Fennel Seeds', amount: '1 tsp' },
      { item: 'Filtered Water', amount: '2.5 cups' },
      { item: 'Lemon Slice', amount: '2' }
    ],
    instructions: [
      'Bring filtered water and crushed fennel seeds to a boil in a small pot.',
      'Turn off heat, stir in Neem Powder and fresh peppermint leaves.',
      'Cover with lid and steep for 7 minutes.',
      'Strain into teacups and serve with fresh lemon slices.'
    ],
    nutrition: {
      protein: '0g',
      carbs: '3g',
      fat: '0g',
      fiber: '1g',
      vitamins: ['Vitamin A (15% DV)']
    }
  },
  {
    id: 'ashwagandha-moon-milk',
    title: 'Serene Ashwagandha Moon Milk',
    category: 'Mind & Rest',
    description: 'Nourishing bedtime drink infused with calming ashwagandha, nutmeg, rose water, and warm almond milk.',
    prepTime: '5 mins',
    cookTime: '5 mins',
    servings: 1,
    calories: 110,
    difficulty: 'Easy',
    rating: 5.0,
    reviewsCount: 305,
    image: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&q=80&w=800',
    tags: ['Bedtime', 'Sleep Support', 'Stress Relief', 'Ayurvedic'],
    keyBenefits: [
      'Lowers nighttime cortisol levels for deeper REM sleep',
      'Calms nervous tension and overactive mental chatter',
      'Promotes overnight muscle and cellular repair'
    ],
    superfoodsUsed: ['Ashwagandha', 'Nutmeg'],
    ingredients: [
      { item: 'Organic Ashwagandha Powder', amount: '1 tsp' },
      { item: 'Almond Milk', amount: '1 cup' },
      { item: 'Fresh Ground Nutmeg', amount: '1/8 tsp' },
      { item: 'Organic Culinary Rose Water', amount: '1/2 tsp' },
      { item: 'Raw Honey or Date Syrup', amount: '1 tsp' }
    ],
    instructions: [
      'Heat almond milk in a milk warmer or saucepan over low heat until warm.',
      'Whisk in Ashwagandha powder, ground nutmeg, and rose water.',
      'Remove from heat and sweeten with raw honey.',
      'Sip slowly 30 minutes before bedtime.'
    ],
    nutrition: {
      protein: '2g',
      carbs: '10g',
      fat: '5g',
      fiber: '1g',
      vitamins: ['Magnesium (20% DV)', 'Calcium (25% DV)']
    }
  },
  {
    id: 'chia-shilajit-power-pudding',
    title: 'Himalayan Shilajit Chia Power Pudding',
    category: 'Energy & Vitality',
    description: 'Overnight chia pudding infused with Shilajit mineral resin, raw cacao nibs, and toasted almonds.',
    prepTime: '5 mins',
    cookTime: 'Overnight',
    servings: 2,
    calories: 240,
    difficulty: 'Easy',
    rating: 4.9,
    reviewsCount: 165,
    image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&q=80&w=800',
    tags: ['Overnight Prep', 'High Protein', 'Mineral Rich', 'Breakfast'],
    keyBenefits: [
      'Delivers sustained stamina without blood sugar crashes',
      'Rich in Omega-3 fatty acids and bio-available minerals',
      'Supports healthy joint and cellular hydration'
    ],
    superfoodsUsed: ['Shilajit', 'Chia Seeds', 'Cacao Nibs'],
    ingredients: [
      { item: 'Pure Himalayan Shilajit Resin', amount: '4-6 drops or pea size' },
      { item: 'Black Chia Seeds', amount: '6 tbsp' },
      { item: 'Creamy Coconut Milk', amount: '1.5 cups' },
      { item: 'Vanilla Extract', amount: '1/2 tsp' },
      { item: 'Raw Cacao Nibs & Almond Slices', amount: '2 tbsp' }
    ],
    instructions: [
      'Dissolve Shilajit resin in 2 tbsp warm water first until completely liquid.',
      'In a glass jar, mix Shilajit solution, coconut milk, chia seeds, and vanilla extract.',
      'Whisk vigorously, let sit for 10 minutes, then whisk again to avoid clumping.',
      'Cover and chill in refrigerator for 4 hours or overnight.',
      'Top with raw cacao nibs and toasted almond slices before serving.'
    ],
    nutrition: {
      protein: '9g',
      carbs: '22g',
      fat: '14g',
      fiber: '11g',
      vitamins: ['Iron (35% DV)', 'Magnesium (40% DV)', 'Calcium (35% DV)']
    }
  },
  {
    id: 'beetroot-liver-detox-juice',
    title: 'Beetroot & Amla Liver Cleanse Juice',
    category: 'Healing & Detox',
    description: 'Vibrant crimson juice designed to support liver enzyme activity, bile flow, and cardiovascular circulation.',
    prepTime: '10 mins',
    cookTime: '0 mins',
    servings: 2,
    calories: 95,
    difficulty: 'Easy',
    rating: 4.8,
    reviewsCount: 129,
    image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&q=80&w=800',
    tags: ['Juicing', 'Liver Cleanse', 'Nitric Oxide', 'Detox'],
    keyBenefits: [
      'Enhances natural liver phase I & II detoxification',
      'Boosts nitric oxide for improved arterial blood flow',
      'High in folate, potassium, and active antioxidant betalains'
    ],
    superfoodsUsed: ['Amla Powder', 'Red Beetroot'],
    ingredients: [
      { item: 'Organic Amla Powder', amount: '1 tsp' },
      { item: 'Fresh Organic Red Beets', amount: '2 small' },
      { item: 'Green Apples', amount: '2' },
      { item: 'Cucumber', amount: '1 large' },
      { item: 'Fresh Lemon Juice', amount: '2 tbsp' }
    ],
    instructions: [
      'Run red beets, green apples, and cucumber through a cold-press masticating juicer.',
      'Whisk 1 tsp Organic Amla Powder and fresh lemon juice into the freshly pressed juice.',
      'Serve over ice and drink within 20 minutes for maximum live enzymes.'
    ],
    nutrition: {
      protein: '2g',
      carbs: '22g',
      fat: '0g',
      fiber: '3g',
      vitamins: ['Folate (45% DV)', 'Potassium (20% DV)', 'Vitamin C (150% DV)']
    }
  },
  {
    id: 'reishi-mushroom-broth',
    title: 'Reishi & Shiitake Immune Broth',
    category: 'Immunity & Strength',
    description: 'Deep savory, restorative medicinal broth simmering with adaptogenic Reishi, Shiitake mushrooms, garlic, and sea kelp.',
    prepTime: '15 mins',
    cookTime: '45 mins',
    servings: 4,
    calories: 70,
    difficulty: 'Medium',
    rating: 4.9,
    reviewsCount: 178,
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&q=80&w=800',
    tags: ['Medicinal Broth', 'Mushroom Adaptogen', 'Immune Defense', 'Gut Health'],
    keyBenefits: [
      'Abundant beta-glucans for white blood cell modulation',
      'Deeply nourishing for gut lining integrity',
      'Grounding savory tonic during seasonal shifts'
    ],
    superfoodsUsed: ['Reishi Mushroom', 'Shiitake', 'Kelp'],
    ingredients: [
      { item: 'Dried Reishi Mushroom Slices', amount: '15g' },
      { item: 'Fresh Shiitake Mushrooms', amount: '2 cups sliced' },
      { item: 'Garlic Cloves (Smashed)', amount: '6 cloves' },
      { item: 'Fresh Ginger Root', amount: '2-inch knob' },
      { item: 'Kombu Kelp Sheet', amount: '1 small strip' },
      { item: 'Spring Water', amount: '6 cups' }
    ],
    instructions: [
      'In a heavy soup pot, combine water, Reishi slices, Shiitake, garlic, ginger, and Kombu.',
      'Bring to a boil, then reduce heat to low, cover, and simmer for 45 minutes.',
      'Strain out solids, season broth with tamari or sea salt to taste.',
      'Drink as a warm sipping broth or use as a mineral base for soups.'
    ],
    nutrition: {
      protein: '4g',
      carbs: '8g',
      fat: '1g',
      fiber: '2g',
      vitamins: ['Selenium (30% DV)', 'Vitamin D (40% DV)', 'Iodine (80% DV)']
    }
  },
  {
    id: 'chamomile-chaga-nightcap',
    title: 'Chamomile & Chaga Deep Rest Infusion',
    category: 'Mind & Rest',
    description: 'Fragrant herbal tea blending whole chamomile blossoms with adaptogenic Chaga mushroom and passionflower.',
    prepTime: '5 mins',
    cookTime: '8 mins',
    servings: 1,
    calories: 10,
    difficulty: 'Easy',
    rating: 4.8,
    reviewsCount: 94,
    image: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&q=80&w=800',
    tags: ['Bedtime Tea', 'Calming', 'Zero Sugar', 'Unwind'],
    keyBenefits: [
      'Promotes muscle relaxation and GABA neurotransmitter production',
      'Eases nervous system agitation before sleep',
      'Provides cellular antioxidant repair overnight'
    ],
    superfoodsUsed: ['Chaga Mushroom', 'Chamomile'],
    ingredients: [
      { item: 'Chaga Mushroom Powder', amount: '1/2 tsp' },
      { item: 'Whole Dried Chamomile Flowers', amount: '2 tbsp' },
      { item: 'Passionflower Leaf', amount: '1 tsp' },
      { item: 'Boiling Water', amount: '1.5 cups' },
      { item: 'Raw Honey (Optional)', amount: '1 tsp' }
    ],
    instructions: [
      'Place chamomile flowers, passionflower, and Chaga powder into a tea teapot diffuser.',
      'Pour boiling water over herbs and cover.',
      'Steep for 8 minutes to extract full active flavonoids.',
      'Pour into your favorite tea mug and enjoy while reading.'
    ],
    nutrition: {
      protein: '0g',
      carbs: '2g',
      fat: '0g',
      fiber: '0g',
      vitamins: ['Antioxidant Polyphenols (High)']
    }
  },
  {
    id: 'moringa-avocado-gazpacho',
    title: 'Moringa & Chilled Avocado Gazpacho',
    category: 'Healing & Detox',
    description: 'Refreshing, nutrient-dense chilled raw soup made with cucumber, avocado, lime, cilantro, and Moringa superfood.',
    prepTime: '12 mins',
    cookTime: '0 mins',
    servings: 2,
    calories: 210,
    difficulty: 'Easy',
    rating: 4.7,
    reviewsCount: 88,
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&q=80&w=800',
    tags: ['Raw Food', 'Chilled Soup', 'Alkalizing', 'Summer Recipe'],
    keyBenefits: [
      'Alkalizes body pH and hydrates tissues',
      'Loaded with healthy monounsaturated fats',
      'Rich in potassium and digestive enzymes'
    ],
    superfoodsUsed: ['Moringa Powder'],
    ingredients: [
      { item: 'Moringa Leaf Powder', amount: '1 tsp' },
      { item: 'Ripe Avocados', amount: '2' },
      { item: 'English Cucumber', amount: '1' },
      { item: 'Fresh Lime Juice', amount: '3 tbsp' },
      { item: 'Fresh Cilantro', amount: '1/2 cup' },
      { item: 'Cold Vegetable Broth', amount: '1 cup' },
      { item: 'Himalayan Pink Salt & Garlic', amount: 'To taste' }
    ],
    instructions: [
      'Combine peeled avocado, cucumber, lime juice, cilantro, cold broth, and Moringa powder in a blender.',
      'Blend until velvety smooth.',
      'Chill in the fridge for 30 minutes before serving.',
      'Garnish with diced cucumber and hemp seeds.'
    ],
    nutrition: {
      protein: '5g',
      carbs: '16g',
      fat: '16g',
      fiber: '8g',
      vitamins: ['Vitamin C (80% DV)', 'Potassium (25% DV)']
    }
  },
  {
    id: 'amla-berry-anti-aging-smoothie',
    title: 'Amla & Antioxidant Berry Blast',
    category: 'Energy & Vitality',
    description: 'Tart and delicious anti-aging smoothie loaded with wild blueberries, blackberries, Amla powder, and chia seeds.',
    prepTime: '5 mins',
    cookTime: '0 mins',
    servings: 1,
    calories: 210,
    difficulty: 'Easy',
    rating: 4.9,
    reviewsCount: 230,
    image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&q=80&w=800',
    tags: ['Anti-Aging', 'Skin Radiance', 'Berry Smoothie', 'Vitamin C'],
    keyBenefits: [
      'Protects skin collagen against UV free radical damage',
      'Improves microcirculation and skin luminosity',
      'High anthocyanin content for brain vitality'
    ],
    superfoodsUsed: ['Amla Powder', 'Wild Blueberries'],
    ingredients: [
      { item: 'Organic Amla Powder', amount: '1 tsp' },
      { item: 'Frozen Wild Blueberries', amount: '1 cup' },
      { item: 'Frozen Blackberries', amount: '1/2 cup' },
      { item: 'Coconut Water', amount: '1 cup' },
      { item: 'Chia Seeds', amount: '1 tbsp' }
    ],
    instructions: [
      'Blend blueberries, blackberries, coconut water, chia seeds, and Amla powder on high for 60 seconds.',
      'Pour into a tall glass and let stand 2 minutes for chia seeds to thicken slightly.',
      'Drink fresh for optimal antioxidant density.'
    ],
    nutrition: {
      protein: '4g',
      carbs: '42g',
      fat: '3g',
      fiber: '10g',
      vitamins: ['Vitamin C (250% DV)', 'Manganese (50% DV)']
    }
  },
  {
    id: 'turmeric-shilajit-recovery-shot',
    title: 'Turmeric Shilajit Athletic Recovery Shot',
    category: 'Immunity & Strength',
    description: 'Concentrated 2oz wellness shot designed for swift post-workout muscle recovery, joint ease, and ATP replenishment.',
    prepTime: '3 mins',
    cookTime: '0 mins',
    servings: 2,
    calories: 35,
    difficulty: 'Easy',
    rating: 5.0,
    reviewsCount: 140,
    image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80&w=800',
    tags: ['Wellness Shot', 'Joint Health', 'Post Workout', 'Anti-Inflammatory'],
    keyBenefits: [
      'Accelerates muscular soreness recovery time',
      'Restores cellular fulvic mineral electrolytes',
      'Natural anti-inflammatory synergy'
    ],
    superfoodsUsed: ['Shilajit', 'Turmeric Juice'],
    ingredients: [
      { item: 'Pure Himalayan Shilajit Resin', amount: '5 drops' },
      { item: 'Cold Pressed Turmeric Juice', amount: '2 tbsp' },
      { item: 'Cold Pressed Ginger Juice', amount: '1 tbsp' },
      { item: 'Fresh Lemon Juice', amount: '2 tbsp' },
      { item: 'Pinch of Cayenne Pepper', amount: '1 pinch' }
    ],
    instructions: [
      'Stir Shilajit liquid resin into lemon juice until fully dissolved.',
      'Mix in cold-pressed turmeric and ginger juice with a pinch of cayenne.',
      'Pour into 2oz glass shot bottles.',
      'Take 1 shot immediately following intense physical exertion.'
    ],
    nutrition: {
      protein: '0g',
      carbs: '7g',
      fat: '0g',
      fiber: '1g',
      vitamins: ['Iron (20% DV)', 'Curcuminoid Extract (High)']
    }
  },
  {
    id: 'calming-reishi-raw-cacao-hot-chocolate',
    title: 'Reishi Adaptogenic Raw Cacao Drink',
    category: 'Mind & Rest',
    description: 'Rich, velvet dark chocolate elixir made with raw ceremonial cacao, red Reishi mushroom, and natural vanilla bean.',
    prepTime: '5 mins',
    cookTime: '5 mins',
    servings: 1,
    calories: 140,
    difficulty: 'Easy',
    rating: 4.9,
    reviewsCount: 260,
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&q=80&w=800',
    tags: ['Raw Cacao', 'Mushroom Chocolate', 'Mood Elevator', 'Relaxation'],
    keyBenefits: [
      'Stimulates endogenous anandamide ("bliss chemical")',
      'Provides high magnesium for neural relaxation',
      'Grounds nervous energy without drowsiness'
    ],
    superfoodsUsed: ['Reishi Mushroom', 'Raw Cacao'],
    ingredients: [
      { item: 'Reishi Mushroom Extract Powder', amount: '1 tsp' },
      { item: 'Raw Unprocessed Cacao Powder', amount: '1.5 tbsp' },
      { item: 'Homemade Hazelnut or Oat Milk', amount: '1 cup' },
      { item: 'Real Vanilla Bean Paste', amount: '1/4 tsp' },
      { item: 'Coconut Sugar or Stevia', amount: '1 tsp' }
    ],
    instructions: [
      'Whisk raw cacao, Reishi powder, and vanilla bean into milk in a small saucepan.',
      'Warm over medium-low heat until tiny bubbles form around the rim.',
      'Use a whisk or milk frother to build a creamy chocolate head.',
      'Pour into a warm ceramic mug and savor mindfully.'
    ],
    nutrition: {
      protein: '4g',
      carbs: '16g',
      fat: '6g',
      fiber: '4g',
      vitamins: ['Magnesium (35% DV)', 'Iron (25% DV)', 'Copper (40% DV)']
    }
  },
  {
    id: 'neem-aloe-vera-skin-cleanse-tonic',
    title: 'Neem & Aloe Radiance Skin Tonic',
    category: 'Healing & Detox',
    description: 'Hydrating cooling drink combining inner aloe vera leaf gel, Neem powder, cucumber, and key lime for skin clarity.',
    prepTime: '8 mins',
    cookTime: '0 mins',
    servings: 2,
    calories: 40,
    difficulty: 'Easy',
    rating: 4.8,
    reviewsCount: 112,
    image: 'https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&q=80&w=800',
    tags: ['Skin Health', 'Aloe Vera', 'Hydration', 'Detox'],
    keyBenefits: [
      'Soothes gastrointestinal heat and inflammation',
      'Promotes cellular skin hydration and collagen repair',
      'Gently purifies skin pores from the inside out'
    ],
    superfoodsUsed: ['Neem Powder', 'Aloe Vera Gel'],
    ingredients: [
      { item: 'Organic Neem Powder', amount: '1/4 tsp' },
      { item: 'Fresh Organic Aloe Vera Inner Gel', amount: '3 tbsp' },
      { item: 'Fresh Coconut Water', amount: '2 cups' },
      { item: 'Key Lime Juice', amount: '2 tbsp' }
    ],
    instructions: [
      'Scoop clear inner aloe vera gel from a fresh leaf.',
      'Blend coconut water, aloe gel, Neem powder, and lime juice for 15 seconds.',
      'Strain through a fine mesh strainer if desired.',
      'Serve over crushed ice.'
    ],
    nutrition: {
      protein: '1g',
      carbs: '9g',
      fat: '0g',
      fiber: '1g',
      vitamins: ['Potassium (18% DV)', 'Vitamin B12 (Active Enzymes)']
    }
  },
  {
    id: 'moringa-matcha-focus-latte',
    title: 'Moringa & Ceremonial Matcha Focus Latte',
    category: 'Energy & Vitality',
    description: 'Vibrant green morning elixir harmonizing Japanese ceremonial matcha with Moringa leaf powder for 6+ hours of calm focus.',
    prepTime: '5 mins',
    cookTime: '2 mins',
    servings: 1,
    calories: 85,
    difficulty: 'Easy',
    rating: 5.0,
    reviewsCount: 310,
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&q=80&w=800',
    tags: ['Matcha', 'Clean Energy', 'Brain Power', 'L-Theanine'],
    keyBenefits: [
      'L-theanine and caffeine synergy for alpha wave focus',
      'Powerful EGCG catechin antioxidants',
      'Sustained mental stamina without caffeine crash'
    ],
    superfoodsUsed: ['Moringa Powder', 'Ceremonial Matcha'],
    ingredients: [
      { item: 'Moringa Leaf Powder', amount: '1 tsp' },
      { item: 'Ceremonial Grade Matcha', amount: '1 tsp' },
      { item: 'Filtered Water (175°F)', amount: '1/3 cup' },
      { item: 'Warm Oat Milk or Hemp Milk', amount: '3/4 cup' },
      { item: 'Raw Honey or Monk Fruit', amount: '1 tsp' }
    ],
    instructions: [
      'Sift matcha and Moringa powder into a traditional bamboo bowl.',
      'Add hot water (not boiling) and whisk vigorously in a "W" motion until frothy.',
      'Pour warmed oat milk into a tall glass and top with green whisked shot.',
      'Sweeten lightly to taste.'
    ],
    nutrition: {
      protein: '3g',
      carbs: '10g',
      fat: '3g',
      fiber: '2g',
      vitamins: ['Vitamin A (90% DV)', 'EGCG Antioxidants (High)']
    }
  },
  {
    id: 'chaga-golden-turmeric-rice-bowl',
    title: 'Chaga & Golden Turmeric Healing Rice Bowl',
    category: 'Immunity & Strength',
    description: 'Aromatic basmati rice cooked in steeped Chaga tea and turmeric, served with steamed greens and tahini garlic drizzle.',
    prepTime: '10 mins',
    cookTime: '20 mins',
    servings: 3,
    calories: 320,
    difficulty: 'Easy',
    rating: 4.8,
    reviewsCount: 89,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800',
    tags: ['Warm Grain Bowl', 'Healing Meal', 'Plant Based', 'Ayurvedic Lunch'],
    keyBenefits: [
      'Deeply comforting, nutrient-dense main course meal',
      'Combines adaptogenic mushroom tea broth into daily staples',
      'Supports healthy gut microbiome and digestive fire'
    ],
    superfoodsUsed: ['Chaga Mushroom Tea', 'Turmeric'],
    ingredients: [
      { item: 'Brewed Strong Chaga Mushroom Tea', amount: '2 cups' },
      { item: 'Organic Jasmine or Basmati Rice', amount: '1 cup' },
      { item: 'Ground Turmeric & Sea Salt', amount: '1/2 tsp each' },
      { item: 'Steamed Kale & Roasted Sweet Potato', amount: '2 cups' },
      { item: 'Lemon Tahini Dressing', amount: '3 tbsp' }
    ],
    instructions: [
      'Rinse rice under cold water until clear.',
      'In a saucepan, bring brewed Chaga tea, rice, turmeric, and sea salt to a boil.',
      'Reduce heat to low, cover tight, and simmer for 15 minutes.',
      'Fluff rice with a fork, top with steamed kale and sweet potato, then drizzle with lemon tahini.'
    ],
    nutrition: {
      protein: '7g',
      carbs: '58g',
      fat: '8g',
      fiber: '6g',
      vitamins: ['Vitamin A (150% DV)', 'Manganese (40% DV)']
    }
  },
  {
    id: 'amla-citrus-glow-salad',
    title: 'Amla Citrus Glow Salad with Pumpkin Seeds',
    category: 'Healing & Detox',
    description: 'Crisp arugula, blood orange slices, avocado, and toasted pumpkin seeds tossed in an Amla-lemon vinaigrette.',
    prepTime: '15 mins',
    cookTime: '0 mins',
    servings: 2,
    calories: 260,
    difficulty: 'Easy',
    rating: 4.9,
    reviewsCount: 104,
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=800',
    tags: ['Raw Salad', 'Detox Meal', 'High Vitamin C', 'Skin Glow'],
    keyBenefits: [
      'High zinc and Vitamin C for tissue regeneration',
      'Provides alkalizing greens and healthy fats',
      'Light, satisfying lunch for gut health'
    ],
    superfoodsUsed: ['Amla Powder'],
    ingredients: [
      { item: 'Organic Amla Powder', amount: '1 tsp' },
      { item: 'Baby Arugula & Spinach', amount: '4 cups' },
      { item: 'Blood Oranges (Segmented)', amount: '2' },
      { item: 'Sliced Avocado', amount: '1' },
      { item: 'Toasted Pumpkin Seeds (Pepitas)', amount: '1/4 cup' },
      { item: 'Extra Virgin Olive Oil & Dijon', amount: '2 tbsp' }
    ],
    instructions: [
      'Whisk olive oil, Dijon mustard, Amla powder, fresh orange juice, salt, and pepper in a small bowl.',
      'Toss greens in a large salad bowl with half the dressing.',
      'Top with orange segments, sliced avocado, and pumpkin seeds.',
      'Drizzle remaining Amla dressing over top and serve immediately.'
    ],
    nutrition: {
      protein: '6g',
      carbs: '24g',
      fat: '18g',
      fiber: '8g',
      vitamins: ['Vitamin C (210% DV)', 'Zinc (25% DV)']
    }
  },
  {
    id: 'shilajit-maca-energy-bites',
    title: 'Shilajit & Maca Endurance Energy Balls',
    category: 'Energy & Vitality',
    description: 'No-bake raw snack balls packed with Medjool dates, Shilajit resin, gelatinized Maca, walnuts, and shredded coconut.',
    prepTime: '15 mins',
    cookTime: '0 mins',
    servings: 12,
    calories: 110,
    difficulty: 'Easy',
    rating: 5.0,
    reviewsCount: 275,
    image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&q=80&w=800',
    tags: ['No Bake', 'Energy Snack', 'Pre Workout', 'Handmade'],
    keyBenefits: [
      'Portable high-density mineral energy for hiking & workouts',
      'Hormonal support with Peruvian Maca and Himalayan Shilajit',
      'Keeps fresh in fridge for up to 3 weeks'
    ],
    superfoodsUsed: ['Shilajit', 'Maca Powder'],
    ingredients: [
      { item: 'Pure Himalayan Shilajit Resin', amount: '1/2 tsp' },
      { item: 'Pitted Medjool Dates', amount: '1.5 cups' },
      { item: 'Raw Walnuts', amount: '1 cup' },
      { item: 'Organic Maca Powder', amount: '1 tbsp' },
      { item: 'Unsweetened Shredded Coconut', amount: '1/2 cup' },
      { item: 'Pinch of Sea Salt', amount: '1/4 tsp' }
    ],
    instructions: [
      'Pulse walnuts in a food processor until coarsely chopped.',
      'Add pitted dates, Maca powder, sea salt, and Shilajit resin.',
      'Process on high until mixture comes together into a sticky ball.',
      'Roll into 12 equal bite-sized balls and coat in shredded coconut.',
      'Refrigerate for 1 hour to set.'
    ],
    nutrition: {
      protein: '3g',
      carbs: '16g',
      fat: '5g',
      fiber: '3g',
      vitamins: ['Iron (15% DV)', 'Copper (20% DV)']
    }
  },
  {
    id: 'lavender-ashwagandha-calming-spritzer',
    title: 'Lavender & Ashwagandha Sunset Spritzer',
    category: 'Mind & Rest',
    description: 'Sparkling botanical mocktail infused with dried lavender, ashwagandha adaptogen, fresh blackberry, and sparkling water.',
    prepTime: '5 mins',
    cookTime: '0 mins',
    servings: 2,
    calories: 45,
    difficulty: 'Easy',
    rating: 4.9,
    reviewsCount: 160,
    image: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&q=80&w=800',
    tags: ['Mocktail', 'Calming Drink', 'Zero Alcohol', 'Unwind'],
    keyBenefits: [
      'Sophisticated alcohol-free evening cocktail replacement',
      'Relieves social stress and mental fatigue',
      'Low calorie, naturally sweetened beverage'
    ],
    superfoodsUsed: ['Ashwagandha', 'Lavender Syrup'],
    ingredients: [
      { item: 'Organic Ashwagandha Powder', amount: '1 tsp' },
      { item: 'Fresh Blackberries', amount: '1/2 cup' },
      { item: 'Culinary Lavender Infusion', amount: '2 tbsp' },
      { item: 'Sparkling Mineral Water', amount: '2 cups' },
      { item: 'Fresh Lemon Juice', amount: '2 tbsp' }
    ],
    instructions: [
      'Muddle fresh blackberries with Ashwagandha and lemon juice in a cocktail shaker.',
      'Add lavender syrup and ice cubes, shake gently.',
      'Strain into 2 highball glasses filled with ice.',
      'Top with sparkling mineral water and garnish with a lavender sprig.'
    ],
    nutrition: {
      protein: '0g',
      carbs: '11g',
      fat: '0g',
      fiber: '2g',
      vitamins: ['Magnesium (15% DV)', 'Vitamin C (35% DV)']
    }
  }
];
