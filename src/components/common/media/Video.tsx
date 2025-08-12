// src/components/UnderHeroImage.jsx
import Rectangle from "../../../assets/icons/video/Rectangle.png";

export default function Video() {
  return (
    <section className="relative flex items-center justify-center">
      <img src={Rectangle} alt="Pessoa trabalhando em notebook" className="" />
      <div className="absolute flex items-center justify-center mb-3">
        <div className=" h-16 w-16 rounded-full flex items-center justify-center bg-white lg:w-[168px] lg:h-[168px] cursor-pointer">
          <p className="text-xs mx-2 text-center font-bold lg:text-paragraph ">
            PLAY VIDEO
          </p>
        </div>
      </div>
    </section>
  );
}
