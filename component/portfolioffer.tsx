import { cn } from "@/lib/utils";
import {
    MdHealthAndSafety,
    MdComputer,
    MdStorefront,
    MdShoppingCart,
    MdBusiness,
    MdWindow,
} from "react-icons/md";

const industries = [
    {
        name: "HealthTech",
        icon: MdHealthAndSafety,
        tagline: "Care without friction."
    },
    {
        name: "EdTech",
        icon: MdComputer,
        tagline: "Learning without boundaries.",
    },
    {
        name: "SaaS",
        icon: MdWindow,
        tagline: "Built for compounding growth.",
    },
    {
        name: "Marketplaces",
        icon: MdStorefront,
        tagline: "Connecting ecosystems cleanly."
    },
    {
        name: "E-Commerce",
        icon: MdShoppingCart,
        tagline: "Immersive retail experiences.",
    },
    {
        name: "Enterprise",
        icon: MdBusiness,
        tagline: "Velocity at absolute scale.",
    },
];

export default function Portfolio() {
    return (
        <section
            className={cn(
                "relative overflow-hidden rounded-lg bg-gray-50",
                "py-32 px-6 md:px-12",
                "bg-[radial-gradient(#e5e5e5_1px,transparent_1px)]",
                "bg-size-[10px_10px]"
            )}
        >
            {/* Fade effect */}
            <div className="absolute inset-0 bg-linear-to-b from-white/70 via-transparent to-white/70 pointer-events-none" />

            {/* Brand Story Header */}
            <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center mb-16">
                <h2 className="text-4xl font-medium tracking-tight text-neutral-900 font-prata md:text-5xl lg:text-6xl leading-tight">
                    Shaping the industries that <br className="hidden md:block" />
                    <span className="text-[#6c63fa] italic font-serif">move the world forward.</span>
                </h2>

                <p className="mt-6 max-w-2xl text-lg font-light leading-relaxed text-zinc-600">
                    Software shouldn’t just function—it should feel entirely native to your mission.
                    We immerse ourselves in your market’s specific nuances, dynamics, and constraints to deliver
                    deeply intuitive digital solutions built to endure.
                </p>
            </div>

            {/* Industry Story Cards */}
            <div className="relative z-10 mx-auto max-w-6xl grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 py-4">
                {industries.map((industry) => {
                    const Icon = industry.icon;

                    return (
                        <div
                            key={industry.name}
                            className="group flex flex-col items-start justify-between rounded-2xl border border-neutral-200 bg-white p-8 transition-all duration-300 hover:shadow-lg hover:shadow-neutral-200/50 hover:border-neutral-300 hover:scale-[1.01] cursor-pointer"
                        >
                            <div className="w-full">
                                {/* Icon Wrapper with a subtle background brand accent on hover */}
                                <div className="p-3 bg-neutral-50 rounded-xl inline-block text-neutral-800 transition-colors duration-300 group-hover:bg-[#6c63fa]/10 group-hover:text-[#6c63fa]">
                                    <Icon className="h-6 w-6" />
                                </div>

                                <h3 className="text-2xl font-medium text-neutral-900 mt-6 font-prata">
                                    {industry.name}
                                </h3>

                                {/* Short emotional hook */}
                                <p className="text-xs font-semibold uppercase tracking-wider text-[#6c63fa] mt-1.5 opacity-80">
                                    {industry.tagline}
                                </p>

                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}