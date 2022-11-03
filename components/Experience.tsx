import ExperienceCard from "./ExperienceCard";

type Props = {};

const Experience = (props: Props) => {
  return (
    <div className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>
    <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x scrollbar scrollbar-track-[#ede8e824] scrollbar-thumb-green-500/30">
      <ExperienceCard/>
      <ExperienceCard/>
      <ExperienceCard/>
      <ExperienceCard/>
    </div>

    </div>
  );
};

export default Experience;