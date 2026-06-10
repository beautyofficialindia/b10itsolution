"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
    {
        question: "How long does it take to complete a project?",
        answer:
            "Project timelines depend on the scope and complexity. Most websites are completed within 2–6 weeks, while larger web applications typically take 6–12 weeks.",
    },
    {
        question: "Do you provide custom web development?",
        answer:
            "Yes. Every solution is built from scratch to match your business requirements, ensuring scalability, performance, and a great user experience.",
    },
    {
        question: "Can you redesign my existing website?",
        answer:
            "Absolutely. We can modernize your current website with a fresh UI, improved performance, better SEO, and enhanced functionality.",
    },
    {
        question: "Do you offer ongoing maintenance and support?",
        answer:
            "Yes. We provide regular updates, bug fixes, security patches, performance monitoring, and feature enhancements after launch.",
    },
    {
        question: "Which technologies do you use?",
        answer:
            "We specialize in Next.js, React, Node.js, TypeScript, Tailwind CSS, Prisma, PostgreSQL, and modern cloud deployment platforms.",
    },
];

export default function FAQSection() {
    const [active, setActive] = useState<number | null>(0);

    return (
        <section className="relative overflow-hidden rounded-2xl bg-white py-24">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#ececec_1px,transparent_1px)] bg-size-[14px_14px] opacity-70" />

            <div className="relative mx-auto max-w-4xl px-6">
                <div className="text-center">

                    <h2 className="text-4xl font-bold">
                        Frequently <span className="text-[#6c63fa]">Asked</span> Questions
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-600">
                        Everything you need to know about working with us.
                    </p>
                </div>

                <div className="mt-14 space-y-4">
                    {faqs.map((faq, index) => {
                        const open = active === index;

                        return (
                            <div
                                key={index}
                                className="rounded-2xl border border-neutral-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md"
                            >
                                <button
                                    onClick={() => setActive(open ? null : index)}
                                    className="flex w-full items-center justify-between p-6 text-left"
                                >
                                    <h3 className="text-lg font-semibold text-neutral-800">
                                        {faq.question}
                                    </h3>

                                    <ChevronDown
                                        className={cn(
                                            "h-5 w-5 text-[#6c63fa] transition-transform duration-300",
                                            open && "rotate-180"
                                        )}
                                    />
                                </button>

                                <div
                                    className={cn(
                                        "grid transition-all duration-300 ease-in-out",
                                        open
                                            ? "grid-rows-[1fr]"
                                            : "grid-rows-[0fr]"
                                    )}
                                >
                                    <div className="overflow-hidden">
                                        <p className="px-6 pb-6 leading-7 text-neutral-600">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}