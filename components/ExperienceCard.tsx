import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

const ExperienceCard = (props: Props) => {
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
          className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
          src="https://avatars.githubusercontent.com/u/42308135?v=4"
          alt="Javier Gongora'"
          width={128 * 3}
          height={128 * 3}
        />
      </motion.div>
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light ">CEO of PAPAFAM</h4>
        <p className="font-bold text-2xl mt-1">PAPAFAM</p>
        <div className="flex space-x-2 my-2">
          {/* tech used */}
          <div>
            <Image
              className="h-10 w-10 rounded-full"
              src="https://avatars.githubusercontent.com/u/42308135?v=4"
              alt="Javier Gongora'"
              width={40}
              height={40}
            />
          </div>
          {/* tech used */}
          <div>
            <Image
              className="h-10 w-10 rounded-full"
              src="https://avatars.githubusercontent.com/u/42308135?v=4"
              alt="Javier Gongora'"
              width={40}
              height={40}
            />
          </div>
          {/* tech used */}
          <div>
            <Image
              className="h-10 w-10 rounded-full"
              src="https://avatars.githubusercontent.com/u/42308135?v=4"
              alt="Javier Gongora'"
              width={40}
              height={40}
            />
          </div>
          {/* tech used */}
          <div>
            <Image
              className="h-10 w-10 rounded-full"
              src="https://avatars.githubusercontent.com/u/42308135?v=4"
              alt="Javier Gongora'"
              width={40}
              height={40}
            />
          </div>
        </div>
        <p className="uppercase py-5 text-black">Stared work... - Ended...</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary points Summary points Summary points Summary points</li>
          <li>Summary points Summary points Summary points Summary points</li>
          <li>Summary points Summary points Summary points Summary points</li>
          <li>Summary points Summary points Summary points Summary points</li>
          <li>Summary points Summary points Summary points Summary points</li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
