import React from 'react';
import { IFitLog } from '../Type/Fitlog.type';
import Image from 'next/image';
import { CiClock2 } from 'react-icons/ci';
import { TbFlameFilled } from 'react-icons/tb';
import { FaRegStar } from 'react-icons/fa';
import Link from 'next/link';


const FitLibraryCard = ({fitData}: { fitData: IFitLog }) => {
    console.log(fitData, "Library Data")
    return (
        <Link href={`/FitLogDetails/${fitData.id}`}>
            <div className="overflow-hidden rounded-2xl border border-[#272930] bg-[#15161b] text-white">
                
                {/* Image */}
                <div className="relative h-[220px] w-full overflow-hidden">
                <Image
                    src={fitData.image}
                    alt={fitData.name}
                    fill
                    className="object-cover object-center"
                />
                </div>

                {/* Content */}
                <div className="p-5">
                    
                    {/* Muscle Groups */}
                    <div className="mb-3 flex gap-2">
                    {fitData.muscleGroups.map((muscle) => (
                        <span
                        key={muscle}
                        className="rounded-full bg-[#C2F800] px-3 py-1 text-[11px] font-bold uppercase text-black"
                        >
                        {muscle}
                        </span>
                    ))}
                    </div>

                    {/* Title */}
                    <h2 className="text-[16px] font-bold uppercase tracking-wide">
                    {fitData.name}
                    </h2>

                    {/* Equipment */}
                    <p className="mt-1 text-xs text-gray-500">
                    {fitData.equipment}
                    </p>

                    {/* Divider */}
                    <div className="my-3 border-t border-[#272930]" />

                    {/* Bottom Info */}
                    <div className="flex items-center gap-4 text-xs text-gray-400">
                    <div className="flex items-center gap-1">
                        <CiClock2 size={13} />
                        <span>{fitData.duration} min</span>
                    </div>

                    <div className="flex items-center gap-1">
                        <TbFlameFilled size={13} />
                        <span>{fitData.caloriesBurned} kcal</span>
                    </div>

                    <div className="flex items-center gap-1">
                        <FaRegStar size={13} />
                        <span>{fitData.rating}</span>
                    </div>
                    </div>
                </div>
                </div>
            </Link>
    );
};

export default FitLibraryCard;