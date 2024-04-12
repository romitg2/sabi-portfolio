import { FiArrowRight } from "react-icons/fi";

/* eslint-disable react/no-unescaped-entities */
export const Hero = () => {
  return (
    <div className="relative">
      <div className="absolute top-[20vh] left-[7vw] ">
        <p className=" text-blue-500 tracking-tight text-[12vh]">Welcome, </p>
        <p className="text-blue-500 mt-[-4vh] tracking-tight text-[20vh]">
          <span className=" italic text-[16vh] ">I'm</span>
          {"  "}
          <span className="text-blue-900 tracking-wide font-bold">Sabi</span>
        </p>
        <div className="flex gap-x-5 mt-4 ">
          <p className="text-blue-900 font-bold text-3xl tracking-tight ">
            - Textile Designer
          </p>
          <button
            onClick={(e) => e.stopPropagation()}
            className="group flex shrink-0 items-center gap-1.5 rounded-full bg-gradient-to-br from-blue-500 to-blue-900 px-4 py-3 text-sm font-medium text-gray-900 transition-transform active:scale-[0.985]"
          >
            <span className="text-lg font-bold italic text-white ">
              About Me
            </span>
            <FiArrowRight className="-mr-4 opacity-0 text-white transition-all group-hover:-mr-0 group-hover:opacity-100 group-active:-rotate-45" />
          </button>
        </div>
      </div>
    </div>
  );
};
