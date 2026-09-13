import React from "react";
import collectionImage from "../assets/collection-banner3.jpg";

function CollectionBanner() {
    return (
        <section className="relative h-[70vh] min-h-[480px] w-full overflow-hidden bg-[#8B8981]">
            {/* Full-bleed background image */}
            <img
                src={collectionImage}
                alt="Two athletes wearing VELVORN sportswear"
                className="absolute inset-0 h-full w-full object-cover object-top"
            />

            {/* Text content overlaid on top */}
            <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center justify-end px-6 md:px-14">
                <div className="max-w-sm text-right">
                    <h2 className="font-display text-2xl font-bold tracking-tight text-[#F7F5F1] drop-shadow-lg sm:text-3xl">
                        SPORTSWEAR COLLECTION
                    </h2>
                    <p className="mt-4 font-body text-sm leading-relaxed text-[#F7F5F1]/90 drop-shadow-md">
                        Layers built from breathable, four-way stretch fabric designed
                        to hold their shape from warm-up to cool-down.
                    </p>
                    <button className="mt-6 bg-[#1B1B19] px-6 py-3 font-body text-sm text-[#F7F5F1] shadow-lg transition hover:bg-[#000]">
                        Explore the Collection
                    </button>
                </div>
            </div>
        </section>
    );
}

export default CollectionBanner;