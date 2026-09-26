
'use client'
import React, { Dispatch, SetStateAction, useContext } from 'react';
import { CiBookmark} from 'react-icons/ci';
import { IFitLog } from '../Type/Fitlog.type';
import { FitLogContext } from '../context/FitLogContext';
import { toast } from 'react-toastify';

interface IFitProps{
    savedPlan: IFitLog[], 
    setSavedPlan: Dispatch<SetStateAction<IFitLog[]>>,
}

const SavedPlanBtn = ({fitData}:{fitData:IFitLog}) => {

    const { savedPlan, setSavedPlan } = useContext(FitLogContext) as IFitProps;

    const handleSavedPlan= () => {
        const isAlreadyAdded = savedPlan.some(
            (savedFit) => savedFit.id === fitData.id
            );
        if (isAlreadyAdded) {
            toast.error('Already selected!');
            return;
        }
        setSavedPlan([...savedPlan, fitData]);
        toast.success("Added for later")
    }

    return (
        <div>
            <button
                type="button"
                    className="flex h-11 items-center cursor-pointer justify-center gap-2 rounded-lg border border-[#3a3d46] px-5 text-sm text-gray-300 transition hover:border-[#C2F800] hover:text-[#C2F800] sm:flex-1 lg:flex-none"
                    onClick={()=>handleSavedPlan()}>
                    <CiBookmark size={18} />
                    Save for later
            </button>
        </div>
    );
};

export default SavedPlanBtn;