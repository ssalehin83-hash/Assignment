'use client';

import React, { createContext, useState, useMemo } from 'react';

export const LibraryContext = createContext(null);

const LibraryProvider = ({ children }) => {
    const [plans, setPlans] = useState([]);
    const [saved, setSaved] = useState([]);
    
    // Memoize the value to prevent unnecessary re-renders
    const sharedData = useMemo(() => ({
        plans,
        setPlans,
        saved,
        setSaved
    }), [plans, saved]);

    return (
        <LibraryContext.Provider value={sharedData}>
            {children}
        </LibraryContext.Provider>
    );
};

export default LibraryProvider;