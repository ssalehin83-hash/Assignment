import React from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { CalendarPlus, Bookmark } from 'lucide-react';

const getData = async () => {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    const data = await res.json();
    return data;
};

const DetailsPage = async ({ params }) => {
    const { id } = await params;
    const data = await getData();
    
    // Find the matching item
    const item = data.find(item => String(item.id) === String(id));

    // Handle 404
    if (!item) {
        return notFound();
    }

    // Prepare data for the details table based on your API structure
    const detailsTable = {
        EQUIPMENT: item.equipment,
        DIFFICULTY: item.difficulty,
        SETS: item.sets,
        REPS: item.reps,
        DURATION: `${item.duration} min`,
        CALORIES: `${item.caloriesBurned} kcal`,
        RATING: item.rating,
    };

    return (
        <div className="min-h-screen bg-[#0a0a0a] p-6 md:p-12 flex justify-center items-center">
            {/* Main Container */}
            <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                
                {/* Left Side: Image */}
                <div className="relative w-full aspect-square md:aspect-auto md:h-full min-h-[400px] rounded-2xl overflow-hidden bg-[#1a1a1a]">
                    <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                        priority
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>

                {/* Right Side: Content */}
                <div className="flex flex-col text-white">
                    
                    {/* Header Section */}
                    <h1 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight mb-3">
                        {item.name}
                    </h1>
                    
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6">
                        {item.description}
                    </p>

                    {/* Tags (Muscle Groups) */}
                    <div className="flex gap-2 mb-8">
                        {item.muscleGroups.map((tag, index) => (
                            <span 
                                key={index} 
                                className="bg-[#ccff00] text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Details Table */}
                    <div className="bg-[#141414] rounded-xl p-5 mb-8 border border-gray-800">
                        {Object.entries(detailsTable).map(([key, value]) => (
                            <div 
                                key={key} 
                                className="flex justify-between items-center py-3 border-b border-gray-800 last:border-0"
                            >
                                <span className="text-xs font-semibold text-gray-400 tracking-wider uppercase">
                                    {key}
                                </span>
                                <span className="text-sm font-medium text-gray-200">
                                    {value}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Instructions */}
                    <div className="mb-10">
                        <h3 className="text-sm font-bold uppercase tracking-wider mb-4">
                            Instructions
                        </h3>
                        <ol className="list-decimal list-inside space-y-3 text-sm text-gray-400">
                            {item.instructions.map((step, index) => (
                                <li key={index} className="leading-relaxed pl-1">
                                    <span className="ml-1">{step}</span>
                                </li>
                            ))}
                        </ol>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4 mt-auto">
                        <button className="flex items-center gap-2 bg-[#ccff00] hover:bg-[#b3e600] text-black font-bold text-sm px-6 py-3 rounded-md transition-colors">
                            <CalendarPlus size={18} />
                            Add to today's plan
                        </button>
                        
                        <button className="flex items-center gap-2 bg-transparent hover:bg-gray-900 text-white font-bold text-sm px-6 py-3 rounded-md border border-gray-700 transition-colors">
                            <Bookmark size={18} />
                            Save for later
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DetailsPage;