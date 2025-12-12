export const products = [
  {
    id: 1,
    name: "Classic White T-Shirt",
    category: "men",
    subcategory: "tops",
    price: 29.99,
    originalPrice: 39.99,
    description: "Premium cotton t-shirt with a modern fit. Perfect for casual wear and layering.",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80&fit=crop",
      "https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=500&q=80&fit=crop"
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["White", "Black", "Gray", "Navy"],
    inStock: true,
    featured: true,
    rating: 4.5,
    reviews: 128
  },
  {
    id: 2,
    name: "Slim Fit Denim Jeans",
    category: "men",
    subcategory: "bottoms",
    price: 79.99,
    description: "Stylish slim fit jeans with stretch denim for ultimate comfort.",
    images: [
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&q=80&fit=crop",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&q=80&fit=crop"
    ],
    sizes: ["28", "30", "32", "34", "36", "38"],
    colors: ["Dark Blue", "Light Blue", "Black"],
    inStock: true,
    featured: true,
    rating: 4.7,
    reviews: 95
  },
  {
    id: 3,
    name: "Floral Summer Dress",
    category: "women",
    subcategory: "dresses",
    price: 89.99,
    originalPrice: 119.99,
    description: "Beautiful floral print dress perfect for summer occasions.",
    images: [
      "https://images.unsplash.com/photo-1572804013427-4d7ca7268217?w=500&q=80&fit=crop",
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&q=80&fit=crop"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Floral Blue", "Floral Pink", "Floral Yellow"],
    inStock: true,
    featured: true,
    rating: 4.8,
    reviews: 203
  },
  {
    id: 4,
    name: "Leather Jacket",
    category: "men",
    subcategory: "outerwear",
    price: 249.99,
    description: "Premium leather jacket with modern design and comfortable fit.",
    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&q=80&fit=crop",
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?w=500&q=80&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Brown", "Tan"],
    inStock: true,
    featured: false,
    rating: 4.9,
    reviews: 67
  },
  {
    id: 5,
    name: "Casual Blazer",
    category: "women",
    subcategory: "outerwear",
    price: 129.99,
    originalPrice: 169.99,
    description: "Elegant blazer perfect for office and casual events.",
    images: [
      "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=500&q=80&fit=crop",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&q=80&fit=crop"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Navy", "Beige", "White"],
    inStock: true,
    featured: true,
    rating: 4.6,
    reviews: 84
  },
  {
    id: 6,
    name: "Skinny Fit Jeans",
    category: "women",
    subcategory: "bottoms",
    price: 69.99,
    description: "Modern skinny fit jeans with stretch for all-day comfort.",
    images: [
      "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?w=500&q=80&fit=crop",
      "https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?w=500&q=80&fit=crop"
    ],
    sizes: ["24", "26", "28", "30", "32"],
    colors: ["Dark Blue", "Black", "Light Blue"],
    inStock: true,
    featured: false,
    rating: 4.4,
    reviews: 156
  },
  {
    id: 7,
    name: "Striped Polo Shirt",
    category: "men",
    subcategory: "tops",
    price: 49.99,
    description: "Classic polo shirt with modern striped design.",
    images: [
      "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=500&q=80&fit=crop",
      "https://images.unsplash.com/photo-1594938291221-94f18cbb5660?w=500&q=80&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Navy/White", "Black/Gray", "Red/White"],
    inStock: true,
    featured: false,
    rating: 4.3,
    reviews: 72
  },
  {
    id: 8,
    name: "Knit Sweater",
    category: "women",
    subcategory: "tops",
    price: 59.99,
    originalPrice: 79.99,
    description: "Cozy knit sweater perfect for cooler weather.",
    images: [
      "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=500&q=80&fit=crop",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=500&q=80&fit=crop"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Cream", "Gray", "Burgundy", "Navy"],
    inStock: true,
    featured: true,
    rating: 4.7,
    reviews: 112
  },
  {
    id: 9,
    name: "Sports Hoodie",
    category: "men",
    subcategory: "outerwear",
    price: 64.99,
    description: "Comfortable hoodie ideal for workouts and casual wear.",
    images: [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&q=80&fit=crop",
      "https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?w=500&q=80&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Gray", "Navy", "Green"],
    inStock: true,
    featured: false,
    rating: 4.5,
    reviews: 89
  },
  {
    id: 10,
    name: "Maxi Skirt",
    category: "women",
    subcategory: "bottoms",
    price: 54.99,
    description: "Elegant flowing maxi skirt for any occasion.",
    images: [
      "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=500&q=80&fit=crop",
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=500&q=80&fit=crop"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Burgundy", "Olive", "Mustard"],
    inStock: true,
    featured: false,
    rating: 4.6,
    reviews: 94
  },
  {
    id: 11,
    name: "Chino Pants",
    category: "men",
    subcategory: "bottoms",
    price: 59.99,
    description: "Versatile chino pants perfect for smart casual looks.",
    images: [
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500&q=80&fit=crop",
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500&q=80&fit=crop"
    ],
    sizes: ["28", "30", "32", "34", "36", "38"],
    colors: ["Khaki", "Navy", "Black", "Olive"],
    inStock: true,
    featured: false,
    rating: 4.4,
    reviews: 78
  },
  {
    id: 12,
    name: "Silk Blouse",
    category: "women",
    subcategory: "tops",
    price: 79.99,
    originalPrice: 99.99,
    description: "Luxurious silk blouse with elegant design.",
    images: [
      "https://images.unsplash.com/photo-1564859228273-274232fdb516?w=500&q=80&fit=crop",
      "https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?w=500&q=80&fit=crop"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["White", "Black", "Blush", "Navy"],
    inStock: false,
    featured: true,
    rating: 4.8,
    reviews: 145
  },
  {
    id: 13,
    name: "Cotton Henley Shirt",
    category: "men",
    subcategory: "tops",
    price: 39.99,
    description: "Comfortable cotton henley perfect for casual occasions.",
    images: [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&q=80&fit=crop",
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&q=80&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White", "Gray", "Navy", "Burgundy"],
    inStock: true,
    featured: false,
    rating: 4.5,
    reviews: 67
  },
  {
    id: 14,
    name: "Wrap Dress",
    category: "women",
    subcategory: "dresses",
    price: 94.99,
    originalPrice: 129.99,
    description: "Elegant wrap dress with adjustable fit and flattering silhouette.",
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&q=80&fit=crop",
      "https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?w=500&q=80&fit=crop"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Red", "Black", "Emerald", "Navy"],
    inStock: true,
    featured: true,
    rating: 4.9,
    reviews: 203
  },
  {
    id: 15,
    name: "Cargo Shorts",
    category: "men",
    subcategory: "bottoms",
    price: 44.99,
    description: "Functional cargo shorts with multiple pockets.",
    images: [
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=500&q=80&fit=crop",
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500&q=80&fit=crop"
    ],
    sizes: ["28", "30", "32", "34", "36", "38"],
    colors: ["Khaki", "Olive", "Navy", "Black"],
    inStock: true,
    featured: false,
    rating: 4.3,
    reviews: 89
  },
  {
    id: 16,
    name: "Turtleneck Sweater",
    category: "women",
    subcategory: "tops",
    price: 69.99,
    description: "Cozy turtleneck sweater in soft merino wool blend.",
    images: [
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&q=80&fit=crop",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&q=80&fit=crop"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Cream", "Camel", "Forest Green"],
    inStock: true,
    featured: true,
    rating: 4.7,
    reviews: 142
  },
  {
    id: 17,
    name: "Athletic Track Pants",
    category: "men",
    subcategory: "bottoms",
    price: 54.99,
    description: "Comfortable track pants with tapered fit and side pockets.",
    images: [
      "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=500&q=80&fit=crop",
      "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=500&q=80&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Navy", "Gray", "Olive"],
    inStock: true,
    featured: false,
    rating: 4.4,
    reviews: 76
  },
  {
    id: 18,
    name: "Midi Pencil Skirt",
    category: "women",
    subcategory: "bottoms",
    price: 59.99,
    originalPrice: 79.99,
    description: "Professional pencil skirt with back slit detail.",
    images: [
      "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=500&q=80&fit=crop",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&q=80&fit=crop"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Navy", "Burgundy", "Gray"],
    inStock: true,
    featured: false,
    rating: 4.6,
    reviews: 98
  },
  {
    id: 19,
    name: "Bomber Jacket",
    category: "men",
    subcategory: "outerwear",
    price: 129.99,
    description: "Classic bomber jacket with ribbed cuffs and hem.",
    images: [
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&q=80&fit=crop",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&q=80&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Olive", "Navy", "Burgundy"],
    inStock: true,
    featured: true,
    rating: 4.8,
    reviews: 134
  },
  {
    id: 20,
    name: "Linen Button-Up",
    category: "women",
    subcategory: "tops",
    price: 64.99,
    description: "Breathable linen button-up perfect for warm weather.",
    images: [
      "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?w=500&q=80&fit=crop",
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&q=80&fit=crop"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["White", "Beige", "Sky Blue", "Sage"],
    inStock: true,
    featured: false,
    rating: 4.5,
    reviews: 87
  },
  {
    id: 21,
    name: "Oxford Dress Shirt",
    category: "men",
    subcategory: "tops",
    price: 69.99,
    originalPrice: 89.99,
    description: "Classic oxford dress shirt for formal occasions.",
    images: [
      "https://images.unsplash.com/photo-1602810319428-019690571b5b?w=500&q=80&fit=crop",
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&q=80&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White", "Light Blue", "Pink", "Lavender"],
    inStock: true,
    featured: false,
    rating: 4.7,
    reviews: 156
  },
  {
    id: 22,
    name: "Cocktail Dress",
    category: "women",
    subcategory: "dresses",
    price: 139.99,
    originalPrice: 189.99,
    description: "Stunning cocktail dress perfect for special events.",
    images: [
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=500&q=80&fit=crop",
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&q=80&fit=crop"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Red", "Emerald", "Royal Blue"],
    inStock: true,
    featured: true,
    rating: 4.9,
    reviews: 187
  },
  {
    id: 23,
    name: "Cargo Joggers",
    category: "men",
    subcategory: "bottoms",
    price: 74.99,
    description: "Modern cargo joggers with utility pockets and elastic cuffs.",
    images: [
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500&q=80&fit=crop",
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500&q=80&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Olive", "Khaki", "Gray"],
    inStock: true,
    featured: false,
    rating: 4.6,
    reviews: 112
  },
  {
    id: 24,
    name: "Cashmere Cardigan",
    category: "women",
    subcategory: "tops",
    price: 149.99,
    originalPrice: 199.99,
    description: "Luxurious cashmere cardigan with button closure.",
    images: [
      "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=500&q=80&fit=crop",
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&q=80&fit=crop"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Camel", "Black", "Cream", "Gray"],
    inStock: true,
    featured: true,
    rating: 4.9,
    reviews: 234
  },
  {
    id: 25,
    name: "Performance Polo",
    category: "men",
    subcategory: "tops",
    price: 54.99,
    description: "Moisture-wicking polo perfect for active lifestyle.",
    images: [
      "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=500&q=80&fit=crop",
      "https://images.unsplash.com/photo-1594938291221-94f18cbb5660?w=500&q=80&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White", "Navy", "Black", "Red"],
    inStock: true,
    featured: false,
    rating: 4.4,
    reviews: 91
  },
  {
    id: 26,
    name: "High-Waist Culottes",
    category: "women",
    subcategory: "bottoms",
    price: 64.99,
    description: "Trendy high-waist culottes with wide leg silhouette.",
    images: [
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&q=80&fit=crop",
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=500&q=80&fit=crop"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Navy", "Tan", "White"],
    inStock: true,
    featured: false,
    rating: 4.5,
    reviews: 78
  },
  {
    id: 27,
    name: "Puffer Vest",
    category: "men",
    subcategory: "outerwear",
    price: 89.99,
    originalPrice: 119.99,
    description: "Insulated puffer vest for layering in cold weather.",
    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&q=80&fit=crop",
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?w=500&q=80&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Navy", "Olive", "Red"],
    inStock: true,
    featured: false,
    rating: 4.6,
    reviews: 103
  },
  {
    id: 28,
    name: "Bodycon Mini Dress",
    category: "women",
    subcategory: "dresses",
    price: 49.99,
    description: "Stylish bodycon mini dress for night out.",
    images: [
      "https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?w=500&q=80&fit=crop",
      "https://images.unsplash.com/photo-1572804013427-4d7ca7268217?w=500&q=80&fit=crop"
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: ["Black", "Red", "White", "Emerald"],
    inStock: true,
    featured: true,
    rating: 4.7,
    reviews: 167
  },
  {
    id: 29,
    name: "Flannel Shirt",
    category: "men",
    subcategory: "tops",
    price: 59.99,
    description: "Classic flannel shirt with button-down collar.",
    images: [
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&q=80&fit=crop",
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&q=80&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Red/Black", "Blue/Black", "Green/Black", "Gray"],
    inStock: true,
    featured: false,
    rating: 4.5,
    reviews: 124
  },
  {
    id: 30,
    name: "Pleated Midi Skirt",
    category: "women",
    subcategory: "bottoms",
    price: 74.99,
    originalPrice: 99.99,
    description: "Elegant pleated midi skirt with elastic waistband.",
    images: [
      "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=500&q=80&fit=crop",
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=500&q=80&fit=crop"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Navy", "Blush", "Silver"],
    inStock: true,
    featured: true,
    rating: 4.8,
    reviews: 198
  },
  {
    id: 31,
    name: "Wool Peacoat",
    category: "men",
    subcategory: "outerwear",
    price: 189.99,
    originalPrice: 249.99,
    description: "Classic double-breasted wool peacoat for winter elegance.",
    images: [
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=500&q=80&fit=crop",
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?w=500&q=80&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Charcoal", "Navy", "Black", "Camel"],
    inStock: true,
    featured: true,
    rating: 4.9,
    reviews: 267
  },
  {
    id: 32,
    name: "Ribbed Tank Top",
    category: "women",
    subcategory: "tops",
    price: 24.99,
    description: "Essential ribbed tank top in soft cotton blend.",
    images: [
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=500&q=80&fit=crop",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&q=80&fit=crop"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["White", "Black", "Beige", "Gray", "Olive"],
    inStock: true,
    featured: false,
    rating: 4.4,
    reviews: 345
  },
  {
    id: 33,
    name: "Chino Pants",
    category: "men",
    subcategory: "bottoms",
    price: 64.99,
    description: "Classic chino pants with modern slim fit.",
    images: [
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500&q=80&fit=crop",
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500&q=80&fit=crop"
    ],
    sizes: ["28", "30", "32", "34", "36", "38"],
    colors: ["Khaki", "Navy", "Black", "Olive", "Stone"],
    inStock: true,
    featured: false,
    rating: 4.6,
    reviews: 189
  },
  {
    id: 34,
    name: "Maxi Dress",
    category: "women",
    subcategory: "dresses",
    price: 89.99,
    originalPrice: 119.99,
    description: "Flowing maxi dress perfect for summer occasions.",
    images: [
      "https://images.unsplash.com/photo-1572804013427-4d7ca7268217?w=500&q=80&fit=crop",
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&q=80&fit=crop"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Floral Print", "Navy", "Emerald", "Burgundy"],
    inStock: true,
    featured: true,
    rating: 4.7,
    reviews: 234
  },
  {
    id: 35,
    name: "V-Neck T-Shirt Pack",
    category: "men",
    subcategory: "tops",
    price: 34.99,
    description: "3-pack essential v-neck t-shirts in premium cotton.",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80&fit=crop",
      "https://images.unsplash.com/photo-1602810319428-019690571b5b?w=500&q=80&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White/Gray/Black", "Navy/Gray/White"],
    inStock: true,
    featured: false,
    rating: 4.5,
    reviews: 412
  },
  {
    id: 36,
    name: "Blazer Jacket",
    category: "women",
    subcategory: "outerwear",
    price: 119.99,
    originalPrice: 159.99,
    description: "Tailored blazer jacket for professional look.",
    images: [
      "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=500&q=80&fit=crop",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&q=80&fit=crop"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Navy", "Gray", "Beige"],
    inStock: true,
    featured: true,
    rating: 4.8,
    reviews: 178
  },
  {
    id: 37,
    name: "Graphic Sweatshirt",
    category: "men",
    subcategory: "tops",
    price: 49.99,
    description: "Trendy graphic sweatshirt with vintage print.",
    images: [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&q=80&fit=crop",
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=500&q=80&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Gray", "Black", "White", "Navy"],
    inStock: true,
    featured: false,
    rating: 4.3,
    reviews: 156
  },
  {
    id: 38,
    name: "Wide Leg Trousers",
    category: "women",
    subcategory: "bottoms",
    price: 79.99,
    description: "Elegant wide leg trousers with high waist.",
    images: [
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&q=80&fit=crop",
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=500&q=80&fit=crop"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Navy", "Cream", "Camel"],
    inStock: true,
    featured: false,
    rating: 4.6,
    reviews: 143
  },
  {
    id: 39,
    name: "Rain Jacket",
    category: "men",
    subcategory: "outerwear",
    price: 94.99,
    description: "Waterproof rain jacket with adjustable hood.",
    images: [
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=500&q=80&fit=crop",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&q=80&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Navy", "Olive", "Yellow"],
    inStock: true,
    featured: false,
    rating: 4.5,
    reviews: 198
  },
  {
    id: 40,
    name: "Slip Dress",
    category: "women",
    subcategory: "dresses",
    price: 69.99,
    originalPrice: 89.99,
    description: "Silky slip dress with adjustable straps.",
    images: [
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=500&q=80&fit=crop",
      "https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?w=500&q=80&fit=crop"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Champagne", "Emerald", "Burgundy"],
    inStock: true,
    featured: true,
    rating: 4.7,
    reviews: 221
  },
  {
    id: 41,
    name: "Linen Shorts",
    category: "men",
    subcategory: "bottoms",
    price: 39.99,
    description: "Comfortable linen shorts for summer relaxation.",
    images: [
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=500&q=80&fit=crop",
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500&q=80&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Beige", "White", "Navy", "Olive"],
    inStock: true,
    featured: false,
    rating: 4.4,
    reviews: 167
  },
  {
    id: 42,
    name: "Cropped Cardigan",
    category: "women",
    subcategory: "tops",
    price: 54.99,
    description: "Trendy cropped cardigan with button front.",
    images: [
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&q=80&fit=crop",
      "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=500&q=80&fit=crop"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Cream", "Pink", "Lavender"],
    inStock: true,
    featured: false,
    rating: 4.5,
    reviews: 189
  },
  {
    id: 43,
    name: "Quilted Jacket",
    category: "men",
    subcategory: "outerwear",
    price: 139.99,
    originalPrice: 179.99,
    description: "Insulated quilted jacket with zip pockets.",
    images: [
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?w=500&q=80&fit=crop",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&q=80&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Navy", "Olive", "Gray"],
    inStock: true,
    featured: true,
    rating: 4.8,
    reviews: 245
  },
  {
    id: 44,
    name: "Jumpsuit",
    category: "women",
    subcategory: "dresses",
    price: 99.99,
    description: "Stylish jumpsuit with wide leg and belt detail.",
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&q=80&fit=crop",
      "https://images.unsplash.com/photo-1572804013427-4d7ca7268217?w=500&q=80&fit=crop"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Navy", "Terracotta", "Forest Green"],
    inStock: true,
    featured: true,
    rating: 4.7,
    reviews: 203
  },
  {
    id: 45,
    name: "Sweatpants",
    category: "men",
    subcategory: "bottoms",
    price: 44.99,
    description: "Comfortable sweatpants with elastic waistband.",
    images: [
      "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=500&q=80&fit=crop",
      "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=500&q=80&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Gray", "Black", "Navy", "Charcoal"],
    inStock: true,
    featured: false,
    rating: 4.6,
    reviews: 312
  },
  {
    id: 46,
    name: "Peplum Top",
    category: "women",
    subcategory: "tops",
    price: 59.99,
    originalPrice: 79.99,
    description: "Feminine peplum top with flared hem.",
    images: [
      "https://images.unsplash.com/photo-1564859228273-274232fdb516?w=500&q=80&fit=crop",
      "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=500&q=80&fit=crop"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["White", "Black", "Red", "Navy"],
    inStock: true,
    featured: false,
    rating: 4.4,
    reviews: 134
  },
  {
    id: 47,
    name: "Utility Jacket",
    category: "men",
    subcategory: "outerwear",
    price: 109.99,
    description: "Multi-pocket utility jacket for outdoor adventures.",
    images: [
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=500&q=80&fit=crop",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&q=80&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Olive", "Black", "Khaki", "Navy"],
    inStock: true,
    featured: false,
    rating: 4.7,
    reviews: 176
  },
  {
    id: 48,
    name: "Halter Dress",
    category: "women",
    subcategory: "dresses",
    price: 84.99,
    description: "Elegant halter neck dress for evening wear.",
    images: [
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=500&q=80&fit=crop",
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&q=80&fit=crop"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Red", "Navy", "Emerald"],
    inStock: true,
    featured: false,
    rating: 4.6,
    reviews: 167
  },
  {
    id: 49,
    name: "Corduroy Pants",
    category: "men",
    subcategory: "bottoms",
    price: 69.99,
    originalPrice: 89.99,
    description: "Retro corduroy pants with straight leg fit.",
    images: [
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500&q=80&fit=crop",
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500&q=80&fit=crop"
    ],
    sizes: ["28", "30", "32", "34", "36", "38"],
    colors: ["Tan", "Navy", "Brown", "Olive"],
    inStock: true,
    featured: false,
    rating: 4.5,
    reviews: 145
  },
  {
    id: 50,
    name: "Off-Shoulder Top",
    category: "women",
    subcategory: "tops",
    price: 44.99,
    description: "Romantic off-shoulder top with elastic neckline.",
    images: [
      "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=500&q=80&fit=crop",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500&q=80&fit=crop"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["White", "Black", "Blush", "Navy"],
    inStock: true,
    featured: true,
    rating: 4.6,
    reviews: 198
  },
  {
    id: 51,
    name: "Windbreaker",
    category: "men",
    subcategory: "outerwear",
    price: 79.99,
    description: "Lightweight windbreaker with packable design.",
    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&q=80&fit=crop",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&q=80&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Navy", "Red", "Teal"],
    inStock: true,
    featured: false,
    rating: 4.4,
    reviews: 187
  },
  {
    id: 52,
    name: "Tunic Dress",
    category: "women",
    subcategory: "dresses",
    price: 64.99,
    description: "Relaxed tunic dress with three-quarter sleeves.",
    images: [
      "https://images.unsplash.com/photo-1572804013427-4d7ca7268217?w=500&q=80&fit=crop",
      "https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?w=500&q=80&fit=crop"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Navy", "Black", "Burgundy", "Forest Green"],
    inStock: true,
    featured: false,
    rating: 4.5,
    reviews: 156
  },
  {
    id: 53,
    name: "Mesh Tank Top",
    category: "men",
    subcategory: "tops",
    price: 29.99,
    description: "Breathable mesh tank top for athletic wear.",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80&fit=crop",
      "https://images.unsplash.com/photo-1602810319428-019690571b5b?w=500&q=80&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "White", "Gray", "Navy"],
    inStock: true,
    featured: false,
    rating: 4.3,
    reviews: 234
  },
  {
    id: 54,
    name: "Leather Skirt",
    category: "women",
    subcategory: "bottoms",
    price: 129.99,
    originalPrice: 169.99,
    description: "Faux leather mini skirt with zipper detail.",
    images: [
      "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=500&q=80&fit=crop",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&q=80&fit=crop"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Brown", "Burgundy"],
    inStock: true,
    featured: true,
    rating: 4.8,
    reviews: 289
  },
  {
    id: 55,
    name: "Track Jacket",
    category: "men",
    subcategory: "outerwear",
    price: 64.99,
    description: "Athletic track jacket with stripe detail.",
    images: [
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&q=80&fit=crop",
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?w=500&q=80&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black/White", "Navy/White", "Green/White"],
    inStock: true,
    featured: false,
    rating: 4.5,
    reviews: 178
  },
  {
    id: 56,
    name: "Shirt Dress",
    category: "women",
    subcategory: "dresses",
    price: 74.99,
    description: "Classic shirt dress with belt and pockets.",
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&q=80&fit=crop",
      "https://images.unsplash.com/photo-1572804013427-4d7ca7268217?w=500&q=80&fit=crop"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["White", "Chambray", "Black", "Khaki"],
    inStock: true,
    featured: false,
    rating: 4.6,
    reviews: 201
  },
  {
    id: 57,
    name: "Basketball Shorts",
    category: "men",
    subcategory: "bottoms",
    price: 34.99,
    description: "Lightweight basketball shorts with mesh lining.",
    images: [
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=500&q=80&fit=crop",
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500&q=80&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Navy", "Red", "Gray"],
    inStock: true,
    featured: false,
    rating: 4.4,
    reviews: 267
  },
  {
    id: 58,
    name: "Cowl Neck Sweater",
    category: "women",
    subcategory: "tops",
    price: 69.99,
    originalPrice: 89.99,
    description: "Cozy cowl neck sweater in soft knit fabric.",
    images: [
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&q=80&fit=crop",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&q=80&fit=crop"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Cream", "Gray", "Navy", "Burgundy"],
    inStock: true,
    featured: false,
    rating: 4.7,
    reviews: 223
  },
  {
    id: 59,
    name: "Parka Jacket",
    category: "men",
    subcategory: "outerwear",
    price: 169.99,
    originalPrice: 219.99,
    description: "Heavy-duty parka with fur-lined hood.",
    images: [
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=500&q=80&fit=crop",
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?w=500&q=80&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Olive", "Navy", "Charcoal"],
    inStock: true,
    featured: true,
    rating: 4.9,
    reviews: 312
  },
  {
    id: 60,
    name: "Sequin Dress",
    category: "women",
    subcategory: "dresses",
    price: 159.99,
    description: "Glamorous sequin dress for special occasions.",
    images: [
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=500&q=80&fit=crop",
      "https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?w=500&q=80&fit=crop"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Gold", "Silver", "Black", "Rose Gold"],
    inStock: true,
    featured: true,
    rating: 4.8,
    reviews: 278
  },
  {
    id: 61,
    name: "Cargo Vest",
    category: "men",
    subcategory: "outerwear",
    price: 59.99,
    description: "Tactical cargo vest with multiple utility pockets.",
    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&q=80&fit=crop",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&q=80&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Olive", "Tan", "Navy"],
    inStock: true,
    featured: false,
    rating: 4.4,
    reviews: 145
  },
  {
    id: 62,
    name: "Palazzo Pants",
    category: "women",
    subcategory: "bottoms",
    price: 64.99,
    description: "Flowy palazzo pants with elastic waistband.",
    images: [
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&q=80&fit=crop",
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=500&q=80&fit=crop"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Navy", "Burgundy", "Print"],
    inStock: true,
    featured: false,
    rating: 4.5,
    reviews: 189
  },
  {
    id: 63,
    name: "Muscle Fit Shirt",
    category: "men",
    subcategory: "tops",
    price: 49.99,
    description: "Fitted muscle shirt for athletic build.",
    images: [
      "https://images.unsplash.com/photo-1602810319428-019690571b5b?w=500&q=80&fit=crop",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White", "Black", "Navy", "Gray"],
    inStock: true,
    featured: false,
    rating: 4.3,
    reviews: 167
  },
  {
    id: 64,
    name: "Kimono Cardigan",
    category: "women",
    subcategory: "tops",
    price: 79.99,
    originalPrice: 99.99,
    description: "Flowing kimono cardigan with fringe detail.",
    images: [
      "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=500&q=80&fit=crop",
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&q=80&fit=crop"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Navy", "Print", "Burgundy"],
    inStock: true,
    featured: true,
    rating: 4.7,
    reviews: 234
  },
  {
    id: 65,
    name: "Denim Jacket",
    category: "men",
    subcategory: "outerwear",
    price: 89.99,
    description: "Classic denim jacket with distressed finish.",
    images: [
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=500&q=80&fit=crop",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&q=80&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Light Blue", "Dark Blue", "Black"],
    inStock: true,
    featured: false,
    rating: 4.6,
    reviews: 298
  },
  {
    id: 66,
    name: "Sweater Dress",
    category: "women",
    subcategory: "dresses",
    price: 79.99,
    description: "Comfortable sweater dress for casual elegance.",
    images: [
      "https://images.unsplash.com/photo-1572804013427-4d7ca7268217?w=500&q=80&fit=crop",
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&q=80&fit=crop"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Gray", "Black", "Camel", "Burgundy"],
    inStock: true,
    featured: false,
    rating: 4.6,
    reviews: 201
  },
  {
    id: 67,
    name: "Running Shorts",
    category: "men",
    subcategory: "bottoms",
    price: 29.99,
    description: "Lightweight running shorts with built-in liner.",
    images: [
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=500&q=80&fit=crop",
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500&q=80&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Navy", "Red", "Teal"],
    inStock: true,
    featured: false,
    rating: 4.5,
    reviews: 312
  },
  {
    id: 68,
    name: "Crop Hoodie",
    category: "women",
    subcategory: "tops",
    price: 49.99,
    description: "Trendy cropped hoodie with drawstring hood.",
    images: [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&q=80&fit=crop",
      "https://images.unsplash.com/photo-1578768079052-aa76e52ff62e?w=500&q=80&fit=crop"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Gray", "Pink", "White"],
    inStock: true,
    featured: true,
    rating: 4.6,
    reviews: 267
  },
  {
    id: 69,
    name: "Sherpa Jacket",
    category: "men",
    subcategory: "outerwear",
    price: 119.99,
    originalPrice: 149.99,
    description: "Cozy sherpa jacket for cold weather comfort.",
    images: [
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?w=500&q=80&fit=crop",
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=500&q=80&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Cream", "Brown", "Navy", "Gray"],
    inStock: true,
    featured: true,
    rating: 4.8,
    reviews: 289
  },
  {
    id: 70,
    name: "A-Line Skirt",
    category: "women",
    subcategory: "bottoms",
    price: 54.99,
    description: "Classic a-line skirt with hidden zip closure.",
    images: [
      "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=500&q=80&fit=crop",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&q=80&fit=crop"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Navy", "Burgundy", "Gray"],
    inStock: true,
    featured: false,
    rating: 4.5,
    reviews: 178
  },
  {
    id: 71,
    name: "Longline T-Shirt",
    category: "men",
    subcategory: "tops",
    price: 34.99,
    description: "Modern longline t-shirt with curved hem.",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80&fit=crop",
      "https://images.unsplash.com/photo-1602810319428-019690571b5b?w=500&q=80&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White", "Black", "Gray", "Olive"],
    inStock: true,
    featured: false,
    rating: 4.4,
    reviews: 156
  },
  {
    id: 72,
    name: "Bell Sleeve Top",
    category: "women",
    subcategory: "tops",
    price: 59.99,
    description: "Romantic bell sleeve top with flowy silhouette.",
    images: [
      "https://images.unsplash.com/photo-1564859228273-274232fdb516?w=500&q=80&fit=crop",
      "https://images.unsplash.com/photo-1542838686-e3d6b8d8e462?w=500&q=80&fit=crop"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["White", "Black", "Navy", "Blush"],
    inStock: true,
    featured: false,
    rating: 4.5,
    reviews: 189
  },
  {
    id: 73,
    name: "Softshell Jacket",
    category: "men",
    subcategory: "outerwear",
    price: 104.99,
    description: "Technical softshell jacket with water resistance.",
    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&q=80&fit=crop",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&q=80&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Navy", "Gray", "Red"],
    inStock: true,
    featured: false,
    rating: 4.6,
    reviews: 223
  },
  {
    id: 74,
    name: "T-Shirt Dress",
    category: "women",
    subcategory: "dresses",
    price: 39.99,
    description: "Casual t-shirt dress with relaxed fit.",
    images: [
      "https://images.unsplash.com/photo-1572804013427-4d7ca7268217?w=500&q=80&fit=crop",
      "https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?w=500&q=80&fit=crop"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "White", "Gray", "Navy"],
    inStock: true,
    featured: false,
    rating: 4.4,
    reviews: 267
  },
  {
    id: 75,
    name: "Chino Shorts",
    category: "men",
    subcategory: "bottoms",
    price: 44.99,
    description: "Classic chino shorts with slim fit.",
    images: [
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=500&q=80&fit=crop",
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500&q=80&fit=crop"
    ],
    sizes: ["28", "30", "32", "34", "36", "38"],
    colors: ["Khaki", "Navy", "Olive", "Stone"],
    inStock: true,
    featured: false,
    rating: 4.5,
    reviews: 234
  },
  {
    id: 76,
    name: "Mesh Bodysuit",
    category: "women",
    subcategory: "tops",
    price: 44.99,
    originalPrice: 59.99,
    description: "Sheer mesh bodysuit with snap closure.",
    images: [
      "https://images.unsplash.com/photo-1583846783214-7229a91b20ed?w=500&q=80&fit=crop",
      "https://images.unsplash.com/photo-1551854838-212c50b4c184?w=500&q=80&fit=crop"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "White", "Nude"],
    inStock: true,
    featured: true,
    rating: 4.6,
    reviews: 198
  },
  {
    id: 77,
    name: "Field Jacket",
    category: "men",
    subcategory: "outerwear",
    price: 134.99,
    description: "Military-inspired field jacket with button pockets.",
    images: [
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=500&q=80&fit=crop",
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?w=500&q=80&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Olive", "Khaki", "Black", "Navy"],
    inStock: true,
    featured: false,
    rating: 4.7,
    reviews: 201
  },
  {
    id: 78,
    name: "Denim Skirt",
    category: "women",
    subcategory: "bottoms",
    price: 54.99,
    description: "Classic denim mini skirt with front buttons.",
    images: [
      "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=500&q=80&fit=crop",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&q=80&fit=crop"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Light Wash", "Dark Wash", "Black"],
    inStock: true,
    featured: false,
    rating: 4.5,
    reviews: 312
  },
  {
    id: 79,
    name: "Compression Shirt",
    category: "men",
    subcategory: "tops",
    price: 39.99,
    description: "Performance compression shirt for athletic training.",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80&fit=crop",
      "https://images.unsplash.com/photo-1602810319428-019690571b5b?w=500&q=80&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "White", "Navy", "Red"],
    inStock: true,
    featured: false,
    rating: 4.6,
    reviews: 278
  },
  {
    id: 80,
    name: "Satin Camisole",
    category: "women",
    subcategory: "tops",
    price: 39.99,
    description: "Luxe satin camisole with adjustable straps.",
    images: [
      "https://images.unsplash.com/photo-1518622358385-8ea7d0794bf6?w=500&q=80&fit=crop",
      "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=500&q=80&fit=crop"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "White", "Champagne", "Blush"],
    inStock: true,
    featured: false,
    rating: 4.5,
    reviews: 256
  },
  {
    id: 81,
    name: "Varsity Jacket",
    category: "men",
    subcategory: "outerwear",
    price: 99.99,
    originalPrice: 129.99,
    description: "Classic varsity jacket with contrast sleeves.",
    images: [
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&q=80&fit=crop",
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?w=500&q=80&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black/White", "Navy/White", "Burgundy/White"],
    inStock: true,
    featured: true,
    rating: 4.7,
    reviews: 289
  },
  {
    id: 82,
    name: "Smock Dress",
    category: "women",
    subcategory: "dresses",
    price: 69.99,
    description: "Relaxed smock dress with tiered design.",
    images: [
      "https://images.unsplash.com/photo-1572804013427-4d7ca7268217?w=500&q=80&fit=crop",
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&q=80&fit=crop"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["White", "Black", "Print", "Navy"],
    inStock: true,
    featured: false,
    rating: 4.5,
    reviews: 178
  },
  {
    id: 83,
    name: "Tech Joggers",
    category: "men",
    subcategory: "bottoms",
    price: 64.99,
    description: "Modern tech joggers with zip pockets.",
    images: [
      "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=500&q=80&fit=crop",
      "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=500&q=80&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Navy", "Gray", "Olive"],
    inStock: true,
    featured: true,
    rating: 4.8,
    reviews: 345
  },
  {
    id: 84,
    name: "Wrap Blouse",
    category: "women",
    subcategory: "tops",
    price: 64.99,
    originalPrice: 84.99,
    description: "Elegant wrap blouse with tie waist.",
    images: [
      "https://images.unsplash.com/photo-1564859228273-274232fdb516?w=500&q=80&fit=crop",
      "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=500&q=80&fit=crop"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "White", "Navy", "Burgundy"],
    inStock: true,
    featured: false,
    rating: 4.6,
    reviews: 212
  },
  {
    id: 85,
    name: "Down Vest",
    category: "men",
    subcategory: "outerwear",
    price: 94.99,
    description: "Insulated down vest for layering.",
    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&q=80&fit=crop",
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?w=500&q=80&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Navy", "Olive", "Burgundy"],
    inStock: true,
    featured: false,
    rating: 4.7,
    reviews: 234
  },
  {
    id: 86,
    name: "Skater Skirt",
    category: "women",
    subcategory: "bottoms",
    price: 39.99,
    description: "Flirty skater skirt with flared hem.",
    images: [
      "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=500&q=80&fit=crop",
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=500&q=80&fit=crop"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Navy", "Burgundy", "Print"],
    inStock: true,
    featured: false,
    rating: 4.4,
    reviews: 298
  },
  {
    id: 87,
    name: "Striped T-Shirt",
    category: "men",
    subcategory: "tops",
    price: 29.99,
    description: "Classic striped t-shirt with crew neck.",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80&fit=crop",
      "https://images.unsplash.com/photo-1602810319428-019690571b5b?w=500&q=80&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Navy/White", "Black/White", "Red/White"],
    inStock: true,
    featured: false,
    rating: 4.5,
    reviews: 412
  },
  {
    id: 88,
    name: "Sequin Top",
    category: "women",
    subcategory: "tops",
    price: 79.99,
    originalPrice: 99.99,
    description: "Sparkly sequin top for evening glamour.",
    images: [
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&q=80&fit=crop",
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=500&q=80&fit=crop"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Gold", "Silver", "Black", "Rose Gold"],
    inStock: true,
    featured: true,
    rating: 4.7,
    reviews: 256
  },
  {
    id: 89,
    name: "Hooded Parka",
    category: "men",
    subcategory: "outerwear",
    price: 179.99,
    description: "Heavy-duty hooded parka for extreme cold.",
    images: [
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=500&q=80&fit=crop",
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?w=500&q=80&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Navy", "Olive", "Charcoal"],
    inStock: true,
    featured: true,
    rating: 4.9,
    reviews: 387
  },
  {
    id: 90,
    name: "Tiered Maxi Dress",
    category: "women",
    subcategory: "dresses",
    price: 94.99,
    description: "Romantic tiered maxi dress with ruffled layers.",
    images: [
      "https://images.unsplash.com/photo-1572804013427-4d7ca7268217?w=500&q=80&fit=crop",
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&q=80&fit=crop"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["White", "Black", "Floral", "Navy"],
    inStock: true,
    featured: true,
    rating: 4.8,
    reviews: 312
  },
  {
    id: 91,
    name: "Swim Trunks",
    category: "men",
    subcategory: "bottoms",
    price: 39.99,
    description: "Quick-dry swim trunks with mesh lining.",
    images: [
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=500&q=80&fit=crop",
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500&q=80&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Navy", "Black", "Teal", "Red"],
    inStock: true,
    featured: false,
    rating: 4.5,
    reviews: 267
  },
  {
    id: 92,
    name: "Bodycon Skirt",
    category: "women",
    subcategory: "bottoms",
    price: 34.99,
    description: "Stretchy bodycon skirt with elastic waist.",
    images: [
      "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=500&q=80&fit=crop",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&q=80&fit=crop"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Navy", "Red", "Gray"],
    inStock: true,
    featured: false,
    rating: 4.4,
    reviews: 234
  },
  {
    id: 93,
    name: "Athletic Tank",
    category: "men",
    subcategory: "tops",
    price: 24.99,
    description: "Moisture-wicking athletic tank for workouts.",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80&fit=crop",
      "https://images.unsplash.com/photo-1602810319428-019690571b5b?w=500&q=80&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "White", "Gray", "Navy"],
    inStock: true,
    featured: false,
    rating: 4.5,
    reviews: 389
  },
  {
    id: 94,
    name: "Velvet Blazer",
    category: "women",
    subcategory: "outerwear",
    price: 139.99,
    originalPrice: 179.99,
    description: "Luxe velvet blazer for elegant occasions.",
    images: [
      "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=500&q=80&fit=crop",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&q=80&fit=crop"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Burgundy", "Navy", "Emerald"],
    inStock: true,
    featured: true,
    rating: 4.8,
    reviews: 278
  },
  {
    id: 95,
    name: "Distressed Jeans",
    category: "men",
    subcategory: "bottoms",
    price: 79.99,
    description: "Trendy distressed jeans with ripped details.",
    images: [
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500&q=80&fit=crop",
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&q=80&fit=crop"
    ],
    sizes: ["28", "30", "32", "34", "36", "38"],
    colors: ["Light Wash", "Medium Wash", "Dark Wash"],
    inStock: true,
    featured: false,
    rating: 4.4,
    reviews: 298
  },
  {
    id: 96,
    name: "Backless Top",
    category: "women",
    subcategory: "tops",
    price: 49.99,
    description: "Sexy backless top with tie detail.",
    images: [
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=500&q=80&fit=crop",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=500&q=80&fit=crop"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "White", "Red", "Navy"],
    inStock: true,
    featured: true,
    rating: 4.6,
    reviews: 223
  },
  {
    id: 97,
    name: "Suede Jacket",
    category: "men",
    subcategory: "outerwear",
    price: 159.99,
    originalPrice: 199.99,
    description: "Premium suede jacket with zip closure.",
    images: [
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=500&q=80&fit=crop",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&q=80&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Tan", "Black", "Brown", "Navy"],
    inStock: true,
    featured: true,
    rating: 4.9,
    reviews: 312
  },
  {
    id: 98,
    name: "Tube Top",
    category: "women",
    subcategory: "tops",
    price: 29.99,
    description: "Classic tube top with elastic band.",
    images: [
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&q=80&fit=crop",
      "https://images.unsplash.com/photo-1475180429745-84390107ef5f?w=500&q=80&fit=crop"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "White", "Red", "Navy"],
    inStock: true,
    featured: false,
    rating: 4.3,
    reviews: 345
  },
  {
    id: 99,
    name: "Thermal Henley",
    category: "men",
    subcategory: "tops",
    price: 44.99,
    description: "Warm thermal henley for cold weather layering.",
    images: [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&q=80&fit=crop",
      "https://images.unsplash.com/photo-1602810319428-019690571b5b?w=500&q=80&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Gray", "Black", "Navy", "Burgundy"],
    inStock: true,
    featured: false,
    rating: 4.6,
    reviews: 267
  },
  {
    id: 100,
    name: "Evening Gown",
    category: "women",
    subcategory: "dresses",
    price: 199.99,
    originalPrice: 299.99,
    description: "Stunning floor-length evening gown for formal events.",
    images: [
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=500&q=80&fit=crop",
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&q=80&fit=crop"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Red", "Navy", "Emerald", "Gold"],
    inStock: true,
    featured: true,
    rating: 4.9,
    reviews: 456
  }
];

export const categories = [
  { id: "men", name: "Men", subcategories: ["tops", "bottoms", "outerwear"] },
  { id: "women", name: "Women", subcategories: ["tops", "bottoms", "dresses", "outerwear"] }
];
