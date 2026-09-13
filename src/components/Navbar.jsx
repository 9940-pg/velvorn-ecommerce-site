import React, { useState } from "react";
import { Search, User, Heart, ShoppingBag, Menu } from "lucide-react";

function NavBar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="relative z-30 bg-[#F7F5F1]">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
                <div className="flex items-center gap-6">
                    <button
                        onClick={() => setOpen(!open)}
                        className="text-[#1B1B19] md:hidden"
                        aria-label="Toggle menu"
                    >
                        <Menu size={22} />
                    </button>
                    <a href="#" className="flex items-center gap-1">
                        <span className="flex h-6 w-6 items-center justify-center bg-[#1B1B19] text-[10px] font-bold text-[#F7F5F1] font-display">
                            V
                        </span>
                        <span className="font-display text-lg font-bold tracking-tight text-[#1B1B19]">
                            ELVORN
                        </span>
                    </a>
                </div>

                <nav className="hidden items-center gap-8 font-body text-sm text-[#1B1B19] md:flex">
                    <a href="#" className="hover:text-[#6E6B64]">Women</a>
                    <a href="#" className="hover:text-[#6E6B64]">Men</a>
                    <a href="#" className="hover:text-[#6E6B64]">Categories</a>
                </nav>

                <div className="flex items-center gap-5 text-[#1B1B19]">
                    <button aria-label="Search" className="hover:text-[#6E6B64]"><Search size={18} /></button>
                    <button aria-label="Account" className="hidden hover:text-[#6E6B64] sm:inline"><User size={18} /></button>
                    <button aria-label="Wishlist" className="hidden hover:text-[#6E6B64] sm:inline"><Heart size={18} /></button>
                    <button aria-label="Bag" className="hover:text-[#6E6B64]"><ShoppingBag size={18} /></button>
                </div>
            </div>

            {open && (
                <div className="border-t border-[#D8D4CA] bg-[#F7F5F1] px-6 py-4 font-body text-sm md:hidden">
                    <a href="#" className="block py-2 text-[#1B1B19]">Women</a>
                    <a href="#" className="block py-2 text-[#1B1B19]">Men</a>
                    <a href="#" className="block py-2 text-[#1B1B19]">Categories</a>
                </div>
            )}
        </header>
    );
}

export default NavBar;