import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import Gallery from "../assets/icons/talk/GalleryModern.svg";

export default function Talk() {
  return (
    <section className="bg-title min-h-[300px] lg:h-[409px] relative">
      <div className="container h-full mx-auto px-4 md:px-8 lg:px-30 items-center flex flex-col lg:flex-row justify-center lg:justify-between gap-8 lg:gap-0 py-16 lg:py-0">
        <div className="w-full max-w-[877px] lg:w-[877px] lg:h-[249px] flex flex-col items-center lg:items-start gap-6 text-center lg:text-left">
          <img src={Gallery} className="w-auto h-32 md:h-40 lg:h-auto" />
          <p className="text-paragraph text-white w-full lg:w-[877px] capitalize">
            We shift you from today's reality to tomorrow's potential, ensuring
          </p>
        </div>
        <div className="rounded-full w-32 h-32 md:w-36 md:h-36 lg:w-[152px] lg:h-[152px] bg-primary border flex justify-center items-center gap-1 font-medium flex-shrink-0">
          <p className="font-bold font-dm-sans text-sm lg:text-base">Let's Talk</p>
          <ArrowUpRightIcon strokeWidth={3} className="w-4 h-4 text-black" />
        </div>
      </div>
    </section>
  );
}