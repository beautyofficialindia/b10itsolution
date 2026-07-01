"use client"
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Page() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const navItems = [
        {
            title: 'About us',
            href: "/about"
        },
        {
            title: 'Contact us',
            href: "/getintouch"
        },
        {
            title: 'Services',
            href: "/services"
        }
    ]
    const [hovered, setHovered] = useState<number | null>(null);
    const [scroll, setScrolled] = useState<boolean>(false);
    const router = useRouter();
    const handleNavigation = (path: string) => {
        router.push(path);
        setIsOpen(false);
    };

    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 20) {
            setScrolled(true)
        } else {
            setScrolled(false)
        }
    })

    return (
        <>
            <motion.nav
                animate={scroll ? {
                    width: "95%",
                    y: 10
                } : {
                    width: "100%",
                    y: 0
                }}
                transition={{
                    duration: 0.3,
                    ease: "linear"
                }}
                className="hidden fixed inset-x-0 top-0 z-50 mx-auto max-w-full md:flex items-center justify-between  px-4 py-2 p-2 mt-2 bg-white rounded-md shadow-md">
                <div className="font-bold">
                    <Link href="/" className="block">
                        <Image
                            src="/Logo.png"
                            height={100}
                            width={100}
                            alt="logo"
                            loading="eager"
                            className="w-full h-auto"
                        />
                    </Link>
                </div>

                <motion.div className="flex items-center">
                    {navItems.map((item, idx) => (
                        <Link
                            key={idx}
                            href={item.href}
                            onMouseEnter={() => setHovered(idx)}
                            onMouseLeave={() => setHovered(null)}
                            className="relative px-2 py-1 gap-2 text-neutral-800 hover:text-white text-md">

                            {hovered === idx && (
                                <motion.span
                                    layoutId="hoverBackground"
                                    initial={false}
                                    className="h-full w-full absolute inset-0 rounded-xl bg-[#6c63fa]" />
                            )}
                            <span className="relative z-10 text-lg font-semibold tracking-wide leading-0.5 "> {item.title}</span>
                        </Link>
                    ))}
                </motion.div>

                <div>
                    <Link href="/getintouch">
                        <button className="px-6 py-2 text-center font-medium transition duration-150 active:scale-[0.98] text-white bg-[#6c63fa] rounded-xl cursor-pointer">
                            Get in touch
                        </button>
                    </Link>
                </div>

            </motion.nav>

            {/* --- MOBILE NAVIGATION --- */}
            <div>
                <div className="md:hidden fixed inset-x-0 top-0 z-50 px-4 py-3 bg-white/90 backdrop-blur-md flex items-center justify-between shadow-sm">
                    <Link href="/">
                        <Image src="/Logo.png" height={40} width={100} alt="logo" className="h-8 w-auto" />
                    </Link>
                    <button onClick={() => setIsOpen(!isOpen)} className="text-black p-1">
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="md:hidden fixed inset-x-0 top-0 z-50 mx-auto flex items-center justify-between rounded-xl bg-white/90 backdrop-blur-md px-4 py-3 mt-2 ml-2 mr-2 shadow-sm"
                        >
                            <ul className="flex flex-col space-y-8">
                                {navItems.map((item) => (
                                    <li key={item.title}>
                                        <button
                                            onClick={() => handleNavigation(item.href)}
                                            className="w-full text-left text-3xl font-bold tracking-tight text-neutral-900 border-b border-neutral-100 pb-4"
                                        >
                                            {item.title}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div >
        </>
    );
}