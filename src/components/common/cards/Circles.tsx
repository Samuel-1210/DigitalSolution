// src/components/Circle.tsx
import React from "react";

type CircleProps = {
  value: string;
  label1: string;
  label2: string;
  className?: string;
  style?: React.CSSProperties;
};

export default function Circle({
  value,
  label1,
  label2,
  className = "",
  style,
}: CircleProps) {
  return (
    <div
      className={`h-40 w-40 md:h-64 md:w-64 lg:h-[369px] lg:w-[369px] rounded-full border border-[#D8DDE1] flex flex-col items-center justify-center font-dm-sans ${className}`}
      style={style}
    >
      <p className="text-3xl md:text-4xl lg:text-[64px] font-medium">{value}</p>
      <p className="text-body leading-5 md:leading-6 lg:leading-[30px] text-lg md:text-xl lg:text-[30px]">
        {label1}
      </p>
      <p className="text-body leading-5 md:leading-6 lg:leading-[30px] text-lg md:text-xl lg:text-[30px]">
        {label2}
      </p>
    </div>
  );
}
