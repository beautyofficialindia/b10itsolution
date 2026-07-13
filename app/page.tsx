import AnimatedProgrammingSVG from "@/component/AnimatedProgrammingSVG";
import { RxRocket } from "react-icons/rx";
import Appbar from "@/component/appbar";
import FAQSection from "@/component/faq";
import Footer from "@/component/footer";
import Portfolio from "@/component/portfolioffer";
import Services from "@/component/services";
import { Testonomial } from "@/component/testinomial";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Appbar />
      <Image
        src="/background.png"
        alt="background_image"
        fill
        priority
        sizes="(max-width: 768px) 100vw, 100vw" 
        className="absolute inset-0 w-full h-full object-cover mask-radial-from-50% mask-b-from-10% mask-t-from-90% select-none pointer-events-none"
      />

      <main className="relative w-full max-w-7xl px-6 mx-auto mt-16 md:mt-35">

        <div className="flex flex-col gap-8 md:gap-10 px-0 sm:px-4 md:px-8 lg:grid lg:grid-cols-2 lg:gap-20">
          <div className="relative z-10 flex flex-col items-center md:items-start lg:-mr-12">

            <h1 className="max-w-3xl text-5xl sm:text-6xl md:text-7xl font-medium text-center md:text-left text-neutral-900 font-prata leading-tight md:leading-none selection:bg-amber-200 selection:text-amber-900">
              Build digital products that <span className="text-[#6c63fa] italic font-serif">scale.</span>
            </h1>

            <p className="max-w-xl mt-6 md:mt-8 text-base sm:text-lg md:text-xl text-zinc-500 text-center md:text-left font-light leading-relaxed selection:bg-amber-200 selection:text-amber-900">
              We transform complex business problems into fast, reliable, and beautifully designed software across web, mobile, and cloud.
            </p>

            <div className="flex flex-col sm:flex-row w-full sm:w-auto justify-center md:justify-start gap-4 md:gap-6 mt-8 md:mt-10">
              <Link href="/getintouch" className="w-full sm:w-auto">
                <button className="group flex w-full sm:w-auto items-center justify-center gap-3 px-8 py-4 text-base md:text-sm font-medium tracking-wide text-white bg-[#665cf3] rounded-xl transition-all duration-300 hover:bg-[#1201ff] hover:scale-[1.02] active:scale-[0.98]">
                  <RxRocket className="size-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" /> Start Your Project
                </button>
              </Link>
              <Link href="/about" className="w-full sm:w-auto">
                <button className="flex w-full sm:w-auto items-center justify-center px-8 py-4 text-base md:text-sm font-medium tracking-wide text-zinc-950 bg-transparent border border-zinc-200 rounded-xl transition-all duration-300 hover:border-zinc-950 hover:bg-zinc-50 active:scale-[0.98]">
                  Explore Our Work
                </button>
              </Link>
            </div>
          </div>

          <div className="hidden relative md:flex md:justify-center mt-20 lg:justify-center">
            <div className="w-full ml-5 max-w-162.5 scale-100 lg:scale-110">
              <AnimatedProgrammingSVG />
            </div>
          </div>
        </div>
      </main>

      <section className="relative min-h-screen w-full overflow-hidden [--pattern:var(--color-neutral-100)] -mt-10 md:-mt-25 border-y border-(--pattern)">
        <Portfolio />
      </section>

      <section className="relative z-10 w-full bg-white py-16 md:py-32">
        <div className="mx-auto flex max-w-7xl flex-col items-center px-6">
          <div className="mb-12 md:mb-16 max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-800 sm:text-4xl md:text-5xl">
              Everything required to succeed online
            </h2>
            <p className="mx-auto mt-4 md:mt-6 max-w-2xl text-base md:text-lg font-light leading-relaxed text-zinc-500">
              End-to-end design and development services tailored to design,
              build, launch, and scale your digital products with precision.
            </p>
          </div>
          <div className="w-full">
            <Services />
          </div>
        </div>
      </section>

      <section className="relative z-10 w-full py-16 md:py-32 bg-zinc-950 text-white selection:bg-blue-500/30 selection:text-white">
        <div className="max-w-7xl mx-auto px-6">
          <Testonomial />
        </div>
      </section>

      <section className="relative z-10 w-full py-16 bg-white">
          <FAQSection />
      </section>

      <footer className="relative z-10 w-full bg-zinc-50">
        <Footer />
      </footer>
    </>
  );
}