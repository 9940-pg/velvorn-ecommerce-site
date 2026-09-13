import React from "react";
import { Plus } from "lucide-react";
import zenTank from "../assets/zen-tank.jpg";
import coreTop from "../assets/core-top.jpg";
import zenTop from "../assets/zen-top.jpg";
import hoodie from "../assets/hoodie.jpg";

const PRODUCTS_LATEST = [
    { name: "Zen Tank", price: 40, img: zenTank },
    { name: "Core Top", price: 35, img: coreTop },
    { name: "Zen Top", price: 50, img: zenTop },
    { name: "Hoodie", price: 45, img: hoodie },
];

function SectionHeader({ title, description, cta }) {
    return (
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 pb-10 pt-16 md:flex-row md:items-end md:justify-between md:px-10">
            <h2 className="max-w-md whitespace-pre-line font-display text-3xl font-bold leading-tight text-[#1B1B19] sm:text-4xl">
                {title}
            </h2>
            <div className="max-w-xs md:text-right">
                <p className="font-body text-sm leading-relaxed text-[#6E6B64]">{description}</p>
                {cta && (
                    <button className="mt-4 bg-[#1B1B19] px-5 py-2.5 font-body text-sm text-[#F7F5F1] transition hover:bg-[#33322D]">
                        {cta}
                    </button>
                )}
            </div>
        </div>
    );
}

function LatestProductCard({ product }) {
    return (
        <div className="group">
            <div className="aspect-[3/4] w-full overflow-hidden bg-[#E7E3DB]">
                <img
                    src={product.img}
                    alt={product.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                />
            </div>
            <div className="mt-3 flex items-center justify-between">
                <div>
                    <p className="font-body text-sm text-[#1B1B19]">{product.name}</p>
                    <p className="mt-1 font-body text-sm text-[#6E6B64]">${product.price.toFixed(2)}</p>
                </div>
                <button
                    aria-label={`Add ${product.name} to bag`}
                    className="flex h-8 w-8 shrink-0 items-center justify-center border border-[#1B1B19] text-[#1B1B19] transition hover:bg-[#1B1B19] hover:text-[#F7F5F1]"
                >
                    <Plus size={15} />
                </button>
            </div>
        </div>
    );
}

function LatestDrops() {
    return (
        <section className="bg-[#F7F5F1]">
            <SectionHeader
                title="Latest Drops"
                description="Elevate your look with our newest arrivals. Whether you're hitting the gym, boosting your run, or grabbing coffee."
                cta="Browse the Latest"
            />
            <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 pb-20 sm:grid-cols-4 md:gap-8 md:px-10">
                {PRODUCTS_LATEST.map((p) => (
                    <LatestProductCard key={p.name} product={p} />
                ))}
            </div>
        </section>
    );
}

export default LatestDrops;