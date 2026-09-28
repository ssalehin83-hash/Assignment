'use client';

import React, { useContext } from 'react';
import { CalendarPlus, Link } from 'lucide-react';
import { useRouter } from 'next/navigation'; // 1. Import useRouter
import { LibraryContext } from '../../../context/LibraryContext'; 

const PlanButton = ({ card }) => {
    const { setPlans } = useContext(LibraryContext);
    const router = useRouter(); // 2. Initialize the router

    const handleAddToPlan = () => {
        setPlans((prevPlans) => {
            // Prevent adding duplicates
            if (prevPlans.find((p) => p.id === card.id)) {
                return prevPlans; // Don't add if it already exists
            }
            return [...prevPlans, card]; // Add new item
        });

        // 3. Navigate to the "My Plans" page
        router.push('/plans'); 
    };

    return (
        
            <button 
                onClick={handleAddToPlan}
                className="flex items-center gap-2 bg-[#ccff00] hover:bg-[#b3e600] text-black font-bold text-sm px-6 py-3 rounded-md transition-colors"
            >
                <CalendarPlus size={18} />
                Add to today's plan
            </button>
       
    );
};

export default PlanButton;