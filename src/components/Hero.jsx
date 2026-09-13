import React from "react";
import heroBanner from "../assets/hero-banner6.jpg";

function Hero() {
    return (
        <section className="relative h-[60vh] min-h-[420px] w-full overflow-hidden bg-[#8A1F1F] sm:h-[75vh] sm:min-h-[480px] md:h-[90vh] md:min-h-[560px]">
            {/* Full-bleed background image, no overlay */}
            <img
                src={heroBanner}
                alt="Model wearing VELVORN performance wear"
                className="absolute inset-0 h-full w-full object-cover object-top"
            />

            {/* Text content overlaid on top */}
            <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 md:px-10">
                <div>
                    <p className="font-body text-sm text-[#F7F5F1] drop-shadow-md">
                        Power Meets Purpose
                    </p>
                    <h1 className="mt-3 font-display text-[16vw] font-extrabold leading-[0.9] tracking-tight text-white drop-shadow-lg sm:text-6xl md:text-7xl">
                        VELVORN
                    </h1>
                    <p className="mt-5 max-w-xs font-body text-sm leading-relaxed text-[#F7F5F1]/90 drop-shadow-md">
                        Built for those who train with intent. Our gear is cut to move
                        with you through the last rep, the early run, and everything
                        after.
                    </p>
                    <button className="mt-7 bg-[#1B1B19] px-6 py-3 font-body text-sm text-[#F7F5F1] shadow-lg transition hover:bg-[#33322D]">
                        Explore the Collection
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Hero;