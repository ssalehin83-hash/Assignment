import React from 'react';
import LibraryCard from '../components/LibraryCard';

const getData = async () => {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
    const data = await res.json();
    
    // Checks if 'items' exists, otherwise checks if 'data' is an array, otherwise returns empty array
    return data.items || data.data || (Array.isArray(data) ? data : []);
};

const Library = async () => {
    const library = await getData();

    return (
        <section className="py-7">
            <h2 className="text-3xl font-bold text-white">
                The Library
            </h2>

            <p>Twelve lifts covering every major muscle group.</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-3">
                {library.map((item) => {
                    return (
                        <LibraryCard
                            key={item.id}
                            card={item}
                        />
                    );
                })}
            </div>
        </section>
    );
};

export default Library;