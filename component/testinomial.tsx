"use client";

import MarqueeContainer from "./marquee";
import { TypewriterEffectSmooth } from "./typewriter-effect";

export function Testonomial() {
    const words = [
        { text: "What " },
        { text: "our" },
        {
            text: "client's ",
            className: "text-[#6c63fa]",
        },
        {
            text: "say",
        },
    ];

    const reviews = [
        {
            id: 1,
            clientImage: "/dummy.jpg",
            title: "Amazing Service",
            description: "CEO at InnovateX",
        },
        {
            id: 2, // Unique ID
            clientImage: "/dummy.jpg",
            title: "Great Quality",
            description: "Manager at Designly",
        },
        {
            id: 3, // Unique ID
            clientImage: "/dummy.jpg",
            title: "Highly Recommend",
            description: "Founder of StartupHub",
        },
        {
            id: 4, // Unique ID
            clientImage: "/dummy.jpg",
            title: "Excellent Support",
            description: "CTO at WebFlow",
        },
        {
            id: 5, // Unique ID
            clientImage: "/dummy.jpg",
            title: "Excellent Support",
            description: "CTO at WebFlow",
        },
        {
            id: 6, // Unique ID
            clientImage: "/dummy.jpg",
            title: "Excellent Support",
            description: "CTO at WebFlow",
        },
        {
            id: 7, // Unique ID
            clientImage: "/dummy.jpg",
            title: "Excellent Support",
            description: "CTO at WebFlow",
        },
        {
            id: 8, // Unique ID
            clientImage: "/dummy.jpg",
            title: "Excellent Support",
            description: "CTO at WebFlow",
        },
        {
            id: 9, // Unique ID
            clientImage: "/dummy.jpg",
            title: "Excellent Support",
            description: "CTO at WebFlow",
        },
    ];

    return (
        <div className="flex flex-col items-center justify-center bg-blue-100 rounded-lg ">
            <div className="hidden md:block text-center">
                <TypewriterEffectSmooth words={words}
                    cursorClassName="h-12 bg-[#6c63fa]" />
            </div>

            <h1 className="md:hidden">Whar our client&apos;s say</h1>
            <p className="mx-auto max-w-lg text-center text-lg text-neutral-600 mb-5">Real feedback from the teams we&apos;ve helped scale.</p>

            <div className="grid grid-cols-3 gap-4 overflow-hidden mb-5 p-2 mask-b-from-15%">
                {reviews.map((item) => (

                    <MarqueeContainer
                        key={item.id}
                        clientImage={item.clientImage}
                        title={item.title}
                        description={item.description}
                    />

                ))}
            </div>

        </div>
    );
}