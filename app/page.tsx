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
import Marquee from "@/component/marquee";
import { Appdesign, Design } from "@/component/floting";


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

      <section className="md:hidden relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#fafafa]">
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-150 h-100 bg-linear-to-r from-[#6c63fa]/15 to-transparent blur-[100px] rounded-full pointer-events-none -z-10" />
        <div className="absolute top-[20%] left-[40%] w-125 h-125 bg-linear-to-bl from-[#ffb6ff]/15 to-transparent blur-[120px] rounded-full pointer-events-none -z-10" />

        <main className="relative z-10 w-full max-w-6xl px-6 mx-auto pt-24 pb-16 md:pt-32 md:pb-24">
          <div className="flex flex-col items-center">
            <div className="mb-10 animate-fade-in-up">
              <div className="inline-flex items-center gap-2.5 px-5 py-2 text-xs font-medium tracking-wide border shadow-sm sm:text-sm rounded-full bg-white/70 backdrop-blur-xl border-white/50 text-zinc-600">
                <span className="flex items-center justify-center text-amber-500">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </span>
                Let&apos;s build something extraordinary
              </div>
            </div>
            <Appdesign />
            <Design />

            <div className="max-w-4xl text-center mt-5">
              <h1 className="text-5xl font-medium tracking-tight leading-[1.05] text-zinc-900 md:text-6xl lg:text-[5rem] font-prata selection:bg-amber-200 selection:text-amber-900">
                Build digital products <br className="hidden md:block" />
                that <span className="text-transparent bg-clip-text bg-linear-to-br from-[#6c63fa] to-[#9b8dff] italic font-serif pr-2">scale.</span>
              </h1>
            </div>
            <div className="max-w-2xl mt-8 text-center">
              <p className="text-base font-light leading-relaxed text-zinc-500 sm:text-lg md:text-xl selection:bg-amber-200 selection:text-amber-900">
                We transform complex business problems into fast, reliable, and beautifully designed software across web, mobile, and cloud.
              </p>
            </div>

            <div className="mt-10 w-full max-w-3xl mx-auto overflow-hidden mask-horizontal-fades">
              <Marquee />
            </div>

            <div className="flex flex-col w-full gap-4 mt-12 sm:flex-row sm:w-auto sm:gap-5">
              <Link href="/getintouch" className="w-full sm:w-auto">
                <button className="group flex w-full sm:w-auto items-center justify-center gap-2.5 px-9 py-4 text-[15px] font-semibold tracking-wide text-white bg-[#665cf3] rounded-2xl shadow-[0_8px_20px_-6px_rgba(102,92,243,0.5)] transition-all duration-300 ease-out hover:bg-[#5449ed] hover:-translate-y-0.5 hover:shadow-[0_12px_25px_-6px_rgba(102,92,243,0.6)] active:scale-[0.98] active:translate-y-0">
                  <RxRocket className="text-lg transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  Start Your Project
                </button>
              </Link>
              <Link href="/about" className="w-full sm:w-auto">
                <button className="flex w-full sm:w-auto items-center justify-center px-9 py-4 text-[15px] font-semibold tracking-wide bg-white/80 backdrop-blur-sm border-2 border-zinc-100 text-zinc-800 rounded-2xl shadow-sm transition-all duration-300 ease-out hover:border-zinc-200 hover:bg-white hover:-translate-y-0.5 hover:shadow-md active:scale-[0.98] active:translate-y-0">
                  Explore Our Work
                </button>
              </Link>
            </div>

          </div>
        </main>
      </section>

      <main className="hidden md:block relative w-full max-w-7xl px-6 mx-auto mt-16 md:mt-35">

        <div className="flex flex-col gap-8 md:gap-10 px-0 sm:px-4 md:px-8 lg:grid lg:grid-cols-2 lg:gap-20">
          <div className="relative z-10 flex flex-col items-center md:items-start lg:-mr-12">

            <h1 className="max-w-3xl text-5xl sm:text-6xl md:text-7xl font-medium text-center md:text-left text-neutral-900 font-prata leading-tight md:leading-none selection:bg-amber-200 selection:text-amber-900">
              Build digital products that <span className="text-[#6c63fa] italic font-serif z-60">scale.</span>
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