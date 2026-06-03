import AnimatedProgrammingSVG from "@/component/AnimatedProgrammingSVG";
import Appbar from "@/component/appbar";
import Footer from "@/component/footer";
import Services from "@/component/services";
import { Testonomial } from "@/component/testinomial";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Appbar />

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
              <Link href="/contact">
              <button className="px-8 py-3 text-center font-open-sans font-medium transition duration-150 active:scale-[0.98] hover:bg-[#392cfa] text-white bg-[#6c63fa] rounded-xl cursor-pointer">
                Get in touch
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
        <div className="relative w-full h-12 bg-[#6c63fa] -mt-20 flex items-center justify-center text-white z-40 rounded-lg shadow-sm font-open-sans">
          hello we are here to conquer this world
        </div>
      </main >
      <section className="relative my-10">
        <Services />
      </section>

      <section className="relative max-w-7xl mx-auto w-full my-10">
        <div className="mb-5">
          <Testonomial />
        </div>
      </section>

      <footer className="relative max-w-7xl mx-auto w-full">
        <Footer />
      </footer>
    </>
  );
}