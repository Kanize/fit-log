import BannerImage from '@/assets/banner.png';
import Image from 'next/image';



import React from 'react';

const Banner = () => {
    return (
        
            <div className=" px-4 py-8 sm:px-6 lg:px-8 container mx-auto">
                <div
                className="
                    relative
                    overflow-hidden
                    rounded-[15px]
                    border border-[#282c32]
                    bg-[#090a0c]
                    px-6
                    py-10
                    sm:px-8
                    sm:py-12
                    md:px-10
                    lg:min-h-[364px]
                    lg:px-11
                    lg:py-14
                "
                >
                {/* Content */}
                <div
                    className="
                    relative
                    z-10
                    flex
                    min-h-full
                    flex-col
                    justify-center
                    lg:max-w-[58%]
                    "
                >
                    {/* Small label */}
                    <p
                    className="mb-5
                        text-[10px]
                        font-extrabold
                        uppercase
                        tracking-[0.12em]
                        text-[#c6ff00]
                        sm:text-[11px]"
                    >
                    Workout Library
                    </p>

                    {/* Heading */}
                    <h1
                    className="
                        max-w-[650px]
                        text-[42px]
                        font-black
                        uppercase
                        leading-[0.91]
                        tracking-[-1.5px]
                        text-white
                        sm:text-[40px]
                        md:text-[54px]
                        lg:text-[52px]
                        xl:text-[56px]
                    "
                    >
                    Train with intent.<br/> Log every set.
                    </h1>

                    {/* Description */}
                    <p
                    className="
                        mt-5
                        max-w-[510px]
                        text-[13px]
                        font-normal
                        leading-[1.55]
                        text-[#8e939c]
                        sm:text-[14px]
                    "
                    >
                    FitLog is a dark, no-nonsense gym companion: pick a lift, lock it<br/> into today&apos;s plan, and watch the week&apos;s work add up.
                    </p>

                    {/* Button */}
                    <div className="mt-6">
                    <button
                        type="button"
                        className="
                        inline-flex
                        h-[40px]
                        items-center
                        justify-center
                        rounded-[5px]
                        bg-[#c6ff00]
                        px-5
                        text-[10px]
                        font-black
                        uppercase
                        tracking-[0.02em]
                        text-black
                        transition-all
                        duration-200
                        hover:bg-[#d4ff3d]
                        hover:shadow-[0_0_20px_rgba(198,255,0,0.15)]
                        active:scale-[0.98]
                        "
                    >
                        Browse Workouts
                    </button>
                    </div>
                </div>

                {/* Workout image */}
                <div
                    className="
                    relative
                    mx-auto
                    mt-8
                    h-[220px]
                    w-full
                    max-w-[300px]
                    sm:h-[250px]
                    sm:max-w-[340px]
                    md:absolute
                    md:right-5
                    md:top-1/2
                    md:mt-0
                    md:h-[300px]
                    md:w-[350px]
                    md:-translate-y-1/2
                    lg:right-8
                    lg:h-[320px]
                    lg:w-[380px]
                    "
                >
                    <Image
                    src={BannerImage}
                    alt="Workout machine"
                    className="object-contain"
                    sizes="
                        (max-width: 767px) 300px,
                        (max-width: 1023px) 350px,
                        380px
                    "
                    />
                </div>
                </div>
            </div>
           
    );
};

export default Banner;
