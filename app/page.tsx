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
        className="absolute inset-0 w-full h-full object-cover mask-radial-from-50% mask-b-from-10% mask-t-from-90% select-none pointer-events-none"
      />

      <main className="relative w-full max-w-7xl px-6 mx-auto mt-20 md:mt-40">

        <div className="flex flex-col gap-10 px-4 md:px-8 lg:grid lg:grid-cols-2 lg:gap-20">
          <div className="relative z-10 flex flex-col items-center md:items-start lg:-mr-12">
            <h1 className="max-w-3xl text-6xl font-medium text-center md:text-left text-neutral-900 font-prata md:text-7xl leading-tighter selection:bg-amber-200 selection:text-amber-900">
              We grow <span className="text-[#6c63fa] italic font-serif">digital ecosystems</span> from the roots up.
            </h1>
            <p className="max-w-xl mt-8 text-lg md:text-xl text-zinc-500 font-light leading-relaxed selection:bg-amber-200 selection:text-amber-900">
              Transforming complex business challenges into seamless, high-performance digital experiences across web, mobile, and cloud.
            </p>
            <div className="flex flex-row justify-center md:justify-start gap-6 mt-10">
              <Link href="/getintouch">
                <button className="group flex items-center justify-center gap-3 px-8 py-4 text-sm font-medium tracking-wide text-white bg-[#665cf3] rounded-xl transition-all duration-300 hover:bg-[#1201ff]  hover:scale-[1.02] active:scale-[0.98]">
                  <RxRocket className="size-5 mt-1" /> Get in touch
                </button>
              </Link>
              <Link href="/about">
                <button className="flex items-center justify-center px-8 py-4 text-sm font-medium tracking-wide text-zinc-950 bg-transparent border border-zinc-200 rounded-xl transition-all duration-300 hover:border-zinc-950 hover:bg-zinc-50 active:scale-[0.98]">
                  View our portfolio
                </button>
              </Link>
            </div>
          </div>

          {/* FIX: Added lg:mt-0 so the top margin only applies on mobile/tablet */}
          <div className=" hidden relative md:flex md:justify-center mt-20 lg:justify-center">
            <div className="w-full ml-5 max-w-162.5 scale-100 lg:scale-110">
              <AnimatedProgrammingSVG />
            </div>
          </div>
        </div>
      </main >

      <section className="relative h-screen w-full overflow-hidden [--pattern:var(--color-neutral-100)]  -mt-25 border-y border-(--pattern) ">
        <Portfolio />
      </section>
      <section className="relative z-10 w-full py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16 md:mb-24">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-zinc-950">
              Everything required to <br className="hidden md:block" />
              <span className="text-zinc-500">succeed online.</span>
            </h2>
            <p className="mt-6 text-lg text-zinc-500 font-light leading-relaxed max-w-xl">
              End-to-end design and development services tailored to build, launch, and scale your digital products with precision.
            </p>
          </div>
          <Services />
        </div>
      </section>

      <section className="relative z-10 w-full py-24 md:py-32 bg-zinc-950 text-white selection:bg-blue-500/30 selection:text-white">
        <div className="max-w-7xl mx-auto px-6">
          <Testonomial />
        </div>
      </section>
      <section className="relative z-10 w-full py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FAQSection />
        </div>
      </section>

      <footer className="relative z-10 w-full bg-zinc-50">
        <Footer />
      </footer>
    </>
  );
}