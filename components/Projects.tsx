import { motion } from "framer-motion";
import Image from "next/image";
import { urlFor } from "../sanity";
import { Project } from "../typings";

type Props = {
  projects: Project[];
};

const Projects = ({ projects }: Props) => {
  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-[#ede8e824] scrollbar-thumb-green-500/50">
        {projects.map((project, i) => (
          <div
            key={project?._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
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
                src={urlFor(project?.image).url()}
                alt={project?.title}
                width={222}
                height={222}
              />
            </motion.div>

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="font-bold">
                  Case Study {i + 1} of {projects.length}:
                </span>{" "}
                {project?.title}
              </h4>
              <div className="flex flex-wrap flex-0 justify-center align-items">
                {project?.technologies?.map((technology) => (
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
              <p>{project?.summary}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[green]/5 left-0 h-[500px]" />
    </div>
  );
};

export default Projects;
