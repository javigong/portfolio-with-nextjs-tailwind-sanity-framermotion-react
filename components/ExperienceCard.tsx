import { motion } from "framer-motion";
import Image from "next/image";
import { urlFor } from "../sanity";
import { Experience } from "../typings";

type Props = {
  experience: Experience;
};

const ExperienceCard = ({ experience }: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#acc49d1c] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.div
        className=""
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Image
          className="w-32 h-32 rounded-full xl:w-[128px] xl:h-[128px] object-contain object-center"
          src={urlFor(experience?.companyImage).url()}
          alt={experience?.company}
          width={128}
          height={128}
        />
      </motion.div>
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light ">{experience?.jobTitle}</h4>
        <p className="font-bold text-2xl mt-1">{experience?.company}</p>
        <div className="flex flex-wrap flex-0 justify-left align-items">
          {experience?.technologies?.map((technology) => (
            <div className="ml-2 my-1">
              <Image
                className="h-10 w-10 rounded-full"
                src={urlFor(technology?.image).url()}
                alt={technology?.title}
                width={40}
                height={40}
              />
            </div>
          ))}
        </div>
        <p className="uppercase py-5 text-black">
          {new Date(experience?.dateStarted).toLocaleDateString("en-CA")} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience?.dateEnded).toLocaleDateString("en-CA")}
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg max-h-96">
          {experience?.points?.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
