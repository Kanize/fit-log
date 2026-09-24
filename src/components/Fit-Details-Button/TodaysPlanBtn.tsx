
'use client'
import React, { Dispatch, SetStateAction, useContext } from 'react';
import { CiCalendar } from 'react-icons/ci';
import { IFitLog } from '../Type/Fitlog.type';
import { FitLogContext } from '../context/FitLogContext';
import { toast } from 'react-toastify';

interface IFitProps{
    todaysPlan: IFitLog[], 
    setTodaysPlan: Dispatch<SetStateAction<IFitLog[]>>,
}

const TodaysPlanBtn = ({fitData}:{fitData:IFitLog}) => {

    const { todaysPlan, setTodaysPlan } = useContext(FitLogContext) as IFitProps;

    const handleTodaysPlan= () => {
        setTodaysPlan([...todaysPlan, fitData]);
        toast.success(`your '${fitData.name}' succesfull.`)
    }

    return (
        <div>
            <button
                type="button"
                    className="flex h-11 items-center justify-center gap-2 rounded-lg bg-[#C2F800] px-5 text-sm font-medium text-black transition hover:bg-[#8bb308] sm:flex-1 lg:flex-none"
                    onClick={()=>handleTodaysPlan()}>
                    <CiCalendar size={18} />
                    Add to today&apos;s plan
            </button>
        </div>
    );
};

export default TodaysPlanBtn;