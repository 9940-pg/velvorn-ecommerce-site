import React from "react";
import sportsBra from "../assets/sports-bra.jpg";
import compressionTop from "../assets/compression-top.jpg";
import windBreaker from "../assets/wind-breaker.jpg";

const PRODUCTS_FEATURED = [
    {
        name: "Sports Bra Top",
        price: 30,
        was: 40,
        img: sportsBra,
    },
    {
        name: "Compression Top",
        price: 30,
        was: 45,
        img: compressionTop,
    },
    {
        name: "Wind Breaker",
        price: 32,
        was: 39,
        img: windBreaker,
    },
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

function ProductCard({ product }) {
    return (
        <div className="group">
            <div className="aspect-[3/4] w-full overflow-hidden bg-[#E7E3DB]">
                <img
                    src={product.img}
                    alt={product.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                />
            </div>
            <div className="mt-3 flex items-start justify-between">
                <div>
                    <p className="font-body text-sm text-[#1B1B19]">{product.name}</p>
                    <p className="mt-1 font-body text-sm text-[#1B1B19]">
                        ${product.price.toFixed(2)}
                        {product.was && (
                            <span className="ml-2 text-[#A7A49C] line-through">
                                ${product.was.toFixed(2)}
                            </span>
                        )}
                    </p>
                </div>
            </div>
        </div>
    );
}

function HotStyleSteals() {
    return (
        <section className="bg-[#F7F5F1]">
            <SectionHeader
                title={"Hot Style Steals\nUp to 70% Off Now"}
                description="Score up to 70% off premium activewear designed for performance, built for style."
                cta="Shop Deals"
            />
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 pb-20 sm:grid-cols-3 md:px-10">
                {PRODUCTS_FEATURED.map((p) => (
                    <ProductCard key={p.name} product={p} />
                ))}
            </div>
        </section>
    );
}

export default HotStyleSteals;