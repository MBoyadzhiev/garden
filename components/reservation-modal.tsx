"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  IconX,
  IconCalendar,
  IconClock,
  IconUser,
  IconPhone,
} from "@tabler/icons-react";

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal = ({
  isOpen,
  onClose,
}: ReservationModalProps) => {
  console.log("ReservationModal rendered, isOpen:", isOpen);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the reservation data to your backend
    console.log("Reservation data:", formData);
    alert("Резервацията е изпратена успешно! Ще се свържем с вас скоро.");
    onClose();
    // Reset form
    setFormData({ name: "", phone: "", date: "", time: "", guests: "2" });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 backdrop-blur-md bg-black/50 p-2 sm:p-4 overflow-y-auto"
          style={{ zIndex: 9999 }}
          onClick={onClose}
        >
          <div className="min-h-full flex items-center justify-center py-4 sm:py-8">
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative bg-white rounded-xl sm:rounded-2xl shadow-2xl w-full max-w-md overflow-hidden my-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-gray-700 to-stone-700 px-4 sm:px-6 py-3 sm:py-4 text-white">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg sm:text-xl font-semibold">
                    Направи резервация
                  </h3>
                  <button
                    onClick={onClose}
                    className="text-white/80 hover:text-white transition-colors p-1"
                  >
                    <IconX className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                </div>
              </div>

              {/* Form */}
              <form
                onSubmit={handleSubmit}
                className="p-4 sm:p-6 space-y-4 sm:space-y-6"
              >
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2"
                  >
                    Име *
                  </label>
                  <div className="relative">
                    <IconUser className="absolute left-2.5 sm:left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full pl-8 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-colors"
                      placeholder="Вашето име"
                    />
                  </div>
                </div>

                {/* Phone Field */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2"
                  >
                    Телефон *
                  </label>
                  <div className="relative">
                    <IconPhone className="absolute left-2.5 sm:left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full pl-8 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-colors"
                      placeholder="+359 87 123 4567"
                    />
                  </div>
                </div>

                {/* Date and Time Row */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {/* Date Field */}
                  <div>
                    <label
                      htmlFor="date"
                      className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2"
                    >
                      Дата *
                    </label>
                    <div className="relative">
                      <IconCalendar className="absolute left-2.5 sm:left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                      <input
                        type="date"
                        id="date"
                        name="date"
                        required
                        value={formData.date}
                        onChange={handleInputChange}
                        min={new Date().toISOString().split("T")[0]}
                        className="w-full pl-8 sm:pl-10 pr-2 sm:pr-4 py-2.5 sm:py-3 text-xs sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-colors"
                      />
                    </div>
                  </div>

                  {/* Time Field */}
                  <div>
                    <label
                      htmlFor="time"
                      className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2"
                    >
                      Час *
                    </label>
                    <div className="relative">
                      <IconClock className="absolute left-2.5 sm:left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                      <input
                        type="time"
                        id="time"
                        name="time"
                        required
                        value={formData.time}
                        onChange={handleInputChange}
                        className="w-full pl-8 sm:pl-10 pr-2 sm:pr-4 py-2.5 sm:py-3 text-xs sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* Guests Field */}
                <div>
                  <label
                    htmlFor="guests"
                    className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2"
                  >
                    Брой гости *
                  </label>
                  <select
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-colors"
                  >
                    <option value="1">1 човек</option>
                    <option value="2">2 души</option>
                    <option value="3">3 души</option>
                    <option value="4">4 души</option>
                    <option value="5">5 души</option>
                    <option value="6">6 души</option>
                    <option value="7">7 души</option>
                    <option value="8">8+ души</option>
                  </select>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-gray-700 to-stone-700 text-white py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg text-sm sm:text-base font-semibold hover:from-gray-800 hover:to-stone-800 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Изпрати резервация
                </button>

                {/* Note */}
                <p className="text-xs sm:text-sm text-gray-600 text-center">
                  Ще се свържем с вас за потвърждение на резервацията
                </p>
              </form>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
