

import Link from 'next/link';
import React from 'react';

const notFound = () => {
    return (
        <div className="flex min-h-[70vh] flex-col items-center justify-center bg-[#0b0c0f] px-4 text-center text-white">
            <h1 className="text-[100px] font-black leading-none tracking-tighter text-[#C2F800] sm:text-[140px]">
                404
            </h1>

            <h2 className="mt-6 text-2xl font-black uppercase tracking-wide sm:text-3xl">
                Page Not Found
            </h2>

            <p className="mt-3 max-w-md text-sm leading-6 text-[#8e939c] sm:text-base">
                Sorry, the page you are looking for doesn&apos;t exist
                or may have been moved.
            </p>

            <Link
                href="/"
                className="mt-8 rounded-lg bg-[#C2F800] px-6 py-3 text-sm font-bold text-black transition hover:bg-[#8bb308]"
            >
                Back to Home
            </Link>
        </div>
    );
};

export default notFound;