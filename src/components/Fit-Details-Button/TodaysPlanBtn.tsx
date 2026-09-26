
'use client'
import React, { Dispatch, SetStateAction, useContext } from 'react';
import { CiCalendar } from 'react-icons/ci';
import { IFitLog } from '../Type/Fitlog.type';
import { FitLogContext } from '../context/FitLogContext';
import { toast } from 'react-toastify';

export interface IFitProps{
    todaysPlan: IFitLog[], 
    setTodaysPlan: Dispatch<SetStateAction<IFitLog[]>>,
}

const TodaysPlanBtn = ({fitData}:{fitData:IFitLog}) => {

    const { todaysPlan, setTodaysPlan } = useContext(FitLogContext) as IFitProps;

    const handleTodaysPlan= () => {
        const isAlreadyAdded = todaysPlan.some(
            (todaysFit) => todaysFit.id === fitData.id
        );
        if (isAlreadyAdded) {
            toast.error('Already selected!');
            return;
        }
        setTodaysPlan([...todaysPlan, fitData]);
        toast.success(`'${fitData.name}' added successfully!`)
    }

    return (
        <div>
            <button
                type="button"
                    className="flex h-11 items-center justify-center cursor-pointer gap-2 rounded-lg bg-[#C2F800] px-5 text-sm font-medium text-black transition hover:bg-[#8bb308] sm:flex-1 lg:flex-none"
                    onClick={()=>handleTodaysPlan()}>
                    <CiCalendar size={18} />
                    Add to today&apos;s plan
            </button>
        </div>
    );
};

export default TodaysPlanBtn;