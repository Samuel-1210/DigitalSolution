import facebook from "../../assets/icons/footer/Facebook.svg";
import twitter from "../../assets/icons/footer/Twitter.svg";
import behance from "../../assets/icons/footer/Behance.svg";
import instagram from "../../assets/icons/footer/Instagram.svg";

export default function Footer() {
  return (
    <section className="h-auto relative py-14 lg:py-28 bg-white">
      <div className="container w-full h-auto mx-auto px-4 md:px-30 flex flex-col font-semibold text-paragraph gap-y-[37px]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 text-title">
          <div className="flex flex-col md:flex-row gap-4 md:gap-12 text-center md:text-left">
            <p>About Company</p>
            <p>Our Career</p>
            <p>Services</p>
            <p>Contact</p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 md:gap-12 text-center md:text-left">
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
        </div>

        <div className="border-b border-border w-full"></div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 text-title">
          <div className="flex gap-5">
            <img src={facebook} />
            <img src={twitter} />
            <img src={instagram} />
            <img src={behance} />
          </div>

          <p className="font-normal text-center md:text-right">
            Copyright © 2025 Nex. All Rights Reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
