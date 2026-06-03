"use client"
import { cn } from "@/lib/utils";
import { useState } from "react";
import IsometricBox from "./isometric-box";

export default function Isometric() {
    const features = [
        {
            id: 1, 
            title: "Strategy & Discovery",
            description: "We define your requirements and map out the technical roadmap for success",
            variant: "left" as const,
        },
        {
            id: 2, 
            title: "Agile Development",
            description: "Our team builds your solution with clean code and regular progress updates",
            variant: "top" as const,
        },
        {
            id: 3, 
            title: "Deployment & Support",
            description: "We launch your product and provide ongoing maintenance to ensure stability",
            variant: "right" as const,
        }
    ];

    const [active, setActive] = useState<number | null>(null);

    const isActive = (id: number) => active === id;

    return (
        <section className="w-full">
            <div className="mx-auto w-full max-w-5xl px-4 py-2">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature) => {
                        return (
                            <div
                                onMouseEnter={() => setActive(feature.id)}
                                onMouseLeave={() => setActive(null)}
                                key={feature.id}
                                className={cn("p-8 bg-white rounded-2xl transition-all duration-150", isActive(feature.id) &&
                                    "shadow-sm shadow-black/10 ring-1 ring-black/10")}
                            >
                                <div className="h-40 flex flex-col">
                                    <IsometricBox
                                        isActive={isActive(feature.id)}
                                        variant={feature.variant} />
                                </div>
                                <div className="mt-12">
                                    <h2 className="font-medium text-center text-lg text-neutral-700 selection:bg-amber-200 selection:text-amber-900">{feature.title}</h2>
                                    <h2 className="font-medium text-center text-sm text-neutral-500 max-w-lg tracking-tight selection:bg-amber-200 selection:text-amber-900">{feature.description}</h2>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}