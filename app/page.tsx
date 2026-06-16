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
              We grow <span className="text-[#6c63fa]">digital ecosystems</span> from the roots up
            </h1>
            <h2 className="max-w-xl mt-6 text-lg text-left text-neutral-600 font-open-sans md:text-xl selection:bg-amber-200 selection:text-amber-900">
              Transforming complex business challenges into seamless digital experiences across web, mobile, and the cloud.
            </h2>
            <div className="flex flex-row justify-center md:justify-start gap-6 mt-10">
              <Link href="/getintouch">
                  <button className=" flex flex-row gap-2 px-8 py-3 text-center text-lg font-open-sans font-medium transition duration-150 active:scale-[0.98] hover:bg-[#392cfa] text-white bg-[#6c63fa] rounded-xl cursor-pointer">
                     <RxRocket className="size-5 mt-1" /> Get in touch
                  </button>
              </Link>
              <Link href="/about">
                <button className="px-8 py-3 text-center font-open-sans font-medium transition duration-150 active:scale-[0.98] text-neutral-800 border border-neutral-300 rounded-xl cursor-pointer">
                  Our portfolio
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
      <section className="relative my-2">
        <div className="mx-auto w-full max-w-5xl px-4 py-5">
          <div className="mb-10">
            <h1 className="text-5xl text-center font-bold tracking-tight text-neutral-700">Everything Required to <span className="text-[#6c63fa]">Succeed Online.</span></h1>
            <p className="mx-auto max-w-xl text-center text-base leading-7 text-neutral-600 md:text-lg mt-4">Complete design and development services to build, launch, and grow your digital product.</p>
          </div>
        </div>
        <Services />
      </section>

      <section className="relative w-full overflow-hidden">
        <Testonomial />
      </section>
      <section className="relative w-full overflow-hidden">
        <div className="mb-5">
          <FAQSection />
        </div>
      </section>

      <footer className="relative w-full overflow-hidden">
        <Footer />
      </footer>
    </>
  );
}