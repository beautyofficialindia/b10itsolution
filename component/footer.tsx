import { BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";
import { RxArrowRight } from "react-icons/rx";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="relative w-full bg-zinc-950 text-white pt-10 pb-8 overflow-hidden selection:bg-zinc-200 border-t border-zinc-200">
            {/* <Image
                src="/footerImage.jpeg"
                alt="footer_image"
                fill
                priority
                className="absolute inset-0 w-full h-full object-cover mask-radial-from-50% mask-b-from-10% mask-t-from-90% select-none pointer-events-none"
            /> */}
            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* TOP SECTION: Main Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-12">
                    <div className="md:col-span-5 flex flex-col items-start">
                        <Link href="/" className="inline-block hover:opacity-80 transition-opacity">
                            <Image
                                src="/LogoFooter.png"
                                alt="B10IT Solution Logo"
                                width={140}
                                height={54}
                                className="object-contain"
                            />
                        </Link>
                        <p className="mt-8 text-lg text-zinc-200 font-light leading-relaxed max-w-sm">
                            We build modern digital products, scalable software, AI-powered solutions, and beautiful user experiences.
                        </p>
                        <Link
                            href="/getintouch"
                            className="group flex items-center justify-center gap-3 mt-10 px-8 py-4 text-sm font-medium tracking-wide text-white bg-linear-to-t from-[#28288d] to-[#4040a1] rounded-full shadow-sm shadow-blue-600/20 transition-all duration-300 hover:bg-blue-700 hover:shadow-md hover:shadow-blue-600/30 hover:scale-[1.02] active:scale-[0.98]"
                        >
                            Start a project
                            <RxArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>

                    {/* Navigation */}
                    <div className="md:col-span-3 md:pl-12">
                        <h3 className="text-lg font-semibold text-zinc-50 uppercase tracking-widest mb-8">
                            Navigation
                        </h3>
                        <ul className="space-y-4 text-zinc-200 font-light">
                            <li>
                                <Link href="/about" className="hover:text-zinc-50 transition-colors duration-200">
                                    About us
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="hover:text-zinc-50 transition-colors duration-200">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/getintouch" className="hover:text-zinc-50 transition-colors duration-200">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Locations */}
                    <div className="md:col-span-4">
                        <h3 className="text-lg font-semibold text-zinc-50 uppercase tracking-widest mb-8">
                            Offices
                        </h3>
                        <div className="space-y-8">
                            <div>
                                <h4 className="text-base font-medium text-zinc-100 mb-2">
                                    New Delhi <span className="text-zinc-300 font-light">| NCR</span>
                                </h4>
                                <p className="text-zinc-200 font-light leading-relaxed">
                                    M11/09/SF, BPTP Park Elite Floor,<br />
                                    Sector-83, Faridabad 121002
                                </p>
                            </div>

                            <div>
                                <h4 className="text-base font-medium text-zinc-100 mb-2">
                                    Patna <span className="text-zinc-300 font-light">| Bihar</span>
                                </h4>
                                <p className="text-zinc-200 font-light leading-relaxed">
                                    Chankya Nagar, Kumhrar,<br />
                                    Patna 800026
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

                {/* BOTTOM SECTION: Legal & Socials */}
                <div className="mt-10 pt-8 border-t border-zinc-200 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">

                    <p className="text-sm font-light text-zinc-200 order-3 md:order-1">
                        © {new Date().getFullYear()} B10IT Solution. All rights reserved.
                    </p>

                    <div className="flex items-center gap-6 text-sm font-light text-zinc-200 order-2 md:order-2">
                        <a href="mailto:beautyofficialindia@gmail.com" className="hover:text-zinc-500 transition-colors duration-200">
                            beautyofficialindia@gmail.com
                        </a>
                        <span className="text-zinc-300">|</span>
                        <Link href="/policy" className="hover:text-zinc-500 transition-colors duration-200">
                            Privacy Policy
                        </Link>
                    </div>

                    {/* Socials */}
                    <div className="flex items-center gap-5 text-zinc-200 order-1 md:order-3">
                        {/* <a href="#" aria-label="Twitter / X" className="hover:-translate-y-0.5 transition-all duration-200">
                            <BsTwitterX className="w-4.5 h-4.5" />
                        </a> */}
                        <a href="#" aria-label="Instagram" className="hover:-translate-y-0.5 transition-all duration-200">
                            <BsInstagram className="w-4.5 h-4.5" />
                        </a>
                        <a href="https://www.linkedin.com/company/b10-it-solution/" aria-label="LinkedIn" className="hover:-translate-y-0.5 transition-all duration-200">
                            <FaLinkedin className="w-4.5 h-4.5" />
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    );
}