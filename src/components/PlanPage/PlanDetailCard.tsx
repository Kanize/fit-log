"use client";

import { useContext, useMemo } from "react";
import Image from "next/image";

import { FitLogContext, FitLogContextType } from "@/components/context/FitLogContext";

const PlanDetailCard = () => {
  const context = useContext(FitLogContext);

  if (!context) {
    throw new Error("PlanDetailCard must be used inside FitLogProvider");
  }

  const { todaysPlan, savedPlan, activeTab, sortBy } = context as FitLogContextType;

  const currentPlan = activeTab === "today" ? todaysPlan : savedPlan;

  const sortedPlan = useMemo(() => {
    return [...currentPlan].sort((a, b) => {
      const getSortValue = (exercise: (typeof currentPlan)[number]) => {
        if (sortBy === "calories") return exercise.caloriesBurned ?? 0;
        if (sortBy === "duration") return exercise.duration ?? 0;
        if (sortBy === "rating") return exercise.rating ?? 0;

        return 0;
      };

      const first = getSortValue(a);
      const second = getSortValue(b);

      return Number(second) - Number(first);
    });
  }, [currentPlan, sortBy]);

  if (sortedPlan.length === 0) {
    return (
      <section
        className="
            mt-5
            flex
            min-h-[248px]
            flex-col
            items-center
            justify-center
            rounded-[12px]
            border
            border-dashed
            border-[#292e36]
            bg-[#101216]
            px-6
            text-center">
        <h2
          className="
            text-[16px]
            font-black
            uppercase
            text-white
          "
        >
          Nothing Here Yet
        </h2>

        <p
          className="
            mt-2
            max-w-[330px]
            text-[10px]
            text-[#777e89]
            sm:text-[11px]
          "
        >
          Browse the library and add a lift to get today moving.
        </p>

        <button
          type="button"
          className="
            mt-5
            rounded-full
            bg-[#c6ff00]
            px-5
            py-2.5
            text-[10px]
            font-black
            text-black
          "
        >
          Go to workouts
        </button>
      </section>
    );
  }

  return (
    <section className="mt-5 space-y-3">
      {sortedPlan.map((exercise) => (
        <article
          key={exercise.id}
          className="
            flex
            flex-col
            gap-4
            rounded-[13px]
            border
            border-[#252a32]
            bg-[#15181e]
            p-3
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          {/* Exercise information */}
          <div className="flex min-w-0 items-center gap-3">
            <div
              className="
                relative
                h-[66px]
                w-[118px]
                shrink-0
                overflow-hidden
                rounded-[6px]
                bg-[#0f1115]
              "
            >
              {exercise.image && (
                <Image
                  src={exercise.image}
                  alt={exercise.name}
                  fill
                  className="object-cover"
                  sizes="118px"
                />
              )}
            </div>

            <div className="min-w-0">
              <h3
                className="
                  truncate
                  text-[14px]
                  font-black
                  uppercase
                  text-white
                "
              >
                {exercise.name}
              </h3>

              <p className="mt-1 text-[10px] text-[#777e89]">
                {exercise.equipment}
              </p>

              <div className="mt-2 flex gap-3 text-[9px] text-[#c0c5cc]">
                <span>◷ {exercise.duration} min</span>

                <span>🔥 {exercise.caloriesBurned} kcal</span>

                <span>★ {exercise.rating}</span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              className="
                h-[31px]
                rounded-full
                border
                border-[#363c46]
                px-4
                text-[10px]
                text-[#d3d6db]
              "
            >
              View Details
            </button>

            <button
              type="button"
              className="
                h-[31px]
                rounded-full
                bg-[#c6ff00]
                px-4
                text-[10px]
                font-bold
                text-black
              "
            >
              ✓ Mark as Done
            </button>

            <button
              type="button"
              className="
                flex
                h-[30px]
                w-[25px]
                items-center
                justify-center
                text-[#646b76]
                hover:text-white
              "
            >
              ×
            </button>
          </div>
        </article>
      ))}
    </section>
  );
};

export default PlanDetailCard;
