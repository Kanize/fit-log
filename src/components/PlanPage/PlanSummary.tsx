"use client";

import { useContext } from "react";
import { FitLogContext, FitLogContextType } from "@/components/context/FitLogContext";

const PlanSummary = () => {
  const context = useContext(FitLogContext);

  if (!context) {
    throw new Error("PlanSummary must be used inside FitLogProvider");
  }

  const { todaysPlan, savedPlan, activeTab } = context as FitLogContextType;

  const currentPlan = activeTab === "today" ? todaysPlan : savedPlan;

  const exercises = currentPlan.length;

  const minutes = currentPlan.reduce(
    (total, exercise) => total + (exercise.duration ?? 0),
    0,
  );

  const calories = currentPlan.reduce(
    (total, exercise) => total + (exercise.caloriesBurned ?? 0),
    0,
  );

  return (
    <section
      className="
        mt-5
        rounded-[13px]
        border
        border-[#252a32]
        bg-[#13161c]
        px-5
        py-5
        sm:px-6
        sm:py-7
      "
    >
      <div
        className="
          grid
          grid-cols-1
          divide-y
          divide-[#22262d]
          sm:grid-cols-3
          sm:divide-x
          sm:divide-y-0
        "
      >
        {/* Exercises */}
        <div
          className="
            flex
            items-center
            justify-between
            py-4
            sm:block
            sm:px-5
            sm:py-0
            sm:first:pl-0
          "
        >
          <p className="text-[10px] text-[#777e89]">Exercises</p>

          <p
            className="
              text-[28px]
              font-black
              leading-none
              text-[#c6ff00]
              sm:mt-2
              sm:text-[34px]
            "
          >
            {exercises}
          </p>
        </div>

        {/* Minutes */}
        <div
          className="
            flex
            items-center
            justify-between
            py-4
            sm:block
            sm:px-5
            sm:py-0
          "
        >
          <p className="text-[10px] text-[#777e89]">Minutes</p>

          <p
            className="
              text-[28px]
              font-black
              leading-none
              text-white
              sm:mt-2
              sm:text-[34px]
            "
          >
            {minutes}
          </p>
        </div>

        {/* Calories */}
        <div
          className="
            flex
            items-center
            justify-between
            py-4
            sm:block
            sm:px-5
            sm:py-0
          "
        >
          <p className="text-[10px] text-[#777e89]">Calories</p>

          <p
            className="
              text-[28px]
              font-black
              leading-none
              text-white
              sm:mt-2
              sm:text-[34px]
            "
          >
            {calories}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PlanSummary;
