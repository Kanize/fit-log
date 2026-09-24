

import { IFitLog } from '@/components/Type/Fitlog.type';
import Image from 'next/image';
import React from 'react';
import { CiBookmark, CiCalendar } from 'react-icons/ci';

interface IFitLogDetailsProps{
    params: Promise <{
        id:string;
    }>;
}

const getFits = async () =>{
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
    const data = await res.json();
    return data;
}

const FitLogDetails = async ({params}: IFitLogDetailsProps) => {
    const {id} = await params;
    const fitsData =await getFits()
    const fitData = fitsData.find(
        (fit : IFitLog) => String (fit.id) === String (id)
    ) as IFitLog;

    console.log(fitData , 'id');
    return (
        <div className="min-h-screen container mx-auto  px-4 py-16 text-white sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">

                {/* Main Layout */}
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">

                {/* ================= IMAGE ================= */}
                <div className="w-full">
                    <div className="relative aspect-square w-full overflow-hidden rounded-xl sm:rounded-2xl">
                    <Image
                        src={fitData.image}
                        alt={fitData.name}
                        fill
                        priority
                        className="object-cover object-center"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    </div>
                </div>

                {/* ================= CONTENT ================= */}
                <div className="flex flex-col">

                    {/* Title */}
                    <h1 className="text-3xl font-bold uppercase tracking-tight sm:text-4xl">
                    {fitData.name}
                    </h1>

                    {/* Description */}
                    <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-400 sm:text-base">
                    {fitData.description}
                    </p>

                    {/* Muscle Groups */}
                    <div className="mt-4 flex flex-wrap gap-2">
                    {fitData.muscleGroups.map((muscle) => (
                        <span
                        key={muscle}
                        className="rounded-full bg-[#C2F800] px-3 py-1 text-[11px] font-medium text-black"
                        >
                        {muscle}
                        </span>
                    ))}
                    </div>

                    {/* ================= DETAILS ================= */}
                    <div className="mt-5 overflow-hidden rounded-xl border border-[#292c34] bg-[#15181e]">

                    <div className="flex items-center justify-between border-b border-[#292c34] px-4 py-4 text-sm">
                        <span className="text-[11px] font-semibold uppercase text-gray-400">
                        Equipment
                        </span>
                        <span className="text-right">
                        {fitData.equipment}
                        </span>
                    </div>

                    <div className="flex items-center justify-between border-b border-[#292c34] px-4 py-4 text-sm">
                        <span className="text-[11px] font-semibold uppercase text-gray-400">
                        Difficulty
                        </span>
                        <span>{fitData.difficulty}</span>
                    </div>

                    <div className="flex items-center justify-between border-b border-[#292c34] px-4 py-4 text-sm">
                        <span className="text-[11px] font-semibold uppercase text-gray-400">
                        Sets
                        </span>
                        <span>{fitData.sets}</span>
                    </div>

                    <div className="flex items-center justify-between border-b border-[#292c34] px-4 py-4 text-sm">
                        <span className="text-[11px] font-semibold uppercase text-gray-400">
                        Reps
                        </span>
                        <span>{fitData.reps}</span>
                    </div>

                    <div className="flex items-center justify-between border-b border-[#292c34] px-4 py-4 text-sm">
                        <span className="text-[11px] font-semibold uppercase text-gray-400">
                        Duration
                        </span>
                        <span>{fitData.duration} min</span>
                    </div>

                    <div className="flex items-center justify-between border-b border-[#292c34] px-4 py-4 text-sm">
                        <span className="text-[11px] font-semibold uppercase text-gray-400">
                        Calories
                        </span>
                        <span>{fitData.caloriesBurned} kcal</span>
                    </div>

                    <div className="flex items-center justify-between px-4 py-4 text-sm">
                        <span className="text-[11px] font-semibold uppercase text-gray-400">
                        Rating
                        </span>
                        <span>{fitData.rating}</span>
                    </div>

                    </div>

                    {/* ================= INSTRUCTIONS ================= */}
                    <div className="mt-6">
                    <h2 className="text-sm font-bold uppercase tracking-wide">
                        Instructions
                    </h2>

                    <ol className="mt-4 space-y-3">
                        {fitData.instructions.map((instruction, index) => (
                        <li
                            key={index}
                            className="flex gap-3 text-xs leading-5 text-gray-400 sm:text-sm"
                        >
                            <span className="shrink-0 text-gray-500">
                            {index + 1}.
                            </span>

                            <span>{instruction}</span>
                        </li>
                        ))}
                    </ol>
                    </div>

                    {/* ================= BUTTONS ================= */}
                    <div className="mt-7 flex flex-col gap-3 sm:flex-row">

                    <button
                        type="button"
                        className="flex h-11 items-center justify-center gap-2 rounded-lg bg-[#C2F800] px-5 text-sm font-medium text-black transition hover:bg-[#d0ff32] sm:flex-1 lg:flex-none"
                    >
                        <CiCalendar size={18} />
                        Add to today&apos;s plan
                    </button>

                    <button
                        type="button"
                        className="flex h-11 items-center justify-center gap-2 rounded-lg border border-[#3a3d46] px-5 text-sm text-gray-300 transition hover:border-[#C2F800] hover:text-[#C2F800] sm:flex-1 lg:flex-none"
                    >
                        <CiBookmark size={18} />
                        Save for later
                    </button>

                    </div>

                </div>
                </div>
            </div>
        </div>
    );
};

export default FitLogDetails;