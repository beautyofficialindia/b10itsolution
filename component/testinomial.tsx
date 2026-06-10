"use client";

import Image from "next/image";
import { Quote } from "lucide-react";
import { TypewriterEffectSmooth } from "./typewriter-effect";

export function Testonomial() {
    const words = [
        { text: "What" },
        { text: "our" },
        {
            text: "client's",
            className: "text-[#6c63fa]",
        },
        { text: "say" },
    ];

    const reviews = [
        {
            id: 1,
            clientImage: "/dummy.jpg",
            name: "John Carter",
            role: "CEO • InnovateX",
            review:
                "Working with the team was effortless. They delivered exactly what we envisioned and exceeded expectations.",
        },
        {
            id: 2,
            clientImage: "/dummy.jpg",
            name: "Sarah Wilson",
            role: "Founder • Designly",
            review:
                "Professional communication, clean code, and an outstanding final product. Highly recommended.",
        },
        {
            id: 3,
            clientImage: "/dummy.jpg",
            name: "Michael Lee",
            role: "CTO • StartupHub",
            review:
                "Fast delivery, excellent support, and a product that helped us launch ahead of schedule.",
        },
    ];

    return (
        <section className="relative overflow-hidden rounded-2xl bg-white py-24">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#ececec_1px,transparent_1px)] bg-size-[14px_14px] opacity-70" />

            <div className="relative mx-auto max-w-7xl px-6">
                <div className="text-center">
                    <div className="hidden justify-center md:flex">
                        <TypewriterEffectSmooth
                            words={words}
                            cursorClassName="bg-[#6c63fa]"
                        />
                    </div>

                    <h2 className="block text-4xl font-bold text-neutral-900 md:hidden">
                        What our <span className="text-[#6c63fa]">client&apos;s</span> say
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-600">
                        Trusted by startups and growing businesses to build scalable,
                        beautiful, and high-performing digital products.
                    </p>
                </div>

                <div className="mt-16 grid gap-6 md:grid-cols-3">
                    {reviews.map((review) => (
                        <div
                            key={review.id}
                            className="group rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#6c63fa]/30 hover:shadow-xl"
                        >
                            <Quote className="mb-6 h-8 w-8 text-[#6c63fa]" />

                            <p className="leading-7 text-neutral-600">
                                &quot;{review.review}&quot;
                            </p>

                            <div className="mt-8 flex items-center gap-4">
                                <Image
                                    src={review.clientImage}
                                    alt={review.name}
                                    width={56}
                                    height={56}
                                    className="rounded-full border border-neutral-200 object-cover"
                                />

                                <div>
                                    <h3 className="font-semibold text-neutral-900">
                                        {review.name}
                                    </h3>

                                    <p className="text-sm text-neutral-500">
                                        {review.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}