import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

const Projects = (props: Props) => {
  const projects = [1, 2, 3, 4, 5];
  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-[#ede8e824] scrollbar-thumb-green-500/50">
        {projects.map((project, i) => (
          <div key={project} className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
            <motion.div
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Image
                className="h-666 w-666"
                src="https://avatars.githubusercontent.com/u/42308135?v=4"
                alt="Javier Gongora'"
                width={222}
                height={222}
              />
            </motion.div>

            <div className="space-y-10 px-0 md md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="font-bold">
                  Case Study {i + 1} of {projects.length}:
                </span>{" "}
                UPS clone
              </h4>
              <p className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[green]/5 left-0 h-[500px]" />
    </div>
  );
};

export default Projects;
