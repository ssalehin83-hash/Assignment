import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className="container mx-auto">
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={-1} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {/* Fixed mobile links */}
                            <li><Link href="/cards">Workouts</Link></li>
                            <li><Link href="/plans">My Plans</Link></li>
                        </ul>
                    </div>
                    <Image src="/logo.png" alt="FITLOG Logo" width={30} height={30} />
                    <Link href="/mainPage" className="btn btn-ghost text-xl font-bold">FITLOG</Link>
                </div>
                
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-4">
                        {/* FIXED: Removed the file path, just use the route name */}
                        <Link href="/cards" className="btn bg-lime-400 text-black">Workouts</Link>
                        <Link href="/src/app/listed-items/page.jsx" className="btn btn-ghost">My Plans</Link>
                    </ul>
                </div>
                
                <div className="navbar-end">
                    <button className="btn">Button</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;