

'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';


const MenuLinks = () => {
    const pathname = usePathname();
    return (
        <>
            <li>
            <Link
                href="/"
                className={`rounded-full px-4 py-2 text-xs transition ${
                pathname === "/"
                    ? "bg-base-200 text-[#C2F800]"
                    : "text-gray-400 hover:bg-base-200 hover:text-[#C2F800]"
                }`}
            >
                Workouts
            </Link>
            </li>

            <li>
            <Link
                href="/My-Plan"
                className={`rounded-full px-4 py-2 text-xs transition ${
                pathname === "/My-Plan"
                    ? "bg-base-200 text-[#C2F800]"
                    : "text-gray-400 hover:bg-base-200 hover:text-[#C2F800]"
                }`}
            >
                My Plan
            </Link>
            </li>
        </>
    );
};

export default MenuLinks;