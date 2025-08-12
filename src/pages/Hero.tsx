import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import Digital from "../assets/icons/hero/Digital.svg";
import Solution from "../assets/icons/hero/Solution.svg";
import person1 from "../assets/icons/hero/persons/person1.png";
import person2 from "../assets/icons/hero/persons/person2.png";
import person3 from "../assets/icons/hero/persons/person3.png";
import Avatar from "../assets/icons/hero/Avatar.png";

export default function Hero() {
  return (
    <section className="bg-hero bg-repeat min-h-[750px] md:min-h-[700px] lg:h-[672px]">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-30 py-8 md:py-14 lg:py-20">
        <div className="flex flex-col gap-4 lg:gap-5">
          <p className="text-sm sm:text-base text-title font-dm-sans font-medium text-center lg:text-left">
            Great Design Services
            <br />
            Without The Pretentiousness!
          </p>
          <div className="flex flex-col items-center justify-center gap-6 lg:hidden">
            <img src={Digital} alt="Nexin marca" className="w-[70%]" />
            <img src={Solution} alt="Nexin marca" className="w-[85%]" />
          </div>
          {/* BLOCO PRINCIPAL — preserva o desktop (lg+) */}
          <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10 w-full">
            {/* Digital só no desktop, como antes */}
            <img
              src={Digital}
              alt="Nexin marca"
              className="hidden lg:block ml-3"
            />

            <div className="flex flex-col lg:flex-row lg:h-30 lg:relative lg:ml-9 gap-4 lg:gap-0">
              <p className="font-normal text-paragraph tracking-[0] capitalize text-center lg:text-left lg:w-[465px] lg:h-[65px]">
                We believe that the surest measure of success is when our
                partners with us more than half It's more than just the visuals.
                We're here to support your growth.
              </p>
              <p className="font-dm-sans font-black gap-1 flex items-center justify-center lg:justify-start border-b w-fit mx-auto lg:mx-0 lg:absolute lg:right-0 lg:-bottom-5">
                View All Services
                <ArrowUpRightIcon
                  strokeWidth={3}
                  className="w-4 h-4 text-black"
                />
              </p>
            </div>

            <div className="flex justify-center lg:justify-start lg:-mt-16 lg:h-[101px] lg:w-[238px] lg:shrink-0 lg:items-start lg:ml-2 lg:relative">
              <div className="w-[180px] lg:w-[160px] h-[64px] rounded-[100px] border flex items-center justify-center lg:ml-8">
                <div className="flex">
                  <div className="h-12w-12 rounded-full border-2 border-white z-10">
                    <img
                      src={person1}
                      alt="Avatar"
                      className="w-full h-full rounded-full"
                    />
                  </div>
                  <div className="lg:h-12 w-12 rounded-full border-2 border-white -ml-3 lg:-ml-4 z-20">
                    <img
                      src={person2}
                      alt="Avatar"
                      className="w-full h-full rounded-full"
                    />
                  </div>
                  <div className="h-12 w-12 rounded-full border-2 border-white -ml-3 lg:-ml-4 z-30">
                    <img
                      src={person3}
                      alt="Avatar"
                      className="w-full h-full rounded-full"
                    />
                  </div>
                  <div className="h-12 w-12 rounded-full border-2 border-white bg-black -ml-3 lg:-ml-4 z-40 flex items-center justify-center font-kanit font-medium">
                    <p className="text-white text-xs lg:text-sm">15k+</p>
                  </div>
                </div>
              </div>

              <div className="lg:absolute lg:inline hidden  z-50 lg:z-0  lg:-bottom-2 left-1/2 -translate-x-1/2 font-dm-sans font-normal text-base lg:text-xl tracking-[0] whitespace-nowrap">
                Excellent <span className="font-bold">4.000+</span> Reviews
              </div>
            </div>
          </div>
          <div className="md:hidden flex items-center gap-1 justify-center font-dm-sans font-normal text-base whitespace-nowrap">
            Excellent <span className="font-bold">4.000+</span> Reviews
          </div>
          <div className="mr-20  lg:mt-0 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 lg:gap-0">
            <div className=" relative w-48 lg:w-60 h-32 lg:h-[142px] rounded-[40px] lg:rounded-[50px] font-plus-jakarta-sans font-bold text-2xl lg:text-3xl leading-8 lg:leading-10 flex flex-col items-start justify-center p-6 lg:p-8 bg-primary">
              <div>
                <p>WEB</p>
                <p>DESIGN</p>
              </div>
              <div className="absolute -right-20 lg:-right-[108px] w-32 lg:w-[142px] h-32 lg:h-[142px] rounded-[40px] lg:rounded-[50px] bg-black flex items-center justify-center p-3 lg:p-4">
                <img src={Avatar} alt="Avatar" className="w-full h-full" />
              </div>
            </div>

            <img
              src={Solution}
              alt="Nexin marca"
              className=" hidden lg:inline lg:mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
