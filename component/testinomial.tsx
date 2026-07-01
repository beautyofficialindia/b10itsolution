"use client";

import Image from "next/image";
import { Quote } from "lucide-react";


export function Testonomial() {


    const testimonials = [
        {
            quote: "Working with the team was effortless. They delivered exactly what we envisioned and exceeded expectations.",
            name: "Bijay Prakash",
            role: "InnovateX",
            image: "/client1.png" // Replace with actual paths
        },
        {
            quote: "Professional communication, clean code, and an outstanding final product. Highly recommended.",
            name: "Harshit",
            role: "Founder • Designly",
            image: "/client2.png"
        },
        {
            quote: "Fast delivery, excellent support, and a product that helped us launch ahead of schedule.",
            name: "Prit",
            role: "Portfolio development",
            image: "/client3.png"
        }
    ];

    return (
        <div className="w-full">
            {/* Static, confident headline using Prata for that editorial feel */}
            <div className="text-center mb-16 md:mb-24">
                <h2 className="text-4xl md:text-5xl font-medium font-prata tracking-tight text-white mb-6">
                    What our clients say
                </h2>
                <p className="text-lg text-zinc-400 font-light max-w-2xl mx-auto">
                    Trusted by startups and growing businesses to build scalable, beautiful, and high-performing digital products.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        // Premium dark-mode card styling: subtle zinc background, faint border, softer text
                        className="flex flex-col justify-between p-10 rounded-2xl bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm transition-colors hover:bg-zinc-900"
                    >
                        <div>
                            <span className="text-5xl font-serif text-blue-600 opacity-50 leading-none"> <Quote/></span>
                            <p className="mt-4 text-zinc-300 font-light leading-relaxed">
                                {testimonial.quote}
                            </p>
                        </div>

                        <div className="flex items-center gap-4 mt-8 pt-8 border-t border-zinc-800">
                            <div className="relative w-12 h-12 rounded-full overflow-hidden bg-zinc-800">
                                <Image
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    fill
                                    className="object-cover grayscale opacity-80" // Grayscale images add an editorial, cohesive look
                                />
                            </div>
                            <div>
                                <h4 className="text-white font-medium text-sm">{testimonial.name}</h4>
                                <p className="text-zinc-500 text-sm font-light">{testimonial.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}