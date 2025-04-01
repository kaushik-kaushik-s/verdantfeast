"use client";

import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const HomePage = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Parallax effect values
    const farmY = useTransform(scrollYProgress, [0, 0.3], [0, -50]);
    const kitchenY = useTransform(scrollYProgress, [0.3, 0.6], [50, -50]);
    const tableY = useTransform(scrollYProgress, [0.6, 1], [50, -50]);

    const sunRotate = useTransform(scrollYProgress, [0, 0.3], [0, 360]);
    const sunY = useTransform(scrollYProgress, [0, 0.3], [100, 20]);

    // Fade effects
    const farmOpacity = useTransform(scrollYProgress, [0, 0.2, 0.4], [1, 1, 0]);
    const kitchenOpacity = useTransform(scrollYProgress, [0.2, 0.4, 0.6, 0.8], [0, 1, 1, 0]);
    const tableOpacity = useTransform(scrollYProgress, [0.6, 0.8, 1], [0, 1, 1]);

    const titleOpacity = useTransform(scrollYProgress, [0, 0.1, 0.2], [0, 1, 1]);

    return (
        <div ref={containerRef} className="relative h-screen overflow-hidden bg-white">
            {/* Floating leaves animation */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[...Array(12)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, Math.random() * 200 + 100],
                            x: [0, Math.random() * 100 - 50],
                            rotate: [0, Math.random() * 360],
                            opacity: [0.7, 0]
                        }}
                        transition={{
                            duration: Math.random() * 10 + 15,
                            repeat: Infinity,
                            delay: Math.random() * 5
                        }}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 3C7.5 3 3 7.5 3 12C3 16.5 15 21 12 21C9 21 21 16.5 21 12C21 7.5 16.5 3 12 3Z" fill="#8BC34A" stroke="black" strokeWidth="1"/>
                        </svg>
                    </motion.div>
                ))}
            </div>

            {/* Section 1: Farm horizon */}
            <motion.div
                className="absolute inset-0 flex items-center justify-center"
                style={{
                    y: farmY,
                    opacity: farmOpacity
                }}
            >
                <div className="relative w-full h-full">
                    {/* Horizon line */}
                    <div className="absolute bottom-1/3 left-0 right-0 h-1 bg-green-900"></div>

                    {/* Sun */}
                    <motion.div
                        className="absolute left-1/2 transform -translate-x-1/2"
                        style={{
                            y: sunY,
                            rotate: sunRotate
                        }}
                    >
                        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="40" cy="40" r="36" fill="url(#sun-gradient)" stroke="black" strokeWidth="2"/>
                            <defs>
                                <radialGradient id="sun-gradient" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(40 40) rotate(90) scale(40)">
                                    <stop stopColor="#FFEB3B"/>
                                    <stop offset="1" stopColor="#FF9800"/>
                                </radialGradient>
                            </defs>
                        </svg>
                    </motion.div>

                    {/* Plants */}
                    {[...Array(8)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute bottom-1/3"
                            style={{ left: `${10 + i * 10}%` }}
                            initial={{ y: 50, opacity: 0 }}
                            animate={{
                                y: 0,
                                opacity: 1
                            }}
                            transition={{
                                duration: 1,
                                delay: 0.2 * i,
                                type: "spring",
                                stiffness: 100
                            }}
                        >
                            <svg width="40" height="100" viewBox="0 0 40 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 100V40" stroke="#5D4037" strokeWidth="4"/>
                                <path d="M20 40C20 40 5 20 10 10C15 0 20 5 20 5C20 5 25 0 30 10C35 20 20 40 20 40Z" fill="#8BC34A" stroke="black" strokeWidth="2"/>
                            </svg>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Section 2: Kitchen counter */}
            <motion.div
                className="absolute inset-0 flex items-center justify-center"
                style={{
                    y: kitchenY,
                    opacity: kitchenOpacity
                }}
            >
                <div className="relative w-full h-full">
                    {/* Counter */}
                    <div className="absolute bottom-1/4 left-0 right-0 h-16 bg-amber-100 border-t-2 border-amber-800"></div>

                    {/* Vegetables */}
                    <motion.div
                        className="absolute left-1/4 bottom-1/4"
                        initial={{ rotate: -20 }}
                        animate={{ rotate: [0, -20, 0] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                    >
                        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="10" y="60" width="80" height="10" fill="#A1887F" stroke="black" strokeWidth="2"/>
                            <rect x="20" y="10" width="10" height="50" fill="#A1887F" stroke="black" strokeWidth="2"/>
                        </svg>
                    </motion.div>

                    {/* Knife */}
                    <motion.div
                        className="absolute right-1/4 bottom-1/3"
                        animate={{
                            y: [0, -20, 0],
                            rotate: [0, 20, 0]
                        }}
                        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.5 }}
                    >
                        <svg width="120" height="30" viewBox="0 0 120 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 15L110 5L120 15L110 25L10 15Z" fill="#E0E0E0" stroke="black" strokeWidth="2"/>
                            <rect x="0" y="10" width="20" height="10" fill="#5D4037" stroke="black" strokeWidth="2"/>
                        </svg>
                    </motion.div>

                    {/* Steam */}
                    <div className="absolute left-1/2 bottom-1/3">
                        {[...Array(3)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute bottom-0"
                                style={{ left: `${i * 20}px` }}
                                animate={{
                                    y: [0, -50],
                                    opacity: [0, 1, 0]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    delay: i * 0.5
                                }}
                            >
                                <svg width="20" height="50" viewBox="0 0 20 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 0C10 0 0 10 0 20C0 25 5 30 10 20C15 30 20 25 20 20C20 10 10 0 10 0Z" fill="white" fillOpacity="0.7"/>
                                </svg>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Section 3: Dining table */}
            <motion.div
                className="absolute inset-0 flex items-center justify-center"
                style={{
                    y: tableY,
                    opacity: tableOpacity
                }}
            >
                <div className="relative w-full h-full">
                    {/* Table */}
                    <div className="absolute bottom-1/4 left-0 right-0 h-8 bg-amber-800 border-t-2 border-amber-900"></div>

                    {/* Plate with stacking food */}
                    <div className="absolute left-1/2 bottom-1/3 transform -translate-x-1/2">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{
                                duration: 0.5,
                                delay: 0.5,
                                type: "spring"
                            }}
                        >
                            <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="60" cy="60" r="55" fill="white" stroke="black" strokeWidth="2"/>
                            </svg>
                        </motion.div>

                        {/* Base */}
                        <motion.div
                            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
                            initial={{ scale: 0, y: -20 }}
                            animate={{ scale: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: 1,
                                type: "spring"
                            }}
                        >
                            <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="45" cy="45" r="40" fill="#F0E68C" stroke="black" strokeWidth="2"/>
                            </svg>
                        </motion.div>

                        {/* Toppings */}
                        {[...Array(3)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
                                initial={{ scale: 0, y: -40 - (i * 20) }}
                                animate={{ scale: 1, y: -10 - (i * 5) }}
                                transition={{
                                    duration: 0.5,
                                    delay: 1.5 + (i * 0.3),
                                    type: "spring"
                                }}
                            >
                                <svg width={80 - (i * 15)} height={80 - (i * 15)} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle
                                        cx="40"
                                        cy="40"
                                        r="35"
                                        fill={i === 0 ? "#8BC34A" : i === 1 ? "#9C27B0" : "#FF5722"}
                                        stroke="black"
                                        strokeWidth="2"
                                    />
                                </svg>
                            </motion.div>
                        ))}

                        {/* Sauce */}
                        <motion.div
                            className="absolute left-1/2 top-1/3 transform -translate-x-1/2"
                            animate={{
                                y: [0, 50],
                                opacity: [0, 1]
                            }}
                            transition={{
                                duration: 1,
                                delay: 2.5
                            }}
                        >
                            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M30 0C30 0 10 30 10 40C10 50 50 50 50 40C50 30 30 0 30 0Z" fill="#FFC107" stroke="black" strokeWidth="2"/>
                            </svg>
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            {/* Main title */}
            <motion.div
                className="absolute top-1/4 left-0 right-0 text-center"
                style={{ opacity: titleOpacity }}
            >
                <h1 className="text-5xl font-bold font-poppins mb-4" style={{ textShadow: "0 0 10px rgba(255,255,255,0.8)" }}>
                    Verdant Feast: Craft Your Freshness
                </h1>
                <div className="flex justify-center space-x-4 mt-8">
                    <motion.button
                        className="px-6 py-3 rounded-full font-bold text-white"
                        style={{ background: "linear-gradient(145deg, #4CAF50, #8BC34A)" }}
                        whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(139, 195, 74, 0.5)" }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Build Your Dish
                    </motion.button>
                    <motion.button
                        className="px-6 py-3 rounded-full font-bold text-white"
                        style={{ background: "linear-gradient(145deg, #9C27B0, #673AB7)" }}
                        whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(156, 39, 176, 0.5)" }}
                        whileTap={{ scale: 0.95 }}
                    >
                        See Menu
                    </motion.button>
                </div>
            </motion.div>
        </div>
    );
};

export default HomePage;