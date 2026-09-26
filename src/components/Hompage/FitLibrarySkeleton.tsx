

import React from 'react';

const FitLibrarySkeleton = () => {
    return (
        <div className="overflow-hidden rounded-2xl border border-[#272930] bg-[#15161b] animate-pulse">

            {/* Image Skeleton */}
            <div className="h-55 w-full bg-[#292e36]" />

            {/* Content */}
            <div className="p-5">

                {/* Muscle Groups */}
                <div className="mb-3 flex gap-2">
                    <div className="h-6 w-20 rounded-full bg-[#292e36]" />
                    <div className="h-6 w-16 rounded-full bg-[#292e36]" />
                </div>

                {/* Title */}
                <div className="h-4 w-3/4 rounded bg-[#292e36]" />

                {/* Equipment */}
                <div className="mt-3 h-3 w-1/2 rounded bg-[#292e36]" />

                {/* Divider */}
                <div className="my-3 border-t border-[#272930]" />

                {/* Bottom Info */}
                <div className="flex gap-4">
                    <div className="h-3 w-14 rounded bg-[#292e36]" />
                    <div className="h-3 w-14 rounded bg-[#292e36]" />
                    <div className="h-3 w-10 rounded bg-[#292e36]" />
                </div>
            </div>
        </div>
    );
};

export default FitLibrarySkeleton;