import { motion } from "framer-motion";
import Image from "next/image";
import { urlFor } from "../sanity";
import { Skill } from "../typings";

type Props = {
  skill: Skill;
  directionLeft?: boolean;
};

const Skill = ({ skill, directionLeft }: Props) => {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.div
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
      >
        <Image
          className="rounded-full border border-gray-500 object-contain w-20 h-20 md:w-20 md:h-20 xl:w-25 xl:h-25 filter group-hover:grayscale transition duration-300 ease-in-out"
          src={urlFor(skill?.image).url()}
          alt={skill?.title}
          width={80}
          height={80}
        />
      </motion.div>
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-20 h-20 md:w-20 md:h-20 xl:w-25 xl:h-25 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100 ">{skill?.progress}%</p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
