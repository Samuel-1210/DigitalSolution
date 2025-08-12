type CardProps = {
  category: string;
  title: string;
  icon: React.ReactNode;
  text: string;
  iconButtonInactive: React.ReactNode;
  iconButtonActive: React.ReactNode;
  active: boolean;
  onClick: () => void;
};

export default function SquareCard({
  category,
  title,
  icon,
  text,
  iconButtonInactive,
  iconButtonActive,
  active,
  onClick,
}: CardProps) {
  const CLIP =
    "polygon(0 0, 100% 0, 100% calc(100% - 60px), calc(100% - 60px) 100%, 0 100%)";

  return (
    <div className="relative w-full max-w-[350px] md:max-w-[380px] lg:w-[410px] h-[320px] md:h-[340px] lg:h-[364px] mx-auto">
      <div
        className={`relative w-full h-full p-px z-10 transition-colors ${
          active ? "bg-primary" : "bg-[#D8DDE1]"
        }`}
        style={{ clipPath: CLIP }}
      >
        <button
          type="button"
          onClick={onClick}
          className="relative w-full h-full bg-white p-6 md:p-8 lg:p-10 flex flex-col text-left gap-4 lg:gap-[20px] cursor-pointer"
          style={{ clipPath: CLIP }}
        >
          <div className="flex items-center gap-2">
            <div className="w-[5px] h-[5px] rounded-full bg-body"></div>
            <span className="text-sm text-body font-medium font-marcellus">
              {category}
            </span>
          </div>

          <h3 className="text-xl md:text-2xl lg:text-3xl text-gray-900 font-marcellus max-w-full lg:w-[238px] lg:h-[101px] leading-tight">
            {title}
          </h3>

          <div className="w-12 h-12 md:w-14 md:h-14 lg:w-15 lg:h-15">{icon}</div>

          <p className="text-body text-paragraph leading-6 lg:leading-7 max-w-full lg:w-[330px] text-sm lg:text-base">
            {text}
          </p>
        </button>
      </div>

      <button
        type="button"
        onClick={onClick}
        className={`absolute bottom-0 right-0 w-12 h-12 lg:w-14 lg:h-14 rounded-full border flex items-center justify-center z-20 transition-all cursor-pointer
        ${
          active
            ? "bg-primary border-primary text-white"
            : "bg-white border-[#D8DDE1] text-body"
        }`}
      >
        {active ? iconButtonActive : iconButtonInactive}
      </button>
    </div>
  );
}