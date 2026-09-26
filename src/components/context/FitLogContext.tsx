"use client";

import React, {createContext, PropsWithChildren, useState,} from "react";
import { IFitLog } from "../Type/Fitlog.type";

export type PlanTab = "today" | "saved";

export type SortOption =
    | "duration" | "calories" | "rating";

export interface FitLogContextType {
    todaysPlan: IFitLog[];
    setTodaysPlan: React.Dispatch<React.SetStateAction<IFitLog[]>>;

    savedPlan: IFitLog[];
    setSavedPlan: React.Dispatch<React.SetStateAction<IFitLog[]>>;

    activeTab: PlanTab;
    setActiveTab: React.Dispatch<React.SetStateAction<PlanTab>>;

    sortBy: SortOption;
    setSortBy: React.Dispatch<React.SetStateAction<SortOption>>;
}

export const FitLogContext= createContext<FitLogContextType| null>(null);

const FitLogProvider = ({ children}: PropsWithChildren) => {
    const [todaysPlan, setTodaysPlan] = useState<IFitLog[]>([]);
    const [savedPlan, setSavedPlan] = useState<IFitLog[]>([]);
    

const [activeTab, setActiveTab] =useState<PlanTab>("today");

  const [sortBy, setSortBy] = useState<SortOption>("duration");

  const sharedData = {
    todaysPlan,
    setTodaysPlan,

    savedPlan,
    setSavedPlan,

    activeTab,
    setActiveTab,

    sortBy,
    setSortBy,
  };

  return (
    <FitLogContext.Provider value={sharedData}>
      {children}
    </FitLogContext.Provider>
  );
};

export default FitLogProvider;