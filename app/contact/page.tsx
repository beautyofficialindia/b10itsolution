"use client";
import Appbar from "@/component/appbar";
import Footer from "@/component/footer";
import { ImLocation2 } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Page() {

    return (
        <div className="min-h-screen flex flex-col bg-[#f9f9f9]">
            <Appbar />

            <section className="grow w-full max-w-6xl px-4 sm:px-6 lg:px-8 mx-auto mt-16 sm:mt-24 md:mt-32 mb-16 sm:mb-24 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">

                {/* Left Column: Get in Touch Info */}
                <div className="flex flex-col items-start md:p-4 w-full mt-5">
                    {/* Header Section */}
                    <div className="flex flex-col">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-widest text-[#6c63fa] font-prata uppercase">
                            Contact us
                        </h1>
                        <p className="max-w-sm sm:max-w-md text-base sm:text-lg text-neutral-600 font-open-sans leading-relaxed mt-3 sm:mt-4">
                            Whether you have a project in mind, need technical assistance, or want to explore a partnership, our team is here to help you find the right solution.
                        </p>
                    </div>

                    {/* Address Section */}
                    <div className="flex flex-col gap-6 sm:gap-8 py-6 sm:py-8 font-open-sans w-full">
                        <div className="flex flex-row gap-4 items-start group">
                            <ImLocation2 className="w-6 h-6 sm:w-7 sm:h-7 mt-1 text-neutral-800 shrink-0" />
                            <div>
                                <h2 className="text-lg sm:text-xl font-semibold text-[#6c63fa] font-prata mb-1 tracking-wide">
                                    New Delhi | NCR
                                </h2>
                                <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                                    M11/09/SF, BPTP Park Elite Floor,<br />
                                    Sector-83, Faridabad 121002
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-row gap-4 items-start group">
                            <ImLocation2 className="w-6 h-6 sm:w-7 sm:h-7 mt-1 text-neutral-800 shrink-0" />
                            <div>
                                <h2 className="text-lg sm:text-xl font-semibold text-[#6c63fa] font-prata mb-1 tracking-wide">
                                    Patna | Bihar
                                </h2>
                                <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                                    Chankya Nagar, Kumhrar,<br />
                                    Patna 800026
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-row gap-4 items-start group">
                            <MdEmail className="w-6 h-6 sm:w-7 sm:h-7 mt-1 text-neutral-800 shrink-0" />
                            <div>
                                <h2 className="text-lg sm:text-xl font-semibold text-[#6c63fa] font-prata mb-1 tracking-wide break-all">
                                    beautyofficialindia@gmail.com
                                </h2>
                            </div>
                        </div>
                    </div>

                    {/* Social Media Section */}
                    <div className="flex flex-wrap gap-4 sm:gap-5 items-center sm:mt-4">
                        <h2 className="text-xl sm:text-2xl text-neutral-800 font-courgette tracking-wide pr-2">
                            Follow us on
                        </h2>
                        <div className="flex flex-row gap-5 sm:gap-6 items-center">
                            {/* <a href="#" aria-label="Twitter" className="text-neutral-800 hover:text-black hover:-translate-y-1 transition-all duration-200">
                                <BsTwitterX className="w-5 h-5 sm:w-6 sm:h-6" />
                            </a> */}
                            <a href="#" aria-label="Instagram" className="text-neutral-800 hover:text-pink-600 hover:-translate-y-1 transition-all duration-200">
                                <BsInstagram className="w-5 h-5 sm:w-6 sm:h-6" />
                            </a>
                            <a href="https://www.linkedin.com/company/b10-it-solution/" aria-label="LinkedIn" className="text-neutral-800 hover:text-blue-600 hover:-translate-y-1 transition-all duration-200">
                                <FaLinkedin className="w-6 h-6 sm:w-7 sm:h-7" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right Column: Have a Query Form */}
                <div className="w-full mt-8 border-2 border-neutral-200 rounded-xl overflow-hidden">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d14509.10650627376!2d77.35886910718628!3d28.395255356209482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sM11%2F09%2FSF%2C%20BPTP%20Park%20Elite%20Floor%2C%20Sector-83%2C%20Faridabad%20121002!5e0!3m2!1sen!2sin!4v1782973158676!5m2!1sen!2sin"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        loading="lazy"
                        referrerPolicy="strict-origin-when-cross-origin"
                    ></iframe>
                </div>
            </section>

            <Footer />
        </div>
    )
}