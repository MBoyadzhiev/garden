"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Plus, Minus, Trash2 } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { SecondaryHero } from "@/components/secondary-hero";
import { Footer } from "@/components/footer";

interface FoodItem {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description?: string;
}

interface CartItem extends FoodItem {
  quantity: number;
}

const categories = [
  { id: "salads", name: "Салати", icon: "🥗" },
  { id: "main", name: "Основни", icon: "🍽️" },
  { id: "pasta", name: "Паста", icon: "🍝" },
  { id: "desserts", name: "Десерти", icon: "🍰" },
  { id: "drinks", name: "Напитки", icon: "🥤" },
];

const foodItems: FoodItem[] = [
  {
    id: "1",
    name: "Зелена салата",
    category: "salads",
    price: 8.5,
    image: "/food/green-salad.jpg",
    description: "Свежа зелена салата с домати и краставици",
  },
  {
    id: "2",
    name: "Шопска салата",
    category: "salads",
    price: 9.5,
    image: "/food/mixed-salad.jpg",
    description: "Традиционна шопска салата със сирене",
  },
  {
    id: "3",
    name: "Домашна салата",
    category: "salads",
    price: 7.5,
    image: "/food/tomato-salad.jpg",
    description: "Салата с домашни продукти",
  },
  {
    id: "4",
    name: "Пилешко филе",
    category: "main",
    price: 16.5,
    image: "/food/chicken.jpg",
    description: "Сочно пилешко филе с гарнитура",
  },
  {
    id: "5",
    name: "Пържола",
    category: "main",
    price: 22.0,
    image: "/food/steak.jpg",
    description: "Свинска пържола на скара",
  },
  {
    id: "6",
    name: "Пържола Премиум",
    category: "main",
    price: 28.0,
    image: "/food/steak2.jpg",
    description: "Говежда пържола с специален сос",
  },
  {
    id: "7",
    name: "Паста Карбонара",
    category: "pasta",
    price: 14.5,
    image: "/food/pasta.jpg",
    description: "Класическа паста с бекон и сметана",
  },
  {
    id: "8",
    name: "Паста с калмари",
    category: "pasta",
    price: 16.0,
    image: "/food/pasta-calamari.jpg",
    description: "Паста с пресни калмари и зеленчуци",
  },
  {
    id: "9",
    name: "Паста с миди",
    category: "pasta",
    price: 17.5,
    image: "/food/pasta-muscles.jpg",
    description: "Паста с морски миди в бял сос",
  },
  {
    id: "10",
    name: "Фалафел",
    category: "main",
    price: 12.0,
    image: "/food/falafel.jpg",
    description: "Веган фалафел с хумус",
  },
  {
    id: "11",
    name: "Вегански пласт",
    category: "main",
    price: 13.5,
    image: "/food/vegan.jpg",
    description: "Вегански специалитет",
  },
  {
    id: "12",
    name: "Ризото",
    category: "main",
    price: 15.0,
    image: "/food/rizoto.jpg",
    description: "Кремообразно ризото с гъби",
  },
];

export default function OrdersPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("salads");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const filteredItems = foodItems.filter(
    (item) => item.category === selectedCategory
  );

  const addToCart = (item: FoodItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const updateQuantity = (id: string, change: number) => {
    setCart((prevCart) => {
      return prevCart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(0, item.quantity + change) }
            : item
        )
        .filter((item) => item.quantity > 0);
    });
  };

  const removeFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <SecondaryHero imageSrc="/food/plates.jpg" height="h-80" />

      <div className="bg-gradient-to-b from-gray-50 to-white pt-16 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-elegant text-gray-900 mb-6">
              Поръчай онлайн
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-elegant">
              Избери любимите си ястия и направи поръчка
            </p>
          </div>

          {/* Category Slider */}
          <div className="mb-12 relative">
            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex-shrink-0 snap-start px-6 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                    selectedCategory === category.id
                      ? "bg-black text-white shadow-lg"
                      : "bg-white text-gray-700 border-2 border-gray-200 hover:border-gray-400"
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                </motion.button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Food Items Grid */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {filteredItems.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {item.name}
                      </h3>
                      {item.description && (
                        <p className="text-sm text-gray-600 mb-4">
                          {item.description}
                        </p>
                      )}
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-gray-900">
                          {item.price.toFixed(2)} лв
                        </span>
                        <button
                          onClick={() => addToCart(item)}
                          className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 font-semibold"
                        >
                          Добави
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Cart Section */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                      <ShoppingCart className="w-6 h-6" />
                      Количка
                    </h2>
                    {totalItems > 0 && (
                      <span className="bg-black text-white px-3 py-1 rounded-full text-sm font-bold">
                        {totalItems}
                      </span>
                    )}
                  </div>

                  {cart.length === 0 ? (
                    <div className="text-center py-12">
                      <ShoppingCart className="w-16 h-16 mx-auto text-gray-300 mb-4" />
                      <p className="text-gray-500">Количката е празна</p>
                    </div>
                  ) : (
                    <>
                      <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
                        {cart.map((item) => (
                          <div
                            key={item.id}
                            className="flex gap-3 p-3 bg-gray-50 rounded-lg"
                          >
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-16 h-16 object-cover rounded-lg"
                            />
                            <div className="flex-1">
                              <h4 className="font-semibold text-gray-900 text-sm">
                                {item.name}
                              </h4>
                              <p className="text-sm text-gray-600">
                                {item.price.toFixed(2)} лв
                              </p>
                              <div className="flex items-center gap-2 mt-2">
                                <button
                                  onClick={() => updateQuantity(item.id, -1)}
                                  className="w-6 h-6 flex items-center justify-center bg-gray-200 rounded hover:bg-gray-300 transition-colors"
                                >
                                  <Minus className="w-3 h-3" />
                                </button>
                                <span className="font-semibold text-sm w-8 text-center">
                                  {item.quantity}
                                </span>
                                <button
                                  onClick={() => updateQuantity(item.id, 1)}
                                  className="w-6 h-6 flex items-center justify-center bg-gray-200 rounded hover:bg-gray-300 transition-colors"
                                >
                                  <Plus className="w-3 h-3" />
                                </button>
                                <button
                                  onClick={() => removeFromCart(item.id)}
                                  className="ml-auto text-red-500 hover:text-red-700 transition-colors"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="border-t pt-4 space-y-4">
                        <div className="flex justify-between items-center text-xl font-bold">
                          <span>Общо:</span>
                          <span>{totalPrice.toFixed(2)} лв</span>
                        </div>
                        <button className="w-full py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200">
                          Завърши поръчка
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Cart Button */}
          {cart.length > 0 && (
            <button
              onClick={() => setIsCartOpen(!isCartOpen)}
              className="lg:hidden fixed bottom-6 right-6 bg-black text-white p-4 rounded-full shadow-2xl z-50 flex items-center gap-2"
            >
              <ShoppingCart className="w-6 h-6" />
              <span className="bg-white text-black px-2 py-1 rounded-full text-sm font-bold">
                {totalItems}
              </span>
            </button>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
