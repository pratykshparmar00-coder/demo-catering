import { MenuItem } from './calculator';

export const SAMPLE_MENU: MenuItem[] = [
  // Starters - Veg
  { id: 'v1', name: 'Paneer Tikka Angara', category: 'starters', type: 'veg', pricePerPax: 55, description: 'Char-grilled cottage cheese in smoky spices', popular: true },
  { id: 'v2', name: 'Crispy Veg Spring Roll', category: 'starters', type: 'veg', pricePerPax: 40, description: 'Stuffed with fresh crunchy garden veggies' },
  { id: 'v3', name: 'Hara Bhara Kebab', category: 'starters', type: 'veg', pricePerPax: 45, description: 'Spinach & green pea savory patties' },
  { id: 'v4', name: 'Cheese Corn Balls', category: 'starters', type: 'veg', pricePerPax: 50, description: 'Golden molten cheese and sweetcorn' },

  // Starters - Non-Veg
  { id: 'nv1', name: 'Murgh Malai Tikka', category: 'starters', type: 'non-veg', pricePerPax: 75, description: 'Tender chicken marinated in cashew cream', popular: true },
  { id: 'nv2', name: 'Amritsari Fish Fry', category: 'starters', type: 'non-veg', pricePerPax: 90, description: 'Carom seed crusted crispy river sole' },
  { id: 'nv3', name: 'Seekh Kebab Mutton', category: 'starters', type: 'non-veg', pricePerPax: 110, description: 'Spiced minced lamb flame roasted on skewers' },

  // Mains - Veg
  { id: 'mv1', name: 'Paneer Butter Masala', category: 'mains', type: 'veg', pricePerPax: 65, description: 'Rich tomato gravy with kasuri methi & cream', popular: true },
  { id: 'mv2', name: 'Dal Makhani Special', category: 'mains', type: 'veg', pricePerPax: 45, description: 'Slow cooked black lentils simmered overnight' },
  { id: 'mv3', name: 'Subz Diwani Handi', category: 'mains', type: 'veg', pricePerPax: 45, description: 'Seasonal garden veggies in spinach gravy' },

  // Mains - Non-Veg
  { id: 'mnv1', name: 'Butter Chicken Boneless', category: 'mains', type: 'non-veg', pricePerPax: 85, description: 'Classic Delhi style velvety tomato butter gravy', popular: true },
  { id: 'mnv2', name: 'Hydrabad Korma Mutton', category: 'mains', type: 'non-veg', pricePerPax: 120, description: 'Slow-braised mutton in aromatic brown onion gravy' },

  // Rice & Breads
  { id: 'r1', name: 'Dum Veg Biryani', category: 'rice', type: 'veg', pricePerPax: 40, description: 'Aromatic basmati rice cooked on dum with saffron' },
  { id: 'r2', name: 'Chicken Dum Biryani', category: 'rice', type: 'non-veg', pricePerPax: 65, description: 'Hyderabadi style layered basmati with chicken' },
  { id: 'r3', name: 'Assorted Butter Naan & Roti', category: 'rice', type: 'veg', pricePerPax: 25, description: 'Freshly baked tandoori breads' },

  // Desserts
  { id: 'd1', name: 'Hot Gulab Jamun (2 pcs)', category: 'desserts', type: 'veg', pricePerPax: 30, description: 'Soft khoya dumplings in cardamom syrup' },
  { id: 'd2', name: 'Kesari Rasmalai', category: 'desserts', type: 'veg', pricePerPax: 45, description: 'Chilled cottage cheese discs in saffron milk', popular: true },
  { id: 'd3', name: 'Moong Dal Halwa', category: 'desserts', type: 'veg', pricePerPax: 40, description: 'Pure desi ghee roasted mung bean halwa' },

  // Addons
  { id: 'a1', name: 'Live Woodfire Pizza Counter', category: 'addons', type: 'veg', pricePerPax: 95, description: 'Chef preparing fresh thin-crust pizzas live' },
  { id: 'a2', name: 'Live Chaat Counter', category: 'addons', type: 'veg', pricePerPax: 55, description: 'Pani puri, Dahi puri & Aloo tikki live station' },
  { id: 'a3', name: 'Uniformed Server Staff (Per Server)', category: 'addons', type: 'veg', pricePerPax: 35, description: 'Professional servers for table maintenance & replenishment' }
];
