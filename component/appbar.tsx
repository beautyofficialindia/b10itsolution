import Link from "next/link";
import Image from "next/image";

export default function Page() {
    return (
        <nav className="flex flex-row justify-between items-center p-4 fixed inset-x-0 top-0 z-50 mx-auto bg-white/95 px-4 py-2 shadow-[var(--shadow-input)]">
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

            <div className="flex flex-row justify-between gap-5">
                <Link href="/about" className="text-neutral-800 font-medium hover:text-black cursor-pointer">
                    About us
                </Link>
                <Link href="/contact" className="text-neutral-800 font-medium hover:text-black cursor-pointer">
                    Contact us
                </Link>
                <Link href="/services" className="text-neutral-800 font-medium hover:text-black cursor-pointer">
                    Services
                </Link>
            </div>

            <div>
                <button className="px-6 py-2 text-center font-medium transition duration-150 active:scale-[0.98] text-white bg-neutral-800 rounded-xl cursor-pointer">
                    Get in touch
                </button>
            </div>
        </nav>
    );
}