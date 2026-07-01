"use client";
import Appbar from "@/component/appbar";
import Footer from "@/component/footer";
import { Group } from "@/component/Utility/Group";
import { Input } from "@/component/Utility/Input";
import { Label } from "@/component/Utility/Label";
import { ImLocation2 } from "react-icons/im";
import { BsTwitterX, BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { useState } from "react";

export default function Page() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [message, setMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState({ type: "", message: "" });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: "", message: "" });

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, number, message }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Something went wrong.");
            }

            setStatus({ type: "success", message: "Thank you! Your message has been received." });
            // Reset input values
            setName("");
            setEmail("");
            setNumber("");
            setMessage("");

            setTimeout(() => {
                setStatus({ type: "", message: "" });
            }, 5000);

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (err: any) {
            setStatus({ type: "error", message: err.message || "Failed to send message." });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-[#f9f9f9]">
            <Appbar />

            <section className="grow w-full max-w-6xl px-4 sm:px-6 lg:px-8 mx-auto mt-16 sm:mt-24 md:mt-32 mb-16 sm:mb-24 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">

                {/* Left Column: Get in Touch Info */}
                <div className="flex flex-col items-start md:p-4 w-full">
                    {/* Header Section */}
                    <div className="flex flex-col">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-widest text-[#6c63fa] font-prata uppercase">
                            Get in Touch
                        </h1>
                        <p className="max-w-sm sm:max-w-md text-base sm:text-lg text-neutral-600 font-open-sans leading-relaxed mt-3 sm:mt-4">
                            Want to get in touch? We’d love to hear from you. Here’s how you can reach us.
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
                                    mail@b10itsolution.com
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
                            <a href="#" aria-label="Twitter" className="text-neutral-800 hover:text-black hover:-translate-y-1 transition-all duration-200">
                                <BsTwitterX className="w-5 h-5 sm:w-6 sm:h-6" />
                            </a>
                            <a href="#" aria-label="Instagram" className="text-neutral-800 hover:text-pink-600 hover:-translate-y-1 transition-all duration-200">
                                <BsInstagram className="w-5 h-5 sm:w-6 sm:h-6" />
                            </a>
                            <a href="#" aria-label="LinkedIn" className="text-neutral-800 hover:text-blue-600 hover:-translate-y-1 transition-all duration-200">
                                <FaLinkedin className="w-6 h-6 sm:w-7 sm:h-7" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right Column: Have a Query Form */}
                <div className="flex flex-col md:p-4 w-full mt-8 md:mt-0">
                    <div className="mb-6 sm:mb-10">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-widest text-[#6c63fa] font-prata uppercase">
                            Have a Query?
                        </h2>
                    </div>

                    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 sm:gap-6 font-open-sans">
                        <Group className="flex flex-col gap-2">
                            <Label className="text-xs sm:text-sm font-semibold text-gray-700 after:content-['*'] after:ml-0.5 after:text-red-500">
                                Full Name
                            </Label>
                            <Input
                                type="text"
                                name="name"
                                value={name}
                                placeholder="Enter your name"
                                className="w-full px-4 py-3 sm:py-4 bg-white border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#28288d]/50 focus:border-[#28288d] transition-all text-sm sm:text-base"
                                required
                                onChange={(e) => {
                                    setName(e.target.value)
                                }}
                            />
                        </Group>

                        <Group className="flex flex-col gap-2">
                            <Label className="text-xs sm:text-sm font-semibold text-gray-700 after:content-['*'] after:ml-0.5 after:text-red-500">
                                Email
                            </Label>
                            <Input
                                type="email"
                                name="email"
                                value={email}
                                placeholder="Enter your email"
                                className="w-full px-4 py-3 sm:py-4 bg-white border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#28288d]/50 focus:border-[#28288d] transition-all text-sm sm:text-base"
                                required
                                onChange={(e) => {
                                    setEmail(e.target.value)
                                }}
                            />
                        </Group>

                        <Group className="flex flex-col gap-2">
                            <Label className="text-xs sm:text-sm font-semibold text-gray-700 after:content-['*'] after:ml-0.5 after:text-red-500">
                                Contact number
                            </Label>
                            <Input
                                type="text"
                                name="number"
                                value={number}
                                placeholder="Enter your contact number"
                                className="w-full px-4 py-3 sm:py-4 bg-white border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#28288d]/50 focus:border-[#28288d] transition-all text-sm sm:text-base"
                                required
                                onChange={(e) => {
                                    setNumber(e.target.value)
                                }}
                            />
                        </Group>

                        <Group className="flex flex-col gap-2">
                            <Label className="text-xs sm:text-sm font-semibold text-gray-700 after:content-['*'] after:ml-0.5 after:text-red-500">
                                Message
                            </Label>
                            <textarea
                                name="message"
                                placeholder="Write briefly about your work"
                                value={message}
                                required
                                rows={4}
                                className="w-full px-4 py-3 sm:py-4 bg-white border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#28288d]/50 focus:border-[#28288d] transition-all resize-none text-sm sm:text-base"
                                onChange={(e) => {
                                    setMessage(e.target.value)
                                }}
                            />
                        </Group>

                        {/* Inline Status Messages */}
                        {status.message && (
                            <div className={`p-4 rounded-xl text-sm font-medium ${status.type === "success" ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"}`}>
                                {status.message}
                            </div>
                        )}

                        <button
                            type="submit"
                            className="mt-2 sm:mt-4 w-full bg-linear-to-t from-[#28288d] to-[#4040a1] text-white font-semibold text-base sm:text-lg py-3 sm:py-4 px-6 rounded-xl shadow-md hover:shadow-lg hover:from-[#212175] hover:to-[#28288d] transition-all duration-200 active:scale-[0.98] cursor-pointer"
                        >
                            {isSubmitting ? "Processing..." : "Send Message"}
                        </button>
                    </form>
                </div>

            </section>

            <Footer />
        </div>
    )
}