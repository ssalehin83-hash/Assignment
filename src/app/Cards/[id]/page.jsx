import React from 'react';
import { notFound } from 'next/navigation'; // Import this to show Next.js 404 page

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
    
    // FIX 1: Convert both to strings (or both to numbers) to ensure the match works
    const item = data.find(item => String(item.id) === String(id));

    // FIX 2: Handle the case where the item doesn't exist
    if (!item) {
        return notFound(); // This renders the nearest not-found.js page
    }

    return (
        <div>
            <h1>{item.name}</h1>
            <p>{item.description}</p>
        </div>
    );
};

export default DetailsPage;