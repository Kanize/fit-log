"use client";

import { useContext } from "react";
import { FitLogContext, FitLogContextType, SortOption } from "@/components/context/FitLogContext";

const PlanTabsSort = () => {
    const context = useContext(FitLogContext);

    if (!context) {
        throw new Error("PlanTabsSort must be used inside FitLogProvider");
    }

    const { activeTab, setActiveTab, sortBy, setSortBy } = context as FitLogContextType;

    return (
        <div className="mt-6 flex items-center justify-between gap-4">
        {/* Tabs */}
        <div
            className="
            flex
            h-[34px]
            items-center
            rounded-[8px]
            border
            border-[#252a32]
            bg-[#15181e]
            p-[3px]
            "
        >
            <button
            type="button"
            onClick={() => setActiveTab("today")}
            className={`
                h-[26px]
                rounded-[6px]
                px-4
                text-[10px]
                font-medium
                transition
                ${
                activeTab === "today"
                    ? "bg-[#252a32] text-white"
                    : "text-[#777e89] hover:text-white"
                }
            `}
            >
            Today's Plan
            </button>

            <button
            type="button"
            onClick={() => setActiveTab("saved")}
            className={`
                h-[26px]
                rounded-[6px]
                px-4
                text-[10px]
                font-medium
                transition
                ${
                activeTab === "saved"
                    ? "bg-[#252a32] text-white"
                    : "text-[#777e89] hover:text-white"
                }
            `}
            >
            Saved
            </button>
        </div>

        {/* Sort */}
        <div className="flex items-center gap-2">
            <span className="hidden text-[10px] text-[#777e89] sm:block">
            Sort By
            </span>

            <select
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value as SortOption)}
            className="
                h-[30px]
                rounded-[7px]
                border
                border-[#2b3038]
                bg-[#15181e]
                px-3
                text-[10px]
                text-[#d5d8dd]
                outline-none
            "
            >
            <option value="duration">Duration</option>

            <option value="calories">Calories</option>

            <option value="rating">Rating</option>
            </select>
        </div>
        </div>
    );
};

export default PlanTabsSort;
