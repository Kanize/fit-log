import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '@/assets/logo.png'
import MenuLinks from '../All-Links/menu';
import MenuButton from '../All-Links/menuButton';

const Navbar = () => {


    return (
        <div className='bg-base-100 shadow-sm'>
            <div className="navbar container mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabIndex={-1}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow accent-amber-300 ">
                    <MenuLinks/>
                </ul>
                </div>
                <Link href='/' className="btn btn-ghost text-xl">
                    <div className='flex items-center gap-1'>
                        <Image src={logo} alt="fit log logo" />
                        FITLOG
                    </div>
                    </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <MenuLinks/>
                </ul>
            </div>
            <div className="navbar-end">
            <MenuButton/>
        </div>
            </div>
        </div>
    );
};

export default Navbar;


/** <Link
        href="/My-Plan"
            className="group flex items-center gap-2 rounded-full px-2 py-1.5 text-xs text-gray-400 transition-all duration-200 hover:bg-[#182500] hover:text-[#C2F800]"
            >
            <span>Plan</span>

            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#C2F800] text-[9px] font-bold text-black">
                0
            </span>
            </Link>
 */