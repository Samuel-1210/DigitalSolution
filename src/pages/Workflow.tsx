import WorkflowCard from "../components/common/cards/WorlflowCard";
import Rocket from "../assets/icons/workflow/foguete.svg";
import CircleArrow from "../assets/icons/workflow/circlearrow.svg";
import Caneta from "../assets/icons/workflow/caneta.svg";

export default function Workflow() {
  const steps = [
    {
      number: "01",
      title: "Research and Strategy",
      icon: (
        <img
          src={Rocket}
          className="w-10 h-h10 lg:w-[45px] lg:h-[45px]"
          alt=""
        />
      ),
      description:
        "Conduct thorough market of the research\nto the fast target audience behaviors.\nSubmit as many design tasks",
    },
    {
      number: "02",
      title: "Plan Customization",
      icon: (
        <img
          src={Caneta}
          className="w-10 h-h10 lg:w-[45px] lg:h-[45px]"
          alt=""
        />
      ),
      description:
        "Conduct thorough market of the research\nto the fast target audience behaviors.\nSubmit as many design tasks",
    },
    {
      number: "03",
      title: "Finished & User Testing",
      icon: (
        <img
          src={CircleArrow}
          className="w-10 h-h10 lg:w-[45px] lg:h-[45px]"
          alt=""
        />
      ),
      description:
        "Conduct thorough market of the research\nto the fast target audience behaviors.\nSubmit as many design tasks",
    },
  ];

  return (
    <section className="bg-white h-auto lg:h-[628px] relative py-16 md:py-20 lg:py-28">
      <div className="container mx-auto px-4 md:px-8 lg:px-30 flex flex-col items-center justify-center">
        <div className="flex flex-col max-w-full lg:w-[761px] items-center text-center">
          <div className="flex items-center justify-center gap-5 mb-6 relative">
            <div className="w-4 h-4 border bg-black rounded-full"></div>
            <div className="w-4 h-4 border border-[#FF6633] rounded-full absolute left-2"></div>
            <span className="text-body text-[16px] font-bold">WORKFLOW</span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-[54px] font-marcellus font-normal text-title leading-tight mb-8">
            How We Work
          </h1>
        </div>

        <div className="w-full flex justify-center">
          <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-[30px]">
            {steps.map((s, i) => (
              <WorkflowCard key={i} {...s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
