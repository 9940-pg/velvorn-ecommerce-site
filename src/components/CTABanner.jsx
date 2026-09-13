import React from "react";

function CTABanner() {
    return (
        <section className="bg-[#8B8981] px-6 py-20 text-center md:px-10">
            <h2 className="mx-auto max-w-lg font-display text-3xl font-bold leading-tight text-[#F7F5F1] sm:text-4xl">
                Empower Every Move with Style
            </h2>
            <p className="mx-auto mt-4 max-w-md font-body text-sm leading-relaxed text-[#E7E3DB]">
                Gear that keeps pace with your training, your recovery, and every
                version of you in between.
            </p>
            <button className="mt-7 bg-[#1B1B19] px-6 py-3 font-body text-sm text-[#F7F5F1] transition hover:bg-[#000]">
                Shop the Collection
            </button>
        </section>
    );
}

export default CTABanner;