import { ChevronRightIcon } from "@heroicons/react/24/outline";

type WorkflowCardProps = {
  number: string;
  title: string;
  icon: React.ReactNode;
  description: string;
};

export default function WorkflowCard({
  number,
  title,
  icon,
  description,
}: WorkflowCardProps) {
  return (
    <div
      className="
      w-full max-w-[410px] h-auto
      lg:w-[410px] lg:h-[244px]
      flex flex-col justify-between font-marcellus
    "
    >
      <div className="relative flex items-center">
        <div
          className="
          w-16 h-16 bg-white rounded-full border border-black flex items-center justify-center
          lg:w-[93px] lg:h-[93px]
        "
        >
          {icon}
        </div>
        <div
          className="
          lg:border-b-2 w-[60%] border-b
          lg:w-[260px] lg:flex-none lg:mx-0
        "
        ></div>
        <ChevronRightIcon className="hidden lg:inline lg:w-6 lg:h-6 lg:-ml-[16px]" />
        <div className="flex items-center justify-center ml-2 lg:ml-0">
          <p className="text-border font-bold text-3xl lg:text-4xl font-plus-jakarta-sans">
            {number}
          </p>
        </div>
      </div>
      <div className="mt-4 lg:mt-0">
        <h2 className="text-xl lg:text-2xl font-medium text-black mb-3 lg:mb-4">
          {title}
        </h2>
        <div className="text-body text-paragraph font-normal text-sm lg:text-base leading-6 lg:leading-[26px]">
          {description.split("\n").map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
