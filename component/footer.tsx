import { BsTwitterX, BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link"; // Added to make Privacy Policy a clickable route

export default function Footer() {
    return (
        <footer className="relative w-full pt-8  px-6 bg-white mb-1.5">
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
                {/* <div className="flex items-center justify-center w-full mb-2">
                    <h1 className="text-4xl md:text-9xl lg:text-12xl font-extrabold leading-none tracking-tight bg-clip-text text-transparent bg-linear-to-b from-[#7b7b81] via-[#505086] to-[#28288d]">
                        B10 IT SOLUTION
                    </h1>
                </div>
                <div className="text-center text-xs font-prata text-neutral-400 order-last md:order-0 mt-4">
                    © {new Date().getFullYear()} B10IT Solution. All rights reserved.
                </div> */}

            </div>
        </footer>
    );
}