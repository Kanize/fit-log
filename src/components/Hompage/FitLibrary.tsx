


import React from 'react';
import FitLibraryCard from './FitLibraryCard';
import { IFitLog } from '../Type/Fitlog.type';

const getFits = async () =>{
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
    const data = res.json();
    return data;
}

const FitLibrary = async () => {
    const fitsData =await getFits()
    
    return (
        <div className=" px-4 py-8 sm:px-6 lg:px-8 container mx-auto">

                <div>
                <h2 className=" text-2xl font-black  tracking-[-1.5px] text-white
                            sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px]">
                                THE LIBRARY</h2>
                <p className=" mt-2  text-[13px] font-normal leading-[1.55] text-[#8e939c] sm:text-[14px]">
                    Twelve lifts covering every major muscle group.</p>
                </div>
                <div className=' grid grid-cols-3 gap-4 my-6'>
                    {fitsData.map((fitData:IFitLog, index:number)=>{
                        return <FitLibraryCard key={index} fitData={fitData}/>
                    } )}
                </div>
        </div>
    );
};

export default FitLibrary;