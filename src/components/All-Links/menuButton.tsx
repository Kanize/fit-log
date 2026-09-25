

'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import React, { useContext } from 'react';
import { FitLogContext } from '../context/FitLogContext';
import { IFitProps } from '../Fit-Details-Button/TodaysPlanBtn';

const MenuButton = () => {
    const pathname = usePathname();
    const planActive = pathname === '/My-Plan'; 
    const savedActive = pathname === '/Saved';

    
    const { todaysPlan, savedPlan } = useContext(FitLogContext) as IFitProps;


    return (
        <div className="flex items-center">

            {/* PLAN */}
                <Link
                href="/My-Plan"
                className='group flex items-center gap-2 rounded-full text-xs transition-all duration-200  hover:bg-[#182500] hover:text-[#C2F800] py-2 px-4'
                >
                <span>Plan</span>

                <span className={`flex h-4 w-4 items-center justify-center rounded-full text-[9px] font-bold ${ planActive ? 'bg-[#C2F800] text-black' : 'bg-black text-white' }`}>
                    {todaysPlan.length}
                </span>
                </Link>


                <Link
                href="/My-Plan "
                className='group flex items-center gap-2 rounded-full px-4 py-2 text-xs transition-all duration-200 hover:bg-[#182500] hover:text-[#C2F800]'
                >
                <span>Saved</span>

                <span className={`flex h-4 w-4 items-center justify-center rounded-full text-[9px] font-bold ${ savedActive ? 'bg-[#C2F800] text-black' : 'bg-black text-white' }`}>
                    {savedPlan.length}
                </span>
                </Link>



        </div>
    );
};

export default MenuButton;