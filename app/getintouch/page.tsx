import Appbar from "@/component/appbar";
import Footer from "@/component/footer";
import { Group } from "@/component/Utility/Group";
import { Input } from "@/component/Utility/Input";
import { Label } from "@/component/Utility/Label";
import { ImLocation2 } from "react-icons/im";
import { BsTwitterX, BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";

export default function Page() {
    return (
        <div className="min-h-screen flex flex-col bg-[#f9f9f9]">
            <Appbar />
            
            <section className="grow w-full max-w-6xl px-6 mx-auto mt-20 md:mt-32 mb-20 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">
                
                {/* Left Column: Get in Touch */}
                <div className="flex flex-col items-start gap-8 md:p-4">
                    {/* Header Section */}
                    <div className="flex flex-col gap-4">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-widest text-[#6c63fa] font-prata uppercase">
                            Get in Touch
                        </h1>
                        <p className="max-w-sm text-lg text-neutral-600 font-open-sans leading-relaxed">
                            Want to get in touch? We’d love to hear from you. Here’s how you can reach us.
                        </p>
                    </div>

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

                    {/* Social Media Section */}
                    <div className="flex flex-row gap-5 items-center mt-6">
                        <h2 className="text-2xl text-neutral-800 font-courgette tracking-wide pr-2">
                            Follow us on
                        </h2>
                        <div className="flex flex-row gap-6 items-center">
                            <a href="#" aria-label="Twitter" className="text-neutral-800 hover:text-black hover:-translate-y-1 transition-all duration-200">
                                <BsTwitterX className="w-5 h-5" />
                            </a>
                            <a href="#" aria-label="Instagram" className="text-neutral-800 hover:text-pink-600 hover:-translate-y-1 transition-all duration-200">
                                <BsInstagram className="w-5 h-5" />
                            </a>
                            <a href="#" aria-label="LinkedIn" className="text-neutral-800 hover:text-blue-600 hover:-translate-y-1 transition-all duration-200">
                                <FaLinkedin className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right Column: Have a Query Form */}
                <div className="flex flex-col md:p-4">
                    <div className="mb-10">
                        <h2 className="text-4xl md:text-5xl font-bold tracking-widest text-[#6c63fa] font-prata uppercase">
                            Have a Query?
                        </h2>
                    </div>
                    
                    <form className="grid grid-cols-1 gap-6 font-open-sans">
                        <Group className="flex flex-col gap-2">
                            <Label className="text-sm font-semibold text-gray-700 after:content-['*'] after:ml-0.5 after:text-red-500">
                                Full Name
                            </Label>
                            <Input
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#28288d]/50 focus:border-[#28288d] transition-all"
                                required
                            />
                        </Group>

                        <Group className="flex flex-col gap-2">
                            <Label className="text-sm font-semibold text-gray-700 after:content-['*'] after:ml-0.5 after:text-red-500">
                                Email
                            </Label>
                            <Input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#28288d]/50 focus:border-[#28288d] transition-all"
                                required
                            />
                        </Group>

                        <Group className="flex flex-col gap-2">
                            <Label className="text-sm font-semibold text-gray-700 after:content-['*'] after:ml-0.5 after:text-red-500">
                                Contact number
                            </Label>
                            <Input
                                type="text"
                                name="number"
                                placeholder="Enter your contact number"
                                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#28288d]/50 focus:border-[#28288d] transition-all"
                                required
                            />
                        </Group>

                        <Group className="flex flex-col gap-2">
                            <Label className="text-sm font-semibold text-gray-700 after:content-['*'] after:ml-0.5 after:text-red-500">
                                Message
                            </Label>
                            <textarea
                                name="message"
                                placeholder="Write briefly about your work"
                                required
                                rows={4}
                                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#28288d]/50 focus:border-[#28288d] transition-all resize-none"
                            />
                        </Group>

                        <button
                            type="submit"
                            className="mt-4 w-full bg-linear-to-t from-[#28288d] to-[#4040a1] text-white font-semibold text-lg py-4 px-6 rounded-xl shadow-md hover:shadow-lg hover:from-[#212175] hover:to-[#28288d] transition-all duration-200 active:scale-[0.98] cursor-pointer"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

            </section>
            
            <Footer />
        </div>
    )
}