'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';

export default function Menu() {
    const { t } = useLanguage();

    const productImages = [
        "/images/honey.jpg", // Honey & Granola
        "/images/img1.jpg",  // Berry
        "/images/img2.jpg"   // Banana/Fruit
    ];

    const prices = ["30 THB", "235 THB", "95 THB"];

    return (
        <section id="menu" className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-rose-900 mb-4">{t.menu.title}</h2>
                    <p className="text-gray-600 text-lg">{t.menu.popular}</p>
                </div>

                <div className="grid md:grid-cols-3 gap-10">
                    {t.menu.items.map((product, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 group"
                        >
                            <div className="h-64 overflow-hidden relative">
                                <img
                                    src={productImages[index]}
                                    alt={product.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-rose-900 font-bold shadow-sm">
                                    {prices[index]}
                                </div>
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">{product.name}</h3>
                                <p className="text-gray-500 mb-8 min-h-[3rem]">{product.description}</p>
                                <button className="w-full py-4 border-2 border-rose-100 text-rose-500 rounded-xl hover:bg-rose-500 hover:border-rose-500 hover:text-white transition-all font-bold tracking-wide">
                                    {t.hero.cta}
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
