import { BsTwitterX, BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link"; // Added to make Privacy Policy a clickable route
import { RxRocket } from "react-icons/rx";
import { ImLocation2 } from "react-icons/im";

export default function Footer() {
    return (
        <footer className="relative w-full overflow-hidden">
            <Image
                src="/testinomial_image.jpeg"
                alt="background_image"
                fill
                priority
                className="absolute inset-0 w-full h-full object-cover mask-radial-from-50% mask-b-from-10% mask-t-from-90% select-none pointer-events-none"
            />
            <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-8">
                <div className="grid md:grid-cols-3 gap-14">

                    {/* Brand */}
                    <div>
                        <Image
                            src="/Logo.png"
                            alt="logo"
                            width={130}
                            height={50}
                        />
                        <p className="mt-5 text-neutral-600  max-w-xs leading-none">
                            We build modern digital products, scalable software,
                            AI-powered solutions and beautiful user experiences.
                        </p>
                        <Link href="/getintouch">
                            <button className=" flex flex-row mt-5 gap-2 px-8 py-3 text-center text-lg font-open-sans font-medium transition duration-150 active:scale-[0.98] hover:bg-[#392cfa] text-white bg-[#6c63fa] rounded-xl cursor-pointer">
                                <RxRocket className="size-5 mt-1" /> Get in touch
                            </button>
                        </Link>

                    </div>

                    {/* Navigation */}
                    <div className="pl-20">

                        <h3 className="font-semibold mb-6 text-neutral-900">
                            Navigation
                        </h3>

                        <ul className="space-y-4 text-neutral-800 ">


                            <li>
                                <Link href="/about">About</Link>
                            </li>

                            <li>
                                <Link href="/services">Services</Link>
                            </li>

                            <li>
                                <Link href="/contact">Contact</Link>
                            </li>

                        </ul>

                    </div>

                    {/* Contact */}
                    <div>

                        <h3 className="font-semibold mb-6">
                            Contact
                        </h3>

                         {/* Address Section */}
                    <div className="flex flex-col gap-8 font-open-sans mt-2">
                        <div className="flex flex-row gap-4 items-start group">
                            <ImLocation2 className="w-6 h-6 mt-1 text-neutral-800 shrink-0" />
                            <div>
                                <h2 className="text-xl font-semibold text-[#6c63fa] font-prata mb-1 tracking-wide">
                                    New Delhi | NCR
                                </h2>
                                <p className="text-neutral-600 leading-relaxed">
                                    M11/09/SF, BPTP Park Elite Floor,<br />
                                    Sector-83, Faridabad 121002
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-row gap-4 items-start group">
                            <ImLocation2 className="w-6 h-6 mt-1 text-neutral-800 shrink-0" />
                            <div>
                                <h2 className="text-xl font-semibold text-[#6c63fa] font-prata mb-1 tracking-wide">
                                    Patna | Bihar
                                </h2>
                                <p className="text-neutral-600 leading-relaxed">
                                    Chankya Nagar, Kumhrar,<br />
                                    Patna 800026
                                </p>
                            </div>
                        </div>
                    </div>

                    </div>

                </div>
            </div>
            <div className="max-w-7xl mx-auto flex flex-col">
                {/* Bottom Footer Section */}
                <div className="border-t border-neutral-300  flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
                    <div className="flex justify-start">
                        <Image
                            src="/Logo.png"
                            alt="B10IT Solution Logo"
                            height={100}
                            width={100}
                            className="object-contain"
                        />
                    </div>
                    {/* Contact & Legal */}
                    <div className="flex flex-row items-center gap-4 text-sm font-prata text-neutral-600">
                        <a href="mailto:info@b10itsolution.com" className="hover:text-neutral-900 transition-colors">
                            info@b10itsolution.com
                        </a>
                        <span className="text-neutral-300">|</span>
                        <Link href="/privacy" className="hover:text-neutral-900 transition-colors">
                            Privacy policy
                        </Link>
                    </div>
                    {/* Socials */}
                    <div className="flex flex-col items-center">

                        <div className="flex flex-row gap-4 items-center pl-2">
                            <h2 className="text-sm font-semibold tracking-tight text-neutral-500 font-prata">Follow us on</h2>
                            <a href="#" aria-label="Twitter" className="text-neutral-600 hover:text-black transition-colors duration-200">
                                <BsTwitterX className="w-5 h-5" />
                            </a>
                            <a href="#" aria-label="Instagram" className="text-neutral-600 hover:text-red-500 transition-colors duration-200">
                                <BsInstagram className="w-5 h-5" />
                            </a>
                            <a href="#" aria-label="LinkedIn" className="text-neutral-600 hover:text-blue-600 transition-colors duration-200">
                                <FaLinkedin className="w-5 h-5" />
                            </a>
                        </div>
                        <div className="text-center text-xs font-prata text-neutral-400 order-last md:order-0 mt-2">
                            © {new Date().getFullYear()} B10IT Solution. All rights reserved.
                        </div>
                    </div>

                </div>

            </div>
        </footer>
    );
}