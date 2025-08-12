import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import LeftColumnImage from "../assets/icons/mission/LeftColumn.png";
import RightColumnImage from "../assets/icons/mission/RightColumn.png";
import Marketing from "../assets/icons/mission/Marketing.png";
import Uiux from "../assets/icons/mission/Uiux.png";

export default function Overview() {
  return (
    <section className="bg-[#F8F8F8] min-h-[600px] lg:h-[926px] relative py-16 md:py-20 lg:py-28">
      <div className="min-h-[500px] lg:h-[686px] mx-auto flex justify-center px-4 md:px-8 lg:px-0">
        <div className="w-full max-w-[1350px] flex flex-col lg:flex-row gap-8 lg:gap-[60px] lg:-translate-x-[36px]">
          <div className="flex justify-center lg:justify-end relative w-full lg:w-[620px]">
            <div className="flex flex-col w-full max-w-[560px] items-center lg:items-start">
              <div className="flex items-center lg:justify-start gap-5 mb-6 relative">
                <div className="w-4 h-4 border bg-black rounded-full"></div>
                <div className="w-4 h-4 border border-[#FF6633] rounded-full absolute left-2"></div>
                <span className="text-body uppercase text-[16px] font-bold font-plus-jakarta-sans">
                  What Sets Us Apart
                </span>
              </div>
              <h1 className="text-2xl md:text-4xl lg:text-[54px] font-marcellus font-normal text-title leading-tight mb-4 text-center lg:text-left">
                Driving Digital Success With Strategy Design
              </h1>
              <span className="text-body capitalize font-normal text-paragraph text-center lg:text-left">
                We believe that the surest measure of success is when our
                partners with us more than half It's more than just the visuals.
              </span>
              <img
                src={LeftColumnImage}
                alt="Mvv"
                className="hidden lg:block absolute bottom-0 right-0"
              />
            </div>
          </div>

          <div className="w-full lg:w-[670px] flex flex-col gap-y-6 lg:gap-y-[30px]">
            <div className="flex flex-col md:flex-row lg:h-[297px] gap-6 lg:gap-[30px]">
              <img
                src={RightColumnImage}
                alt="Mvv"
                className="w-full md:w-[283px] lg:w-[283px] h-auto lg:h-[297px] mx-auto md:mx-0"
              />
              <div className="self-center text-paragraph text-body capitalize gap-6 lg:gap-[30px] flex flex-col text-center md:text-left">
                <p>
                  We believe that the surest measure of success is when our
                  partners with us more than half It's more than just the
                  visuals. We're here to support your growth.
                </p>
                <p>
                  We believe that the surest measure of success is when our
                  partners with us more than half It's more than just the
                  visuals.
                </p>
              </div>
            </div>

            <div className="lg:h-[70px] flex flex-col md:flex-row items-center gap-6 lg:gap-x-[30px]">
              <div>
                <p className="text-paragraph text-body w-full lg:w-[283px] text-center md:text-left">
                  Conduct thorough market research to the fast target audience
                  behaviours. Submit as many design tasks
                </p>
              </div>
              <div className="flex flex-col justify-between items-center md:items-start text-center md:text-left">
                <p className="font-marcellus leading-[34px] text-xl lg:text-2xl font-normal">
                  Our Mission
                </p>
                <p className="text-paragraph text-body">
                  Conduct thorough market research to the fast target audience
                  behaviours.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center lg:items-start gap-6 lg:gap-x-[30px]">
              <div className="rounded-full w-32 h-32 lg:w-[148px] lg:h-[148px] border flex justify-center items-center gap-1 font-medium">
                <p className="font-bold text-sm lg:text-base">Contact Us</p>
                <ArrowUpRightIcon
                  strokeWidth={3}
                  className="w-4 h-4 text-black"
                />
              </div>

              <div className="gap-4 lg:gap-[30px] flex sm:flex-row font-dm-sans text-[14px] lg:text-[16px] leading-[26px] font-bold">
                <div className="h-48 lg:h-[249px] w-32 lg:w-[163px] relative flex flex-col justify-start items-center gap-4 lg:gap-[30px]">
                  <div className="rounded-full h-28 lg:h-[142px] w-28 lg:w-[142px] z-11">
                    <img
                      src={Marketing}
                      alt="Marketing"
                      className="object-cover"
                    />
                  </div>
                  <p className="w-20 lg:w-[89px] text-center z-11">
                    Marketing Strategy
                  </p>
                  <div className="bg-primary h-36 lg:h-[188px] w-32 lg:w-[163px] rounded-[30px] lg:rounded-[50px] absolute bottom-0 z-10"></div>
                </div>

                <div className="h-48 lg:h-[249px] w-32 lg:w-[163px] relative flex flex-col justify-start items-center gap-4 lg:gap-[30px]">
                  <div className="rounded-full h-28 lg:h-[142px] w-28 lg:w-[142px] z-11">
                    <img src={Uiux} alt="Marketing" className="object-cover" />
                  </div>
                  <p className="w-20 lg:w-[89px] text-center z-11">
                    UX/UI Solution
                  </p>
                  <div className="bg-primary h-36 lg:h-[188px] w-32 lg:w-[163px] rounded-[30px] lg:rounded-[50px] absolute bottom-0 z-10"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
