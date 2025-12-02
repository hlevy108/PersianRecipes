export const recipes = [
  {
    id: 'kuku-sabzi',
    name: 'Kuku Sabzi (Herb Frittata)',
    description: 'A fluffy, herb-packed Persian frittata that’s quick and vegetarian.',
    baseServings: 4,
    time: '30 min',
    tags: ['vegetarian', 'quick'],
    ingredients: [
      { item: 'large eggs', quantity: 6, unit: '' },
      { item: 'fresh parsley, chopped', quantity: 2, unit: 'cups' },
      { item: 'fresh cilantro, chopped', quantity: 1, unit: 'cup' },
      { item: 'fresh dill, chopped', quantity: 1, unit: 'cup' },
      { item: 'green onions, sliced', quantity: 4, unit: '' },
      { item: 'walnuts, chopped (optional)', quantity: 0.5, unit: 'cup' },
      { item: 'baking powder', quantity: 1, unit: 'tsp' },
      { item: 'turmeric', quantity: 0.5, unit: 'tsp' },
      { item: 'salt', quantity: 1, unit: 'tsp' },
      { item: 'black pepper', quantity: 0.5, unit: 'tsp' },
      { item: 'neutral oil', quantity: 2, unit: 'tbsp' }
    ],
    steps: [
      'Whisk eggs with baking powder, turmeric, salt, and pepper.',
      'Fold in herbs, green onions, and walnuts.',
      'Heat oil in a nonstick skillet over medium. Pour in mixture.',
      'Cook covered 8–10 min. Flip or finish under broiler until set.',
      'Slice and serve warm or room temp.'
    ]
  },
  {
    id: 'salad-shirazi',
    name: 'Salad Shirazi',
    description: 'Crisp cucumber, tomato, and onion salad with lemon and dried mint.',
    baseServings: 4,
    time: '15 min',
    tags: ['vegetarian', 'vegan', 'gluten-free', 'quick'],
    ingredients: [
      { item: 'English cucumbers, diced', quantity: 2, unit: '' },
      { item: 'ripe tomatoes, diced', quantity: 3, unit: '' },
      { item: 'red onion, finely diced', quantity: 0.5, unit: '' },
      { item: 'lemon juice', quantity: 3, unit: 'tbsp' },
      { item: 'olive oil', quantity: 2, unit: 'tbsp' },
      { item: 'dried mint', quantity: 1, unit: 'tsp' },
      { item: 'salt', quantity: 0.75, unit: 'tsp' },
      { item: 'black pepper', quantity: 0.25, unit: 'tsp' }
    ],
    steps: [
      'Combine cucumbers, tomatoes, and onion in a bowl.',
      'Whisk lemon juice, olive oil, dried mint, salt, and pepper.',
      'Toss with vegetables. Chill 10 minutes before serving.'
    ]
  },
  {
    id: 'mast-o-khiar',
    name: 'Mast-o-Khiar (Yogurt Cucumber Dip)',
    description: 'Creamy yogurt dip with cucumber and mint. Great with bread or as a side.',
    baseServings: 4,
    time: '10 min',
    tags: ['vegetarian', 'gluten-free', 'quick'],
    ingredients: [
      { item: 'plain yogurt', quantity: 2, unit: 'cups' },
      { item: 'cucumber, finely diced', quantity: 1, unit: '' },
      { item: 'dried mint', quantity: 1, unit: 'tsp' },
      { item: 'garlic clove, grated', quantity: 1, unit: '' },
      { item: 'salt', quantity: 0.5, unit: 'tsp' },
      { item: 'black pepper', quantity: 0.25, unit: 'tsp' },
      { item: 'olive oil (to finish)', quantity: 1, unit: 'tbsp' }
    ],
    steps: [
      'Stir yogurt with cucumber, mint, garlic, salt, and pepper.',
      'Drizzle with olive oil. Serve chilled.'
    ]
  },
  {
    id: 'khoresh-bademjan',
    name: 'Khoresh Bademjan (Eggplant & Tomato Stew)',
    description: 'Comforting eggplant and tomato stew. This version uses chickpeas for ease.',
    baseServings: 4,
    time: '55 min',
    tags: ['vegetarian', 'gluten-free'],
    ingredients: [
      { item: 'eggplants, peeled and halved lengthwise', quantity: 2, unit: '' },
      { item: 'onion, sliced', quantity: 1, unit: '' },
      { item: 'garlic cloves, minced', quantity: 3, unit: '' },
      { item: 'crushed tomatoes', quantity: 2, unit: 'cups' },
      { item: 'canned chickpeas, drained', quantity: 1, unit: 'can' },
      { item: 'turmeric', quantity: 1, unit: 'tsp' },
      { item: 'salt', quantity: 1, unit: 'tsp' },
      { item: 'black pepper', quantity: 0.5, unit: 'tsp' },
      { item: 'vegetable oil', quantity: 3, unit: 'tbsp' },
      { item: 'lemon juice', quantity: 1, unit: 'tbsp' }
    ],
    steps: [
      'Salt eggplants lightly and let sit 10 min. Pat dry.',
      'Brown eggplants in oil and set aside.',
      'Sauté onion until soft, add garlic and turmeric for 30 seconds.',
      'Add tomatoes, chickpeas, salt, and pepper. Simmer 20 minutes.',
      'Nestle eggplants back in. Simmer 10–15 minutes more. Finish with lemon.'
    ]
  },
  {
    id: 'adas-polo',
    name: 'Adas Polo (Lentil Rice)',
    description: 'Fragrant rice with lentils, raisins, and warm spices.',
    baseServings: 4,
    time: '50 min',
    tags: ['vegetarian'],
    ingredients: [
      { item: 'basmati rice, rinsed', quantity: 2, unit: 'cups' },
      { item: 'brown lentils, rinsed', quantity: 0.75, unit: 'cup' },
      { item: 'onion, sliced', quantity: 1, unit: '' },
      { item: 'raisins', quantity: 0.5, unit: 'cup' },
      { item: 'ground cumin', quantity: 1, unit: 'tsp' },
      { item: 'turmeric', quantity: 1, unit: 'tsp' },
      { item: 'salt', quantity: 1, unit: 'tsp' },
      { item: 'black pepper', quantity: 0.5, unit: 'tsp' },
      { item: 'butter or oil', quantity: 2, unit: 'tbsp' }
    ],
    steps: [
      'Parboil rice 6–7 min in salted water; drain.',
      'Simmer lentils in water until just tender; drain.',
      'Sauté onion in butter/oil until golden. Add raisins briefly.',
      'Combine rice, lentils, cumin, turmeric, salt, pepper. Steam 20 minutes.',
      'Fluff and serve.'
    ]
  },
  {
    id: 'jujeh-kabab',
    name: 'Jujeh Kabab (Yogurt Lemon Chicken)',
    description: 'Bright grilled or oven-roasted chicken with yogurt, lemon, and turmeric.',
    baseServings: 4,
    time: '1 hr (plus marinating)',
    tags: ['gluten-free'],
    ingredients: [
      { item: 'boneless chicken thighs, chunks', quantity: 1.5, unit: 'lb' },
      { item: 'plain yogurt', quantity: 0.5, unit: 'cup' },
      { item: 'lemon juice', quantity: 3, unit: 'tbsp' },
      { item: 'onion, grated', quantity: 0.5, unit: '' },
      { item: 'garlic cloves, minced', quantity: 3, unit: '' },
      { item: 'turmeric', quantity: 1, unit: 'tsp' },
      { item: 'paprika', quantity: 1, unit: 'tsp' },
      { item: 'salt', quantity: 1, unit: 'tsp' },
      { item: 'black pepper', quantity: 0.5, unit: 'tsp' },
      { item: 'olive oil', quantity: 2, unit: 'tbsp' }
    ],
    steps: [
      'Mix yogurt, lemon, onion, garlic, turmeric, paprika, salt, pepper, oil.',
      'Coat chicken. Marinate 30 min to overnight.',
      'Grill or roast at 425°F/220°C until cooked through and charry edges form.'
    ]
  },
  {
    id: 'kotlet',
    name: 'Kotlet (Crispy Beef & Potato Patties)',
    description: 'Golden pan-fried patties with beef and potato. Great in sandwiches.',
    baseServings: 4,
    time: '45 min',
    tags: [],
    ingredients: [
      { item: 'ground beef', quantity: 1, unit: 'lb' },
      { item: 'potatoes, boiled and mashed', quantity: 2, unit: '' },
      { item: 'onion, grated and squeezed', quantity: 1, unit: '' },
      { item: 'egg', quantity: 1, unit: '' },
      { item: 'all-purpose flour or breadcrumbs', quantity: 0.25, unit: 'cup' },
      { item: 'turmeric', quantity: 0.5, unit: 'tsp' },
      { item: 'salt', quantity: 1, unit: 'tsp' },
      { item: 'black pepper', quantity: 0.5, unit: 'tsp' },
      { item: 'neutral oil (for frying)', quantity: 0.25, unit: 'cup' }
    ],
    steps: [
      'Mix beef, potatoes, onion, egg, flour, turmeric, salt, and pepper.',
      'Form oval patties. Pan-fry in oil over medium heat until deeply golden.',
      'Drain on paper towels. Serve hot or room temp.'
    ]
  },
  {
    id: 'sabzi-polo',
    name: 'Sabzi Polo (Herb Rice)',
    description: 'Fluffy rice with dill, parsley, and cilantro. Perfect with fish or chicken.',
    baseServings: 4,
    time: '45 min',
    tags: ['vegetarian'],
    ingredients: [
      { item: 'basmati rice, rinsed', quantity: 2, unit: 'cups' },
      { item: 'fresh dill, chopped', quantity: 1, unit: 'cup' },
      { item: 'fresh parsley, chopped', quantity: 1, unit: 'cup' },
      { item: 'fresh cilantro, chopped', quantity: 0.5, unit: 'cup' },
      { item: 'butter or oil', quantity: 2, unit: 'tbsp' },
      { item: 'salt', quantity: 1, unit: 'tsp' }
    ],
    steps: [
      'Parboil rice 6–7 min in salted water; drain.',
      'Fold in chopped herbs.',
      'Steam over low heat 20–25 minutes with a towel-lined lid.',
      'Dot with butter/oil and fluff to serve.'
    ]
  }
]

export function searchRecipes(recipesList, query) {
  if (!query) return recipesList
  const q = query.toLowerCase().trim()
  return recipesList.filter((r) => {
    const inName = r.name.toLowerCase().includes(q)
    const inTags = (r.tags || []).some((t) => t.toLowerCase().includes(q))
    const inIngredients = r.ingredients.some((ing) =>
      ing.item.toLowerCase().includes(q)
    )
    return inName || inTags || inIngredients
  })
}


