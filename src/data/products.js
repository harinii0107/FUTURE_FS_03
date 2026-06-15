import heroBg from '../assets/images/hero.png'
import sourdough from '../assets/images/sourdough.png'
import croissant from '../assets/images/croissant.png'
import cake from '../assets/images/cake.png'
import cinnamonRoll from '../assets/images/cinnamon_roll.png'

export const products = [
  // Breads
  {
    id: 1,
    category: 'breads',
    name: 'Classic Sourdough',
    description: 'Slow-fermented 72-hour sourdough with a crackling crust and tangy, open crumb. Our most loved loaf.',
    price: 8.50,
    image: sourdough,
    tags: ['bestseller'],
    available: true,
  },
  {
    id: 2,
    category: 'breads',
    name: 'Honey Whole Wheat',
    description: 'Hearty whole wheat bread sweetened with raw local honey. Perfect for morning toast.',
    price: 7.00,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&q=80',
    tags: ['healthy'],
    available: true,
  },
  {
    id: 3,
    category: 'breads',
    name: 'Rosemary Focaccia',
    description: 'Italian-style olive oil focaccia topped with fresh rosemary, sea salt, and roasted garlic.',
    price: 6.50,
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&q=80',
    tags: ['vegan'],
    available: true,
  },
  {
    id: 4,
    category: 'breads',
    name: 'Multigrain Seeded',
    description: 'Packed with sunflower, pumpkin, sesame and flax seeds. Nutritious and delicious.',
    price: 7.50,
    image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc7b?w=400&q=80',
    tags: ['healthy', 'vegan'],
    available: true,
  },

  // Pastries
  {
    id: 5,
    category: 'pastries',
    name: 'Butter Croissant',
    description: 'Flaky, buttery croissants made with French-style laminated dough. 72-layer perfection.',
    price: 4.50,
    image: croissant,
    tags: ['bestseller'],
    available: true,
  },
  {
    id: 6,
    category: 'pastries',
    name: 'Cinnamon Roll',
    description: 'Soft, pillowy rolls swirled with brown sugar cinnamon and topped with cream cheese glaze.',
    price: 5.00,
    image: cinnamonRoll,
    tags: ['bestseller'],
    available: true,
  },
  {
    id: 7,
    category: 'pastries',
    name: 'Almond Danish',
    description: 'Flaky pastry filled with almond cream, topped with sliced almonds and honey drizzle.',
    price: 5.50,
    image: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=400&q=80',
    tags: [],
    available: true,
  },
  {
    id: 8,
    category: 'pastries',
    name: 'Blueberry Muffin',
    description: 'Jumbo muffins bursting with fresh blueberries and topped with crunchy streusel.',
    price: 3.75,
    image: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=400&q=80',
    tags: [],
    available: true,
  },

  // Cakes
  {
    id: 9,
    category: 'cakes',
    name: 'Celebration Layer Cake',
    description: 'Three-layer vanilla sponge with Swiss meringue buttercream, fresh flowers, and gold leaf.',
    price: 65.00,
    image: cake,
    tags: ['custom-order'],
    available: true,
  },
  {
    id: 10,
    category: 'cakes',
    name: 'Belgian Chocolate Tart',
    description: 'Rich, velvety chocolate ganache in a buttery shortcrust shell. A chocoholic\'s dream.',
    price: 42.00,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&q=80',
    tags: [],
    available: true,
  },
  {
    id: 11,
    category: 'cakes',
    name: 'Lemon Drizzle',
    description: 'Zesty lemon cake with candied lemon peel, lemon curd filling, and light cream frosting.',
    price: 38.00,
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&q=80',
    tags: [],
    available: true,
  },
  {
    id: 12,
    category: 'cakes',
    name: 'Strawberry Chantilly',
    description: 'Genoise sponge with chantilly cream, fresh strawberries and rose water syrup.',
    price: 45.00,
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?w=400&q=80',
    tags: [],
    available: true,
  },

  // Beverages
  {
    id: 13,
    category: 'beverages',
    name: 'Artisan Drip Coffee',
    description: 'Single-origin beans, freshly ground and brewed to order. Smooth, rich, and aromatic.',
    price: 3.50,
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80',
    tags: ['vegan'],
    available: true,
  },
  {
    id: 14,
    category: 'beverages',
    name: 'Vanilla Latte',
    description: 'Double espresso with silky steamed milk and house-made vanilla syrup.',
    price: 5.00,
    image: 'https://images.unsplash.com/photo-1561047029-3000c68339ca?w=400&q=80',
    tags: [],
    available: true,
  },
  {
    id: 15,
    category: 'beverages',
    name: 'Chamomile Honey Tea',
    description: 'Soothing organic chamomile with a spoonful of raw wildflower honey.',
    price: 3.00,
    image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=400&q=80',
    tags: ['vegan'],
    available: true,
  },
  {
    id: 16,
    category: 'beverages',
    name: 'Fresh Lemonade',
    description: 'Hand-squeezed Meyer lemons with mint and a touch of lavender. Refreshingly tart.',
    price: 4.00,
    image: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=400&q=80',
    tags: ['vegan'],
    available: true,
  },
]

export const categories = [
  { id: 'all', label: 'All Items' },
  { id: 'breads', label: 'Breads' },
  { id: 'pastries', label: 'Pastries' },
  { id: 'cakes', label: 'Cakes' },
  { id: 'beverages', label: 'Beverages' },
]

export const featuredProducts = products.filter(p =>
  p.tags.includes('bestseller')
).slice(0, 4)

export { heroBg }
