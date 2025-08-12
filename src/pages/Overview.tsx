import CirclesZebra from "../assets/icons/overview/CirclesZebra.png";
import SquareCard from "../components/common/cards/SquareCards";
import SquareOne from "../assets/icons/squares/SquareOne.svg";
import SquareTwo from "../assets/icons/squares/SquareTwo.svg";
import SquareThree from "../assets/icons/squares/SquareThree.svg";
import ArrowDown from "../assets/icons/squares/ArrowDown.svg";
import ArrowRight from "../assets/icons/squares/ArrowRight.svg";
import { useState } from "react";
import Circle from "../components/common/cards/Circles";

export default function Overview() {
  const [activeIndex, setActiveIndex] = useState(1);
  const cards = [
    {
      category: "Visual Branding",
      title: "Web Design And Development",
      icon: <img src={SquareOne} className="w-15 h-15" alt="" />,
      text: "Established In 1995, NEXIN Has Been Leading Force In The Digital Landscape For Over Two Decades. We're A Passionate",
    },
    {
      category: "Brand Strategy",
      title: "Branding And Creative Services",
      icon: <img src={SquareTwo} className="w-15 h-15" alt="" />,
      text: "Established In 1995, NEXIN Has Been Leading Force In The Digital Landscape For Over Two Decades. We're A Passionate",
    },
    {
      category: "Identity Build",
      title: "Creative Digital Agency",
      icon: <img src={SquareThree} className="w-15 h-15" alt="" />,
      text: "Established In 1995, NEXIN Has Been Leading Force In The Digital Landscape For Over Two Decades. We're A Passionate",
    },
  ];

  const CardCircle = [
    { value: "35k+", label1: "Project", label2: "Complete" },
    { value: "10k+", label1: "Happy", label2: "Customers" },
    { value: "25+", label1: "Years", label2: "Experiences" },
    { value: "88", label1: "Awards", label2: "Achievement" },
  ];

  return (
    <section className="bg-white min-h-[800px] lg:h-[1524px] relative py-16 md:py-20 lg:py-28">
      <div className="absolute left-4 md:left-8 lg:left-18 top-12 md:top-16 lg:top-30 opacity-30 md:opacity-50 lg:opacity-100">
        <img
          src={CirclesZebra}
          alt="Logos of partner companies"
          className="w-16 md:w-24 lg:w-full h-auto object-contain"
        />
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-30 flex items-center justify-center">
        <div className="flex flex-col max-w-full lg:w-[761px] items-center lg:items-start">
          <div className="flex items-center gap-5 mb-6 relative lg:justify-start">
            <div className="w-4 h-4 border bg-black rounded-full"></div>
            <div className="w-4 h-4 border border-[#FF6633] rounded-full absolute left-2"></div>
            <span className="text-body text-[16px] font-bold">SERVICES</span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-[54px] font-marcellus font-normal text-title leading-tight mb-6 lg:mb-8 text-center lg:text-left">
            Empowering Brands Through
            <br />
            Strategic Digital Services
          </h1>

          <div className="w-full max-w-[466px] lg:w-[466px] lg:h-[123px] px-4 lg:pl-16 mx-auto border-l border-[#D8DDE1] text-paragraph text-body flex items-center capitalize text-center lg:text-left">
            <p>
              Established in 1995, NEXIN has been a leading force in the digital
              landscape for over two decades. We're a passionate team of
              designers,{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-30 pt-12 lg:pt-15">
        <div className="border-t border-[#D8DDE1] flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 lg:gap-[30px] pt-12 lg:pt-15">
          {cards.map((c, i) => (
            <SquareCard
              key={c.title}
              category={c.category}
              title={c.title}
              icon={c.icon}
              text={c.text}
              iconButtonInactive={<img src={ArrowDown} alt="" />}
              iconButtonActive={<img src={ArrowRight} alt="" />}
              active={activeIndex === i}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-8 lg:px-30 mt-16 md:mt-20 lg:mt-30">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:relative lg:w-[1290px] lg:h-[369px]">
          {CardCircle.map((item, i) => (
            <Circle
              key={i}
              {...item}
              className={`lg:absolute ${
                i >= 2 ? "justify-self-center md:justify-self-auto" : ""
              }`}
              style={{ left: i * 307 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
