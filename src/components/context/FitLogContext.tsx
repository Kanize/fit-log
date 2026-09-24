
'use client'
import React, { createContext, PropsWithChildren, useState } from 'react';

export const FitLogContext= createContext({});


const FitLogProvider = ({children}: PropsWithChildren) => {
    
    const [todaysPlan, setTodaysPlan] = useState([]);
    const [savedPlan, setSavedPlan] = useState([]);

    const sharedData = {
        todaysPlan, 
        setTodaysPlan,
        savedPlan, 
        setSavedPlan,
    }
    
    return (
        <FitLogContext.Provider value={sharedData}>
            {children}
        </FitLogContext.Provider>
    );
};

export default FitLogProvider;