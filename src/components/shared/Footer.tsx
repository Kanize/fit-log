import Image from 'next/image';
import React from 'react';
import FooterLogo from '@/assets/SVG.png'
import Link from 'next/link';

const Footer = () => {
    return (
        <div className='border-t border-t-gray-800'>
        <div className='flex justify-between items-center container mx-auto my-6'>
            <div>
                <Link href='/' className="btn btn-ghost text-[15px]">
                    <div className='flex items-center gap-1'>
                        <Image src={FooterLogo} alt="footer logo" />
                        FITLOG
                    </div>
                    </Link>
            </div>
            <div>
                <p className='text-xs text-[#6B7280]'>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
            </div>
        </div>
        </div>
    );
};

export default Footer;