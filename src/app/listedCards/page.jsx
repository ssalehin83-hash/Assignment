'use client';

import React, { useContext, useState } from 'react';
import Link from 'next/link';
import { LibraryContext } from '@/context/LibraryContext'; // Adjust path if needed
import { ChevronDown } from 'lucide-react';

const MyPlansPage = () => {
    // Get plans and saved items from your context
    const { plans, saved } = useContext(LibraryContext);
    const [activeTab, setActiveTab] = useState('today'); // 'today' or 'saved'

    // Calculate summary stats based on the "plans" array
    const totalExercises = plans.length;
    const totalMinutes = plans.reduce((sum, item) => sum + (item.duration || 0), 0);
    const totalCalories = plans.reduce((sum, item) => sum + (item.caloriesBurned || 0), 0);

    // Determine which list to show based on the active tab
    const currentList = activeTab === 'today' ? plans : saved;

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col">
            
            {/* 1. Top Navbar (Using your existing Navbar is recommended, but here's a minimal one to match the screenshot) */}
            <nav className="border-b border-gray-800 px-6 py-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <span className="text-[#ccff00] font-bold text-xl">⚡ FITLOG</span>
                </div>
                <div className="flex gap-6 text-sm font-medium">
                    <Link href="/cards" className="text-gray-400 hover:text-white transition-colors">Workouts</Link>
                    <Link href="/plans" className="text-[#ccff00] border-b-2 border-[#ccff00] pb-1">My Plan</Link>
                </div>
                <div className="flex items-center gap-4 text-sm">
                    <span className="flex items-center gap-1">Plan <span className="bg-[#ccff00] text-black rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">{plans.length}</span></span>
                    <span className="flex items-center gap-1 text-gray-400">Saved <span className="bg-gray-800 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">{saved.length}</span></span>
                </div>
            </nav>

            <main className="max-w-5xl mx-auto w-full px-6 py-10 flex-grow">
                
                {/* 2. Header Section */}
                <div className="mb-8">
                    <h1 className="text-4xl font-extrabold uppercase tracking-tight mb-2">MY PLAN</h1>
                    <p className="text-gray-400 text-sm">Cap of five lifts for today. Finish them, then load more.</p>
                </div>

                {/* 3. Summary Statistics Bar */}
                <div className="bg-[#141414] border border-gray-800 rounded-xl p-6 grid grid-cols-3 gap-4 mb-8">
                    <div>
                        <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Exercises</p>
                        <p className="text-3xl font-bold text-[#ccff00]">{totalExercises}</p>
                    </div>
                    <div className="border-l border-gray-800 pl-6">
                        <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Minutes</p>
                        <p className="text-3xl font-bold text-white">{totalMinutes}</p>
                    </div>
                    <div className="border-l border-gray-800 pl-6">
                        <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Calories</p>
                        <p className="text-3xl font-bold text-white">{totalCalories}</p>
                    </div>
                </div>

                {/* 4. Tabs and Sort Section */}
                <div className="flex justify-between items-center mb-6">
                    <div className="flex bg-[#141414] p-1 rounded-lg border border-gray-800">
                        <button 
                            onClick={() => setActiveTab('today')}
                            className={`px-4 py-2 text-sm font-bold rounded-md transition-colors ${activeTab === 'today' ? 'bg-[#2a2a2a] text-white' : 'text-gray-500 hover:text-white'}`}
                        >
                            Today's Plan
                        </button>
                        <button 
                            onClick={() => setActiveTab('saved')}
                            className={`px-4 py-2 text-sm font-bold rounded-md transition-colors ${activeTab === 'saved' ? 'bg-[#2a2a2a] text-white' : 'text-gray-500 hover:text-white'}`}
                        >
                            Saved
                        </button>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                        <span>Sort By</span>
                        <button className="flex items-center gap-1 bg-[#141414] border border-gray-800 px-3 py-1 rounded-md hover:bg-gray-900 transition-colors">
                            Duration <ChevronDown size={14} />
                        </button>
                    </div>
                </div>

                {/* 5. Content Area (Empty State or Grid) */}
                {currentList.length === 0 ? (
                    // Empty State (Matches your screenshot)
                    <div className="bg-[#141414] border border-gray-800 rounded-xl p-16 flex flex-col items-center justify-center text-center min-h-[400px]">
                        <h2 className="text-xl font-bold uppercase mb-2">NOTHING HERE YET</h2>
                        <p className="text-gray-400 text-sm mb-6 max-w-md">
                            Browse the library and add a lift to get today moving.
                        </p>
                        <Link 
                            href="/cards" 
                            className="bg-[#ccff00] hover:bg-[#b3e600] text-black font-bold text-sm px-6 py-3 rounded-md transition-colors"
                        >
                            Go to workouts
                        </Link>
                    </div>
                ) : (
                    // Grid of Items (When items exist)
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {currentList.map((item) => (
                            <div key={item.id} className="bg-[#141414] border border-gray-800 rounded-xl p-4 flex flex-col">
                                <h3 className="font-bold uppercase mb-1">{item.name}</h3>
                                <p className="text-gray-400 text-sm mb-4">{item.duration} min • {item.caloriesBurned} kcal</p>
                                <Link href={`/cards/${item.id}`} className="text-[#ccff00] text-sm font-semibold hover:underline mt-auto">
                                    View Details
                                </Link>
                            </div>
                        ))}
                    </div>
                )}
            </main>

            {/* 6. Footer */}
            <footer className="border-t border-gray-800 px-6 py-4 flex justify-between items-center text-xs text-gray-500">
                <span className="text-[#ccff00] font-bold">⚡ FITLOG</span>
                <span>© 2026 FitLog — Workout Library. Train hard, log honest.</span>
            </footer>
        </div>
    );
};

export default MyPlansPage;