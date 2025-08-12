import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import Ellipses from "../../assets/icons/brands/Ellipses.svg";
import brand1 from "../../assets/icons/brands/brand1.svg";
import brand2 from "../../assets/icons/brands/brand2.svg";
import brand3 from "../../assets/icons/brands/brand3.svg";
import brand4 from "../../assets/icons/brands/brand4.svg";
import brand5 from "../../assets/icons/brands/brand5.svg";

export default function Partners() {
  return (
    <section className="bg-title min-h-[600px] lg:h-[807px] relative py-16 md:py-20 lg:py-28">
      <div className="absolute right-[38%]  md:right-12 lg:right-30 top-6 md:top-16 lg:top-24 opacity-50 md:opacity-100">
        <img
          src={Ellipses}
          alt="Logos of partner companies"
          className="w-24 md:w-32 lg:w-full h-auto object-contain"
        />
      </div>

      <div className="container mx-auto relative px-4 md:px-8 lg:px-30">
        <p className="mt-8 text-white font-marcellus text-2xl md:text-3xl lg:text-[40px] font-normal leading-8 md:leading-10 lg:leading-[50px] max-w-full lg:max-w-[840px] tracking-normal text-center lg:text-left">
          We Collaborate With A Few Disability Service Providers To Create
          Inclusive Goods That Meet Their Requirements.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[0.5fr_1fr_1fr] gap-6 lg:gap-8 relative max-w-full lg:w-[1192px] lg:h-[122px] text-white container mx-auto mt-8 lg:mt-10 px-4 md:px-8 lg:px-0">
        <div className="flex flex-col font-dm-sans text-center md:text-left lg:ml-10 lg:pt-5">
          <p className="text-3xl md:text-4xl lg:text-[50px] font-bold">25+</p>
          <p className="text-sm md:text-md font-bold text-white">
            Years Of Experience
          </p>
        </div>

        <div className="text-center md:text-left lg:pl-20">
          <p className="text-white max-w-full lg:w-[392px] font-dm-sans font-normal leading-6 lg:leading-[26px] mx-auto lg:mx-0">
            Established In 1995, NEXIN Has Been A Leading Force In The Digital
            Landscape For Over Two Decades. We're A Passionate Team Of
            Designers,
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-1 font-medium border-b-2 border-white pt-4 lg:pt-5"
          >
            More About Us
            <ArrowUpRightIcon strokeWidth={3} className="w-4 h-4 text-white" />
          </a>
        </div>

        <div className="text-center md:text-left lg:justify-self-end lg:translate-x-12">
          <p className="text-white max-w-full lg:w-[392px] font-dm-sans font-normal leading-6 lg:leading-[26px] mx-auto lg:mx-0">
            Established In 1995, NEXIN Has Been A Leading Force In The Digital
            Landscape For Over Two Decades. We're A Passionate Team Of
            Designers,
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-1 font-medium border-b-2 border-white pt-4 lg:pt-5"
          >
            Get In Touch
            <ArrowUpRightIcon strokeWidth={3} className="w-4 h-4 text-white" />
          </a>
        </div>
      </div>

      <div className="container mx-auto relative px-4 md:px-8 lg:px-30 mt-20 md:mt-32 lg:mt-40">
        <div className="flex items-center justify-center gap-2 md:gap-4 mb-8 lg:mb-10">
          <div className="h-px w-16 md:w-16 lg:w-[121px] bg-[#2A2A2A]"></div>
          <h2 className="text-white text-lg md:text-xl lg:text-2xl font-marcellus text-center">
            We Worked With Global Largest Brands
          </h2>
          <div className="h-px w-16 md:w-32 lg:w-[706px] bg-[#2A2A2A]"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-center justify-items-center gap-6 md:gap-8 lg:gap-12">
          <img
            src={brand1}
            alt="Brand 1"
            className="h-8 md:h-10 lg:h-12 w-auto"
          />
          <img
            src={brand2}
            alt="Brand 2"
            className="h-8 md:h-10 lg:h-12 w-auto"
          />
          <img
            src={brand3}
            alt="Brand 3"
            className="h-8 md:h-10 lg:h-12 w-auto"
          />
          <img
            src={brand4}
            alt="Brand 4"
            className="h-8 md:h-10 lg:h-12 w-auto"
          />
          <img
            src={brand5}
            alt="Brand 5"
            className="h-8 md:h-10 lg:h-12 w-auto col-span-2 md:col-span-1"
          />
        </div>
      </div>
    </section>
  );
}
