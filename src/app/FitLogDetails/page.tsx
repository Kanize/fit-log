import FitLibraryCard from '@/components/Hompage/FitLibraryCard';
import { IFitLog } from '@/components/Type/Fitlog.type';
import React from 'react';


const getFits = async () =>{
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
    const data = res.json();
    return data;
}

const FitLogLibrary = async () => {
    const fitsData =await getFits()
    return (
        <div className=" px-4 py-8 sm:px-6 lg:px-8 container mx-auto">
            <div >
                <h2 className=" text-4xl  tracking-[-1.5px] text-white
                            sm:text-[20px] md:text-[28px] lg:text-[40px] xl:text-[42px] text-center">
                                THE LIBRARY</h2>
                <p className=" mt-2  text-[13px] font-normal leading-[1.55] text-[#8e939c] sm:text-[14px] text-center">
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

export default FitLogLibrary;