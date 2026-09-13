import React from "react";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

function Footer() {
    return (
        <footer className="bg-[#F7F5F1] px-6 py-14 text-[#1B1B19] md:px-10">
            <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 md:grid-cols-4">
                <div className="col-span-2 md:col-span-1">
                    <div className="flex items-center gap-1">
                        <span className="flex h-6 w-6 items-center justify-center bg-[#1B1B19] text-[10px] font-bold text-[#F7F5F1] font-display">
                            V
                        </span>
                        <span className="font-display text-base font-bold tracking-tight text-[#1B1B19]">
                            ELVORN
                        </span>
                    </div>
                    <div className="mt-5 flex gap-4 text-[#6E6B64]">
                        <a href="#" aria-label="Facebook" className="hover:text-[#1B1B19]">
                            <FaFacebookF size={14} />
                        </a>
                        <a href="#" aria-label="Instagram" className="hover:text-[#1B1B19]">
                            <FaInstagram size={16} />
                        </a>
                        <a href="#" aria-label="Twitter" className="hover:text-[#1B1B19]">
                            <FaXTwitter size={14} />
                        </a>
                    </div>
                </div>

                <div>
                    <p className="font-body text-sm font-medium text-[#1B1B19]">Shop</p>
                    <ul className="mt-4 space-y-2 font-body text-sm text-[#6E6B64]">
                        <li><a href="#" className="hover:text-[#1B1B19]">Women</a></li>
                        <li><a href="#" className="hover:text-[#1B1B19]">Men</a></li>
                        <li><a href="#" className="hover:text-[#1B1B19]">Accessories</a></li>
                        <li><a href="#" className="hover:text-[#1B1B19]">Performance wear</a></li>
                        <li><a href="#" className="hover:text-[#1B1B19]">Footwear</a></li>
                    </ul>
                </div>

                <div>
                    <p className="font-body text-sm font-medium text-[#1B1B19]">Help</p>
                    <ul className="mt-4 space-y-2 font-body text-sm text-[#6E6B64]">
                        <li><a href="#" className="hover:text-[#1B1B19]">Customer support</a></li>
                        <li><a href="#" className="hover:text-[#1B1B19]">My Velvorn account</a></li>
                        <li><a href="#" className="hover:text-[#1B1B19]">Store locator</a></li>
                        <li><a href="#" className="hover:text-[#1B1B19]">Terms &amp; policy</a></li>
                        <li><a href="#" className="hover:text-[#1B1B19]">Secure shopping</a></li>
                    </ul>
                </div>

                <div>
                    <p className="font-body text-sm font-medium text-[#1B1B19]">Be first to know</p>
                    <p className="mt-4 font-body text-sm text-[#6E6B64]">
                        Sign up now for early access to new drops and member-only pricing.
                    </p>
                    <form
                        onSubmit={(e) => e.preventDefault()}
                        className="mt-4 flex border-b border-[#D8D4CA] pb-2"
                    >
                        <input
                            type="email"
                            placeholder="Email address"
                            className="w-full bg-transparent font-body text-sm text-[#1B1B19] placeholder-[#A7A49C] outline-none"
                        />
                        <button type="submit" className="font-body text-sm text-[#1B1B19]">
                            &rarr;
                        </button>
                    </form>
                </div>
            </div>

            <div className="mx-auto mt-12 max-w-7xl border-t border-[#D8D4CA] pt-6 text-center font-body text-xs text-[#A7A49C]">
                © 2026 Velvorn. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;