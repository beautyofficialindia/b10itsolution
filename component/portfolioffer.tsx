import { cn } from "@/lib/utils";
// import { MdComputer } from "react-icons/md";
import {
  MdHealthAndSafety,
  MdComputer,
  MdStorefront,
  MdShoppingCart,
  MdBusiness,
  MdWindow,
} from "react-icons/md";
const industries = [
  { name: "HealthTech", icon: MdHealthAndSafety },
  { name: "EdTech", icon: MdComputer },
  { name: "SaaS", icon: MdWindow },
  { name: "Marketplaces", icon: MdStorefront },
  { name: "E-Commerce", icon: MdShoppingCart },
  { name: "Enterprise", icon: MdBusiness },
];

export default function Portfolio() {
    return (
        <section
            className={cn(
                "relative overflow-hidden rounded-lg bg-gray-50",
                "py-30 px-6",
                "bg-[radial-gradient(#e5e5e5_1px,transparent_1px)]",
                "bg-size-[10px_10px]"
            )}
        >
            {/*fade effect */}
            <div className="absolute inset-0 bg-linear-to-b from-white/70 via-transparent to-white/70 pointer-events-none" />

            <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
                <h1 className="text-3xl font-bold tracking-tight text-neutral-800 md:text-5xl">
                    Technology Tailored for Every Industry
                </h1>

                <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-600 md:text-lg">
                    Every business operates differently, with unique goals, audiences, and
                    technical challenges. We create tailored digital solutions that fit
                    your industry&apos;s needs and help your business grow.
                </p>
            </div>
            <div className="mx-auto max-w-5xl grid  grid-cols-1 gap-5 md:grid-cols-3 py-5">
                {industries.map((industry) => {
                    const Icon = industry.icon;

                    return (
                        <div
                            key={industry.name}
                            className="flex items-center gap-4 rounded-xl border border-neutral-200 bg-white px-6 py-8 transition-all duration-300 hover:shadow-sm hover:shadow-black/10 hover:ring-1 hover:ring-black/10 cursor-pointer"
                        >
                            <Icon className="h-8 w-8 text-neutral-800" />

                            <h3 className="text-2xl font-medium text-neutral-900">
                                {industry.name}
                            </h3>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}