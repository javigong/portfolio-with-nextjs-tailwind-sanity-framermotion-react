import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

const About = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.div
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-64 xl:w-[500px] xl:h-[500px]"
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        <Image
          className="rounded-full object-cover md:rounded-lg md:w-64 md:h-64 xl:w-[500px] xl:h-[500px]"
          src="https://avatars.githubusercontent.com/u/42308135?v=4"
          alt="Javier Gongora'"
          width={128 * 3}
          height={128 * 3}
        />
      </motion.div>

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">Here is a little background</h4>
        <p className="text-base">
          Hi there! My name is Javier, and I enjoy creating web and mobile
          applications. I alway being curious about coding and how it allowed us
          to solve complex problems. After finishing my degree I started using
          WordPress with LMS platforms, and started to discover HTML, CSS, PHP
          and JavaScript capabilities to improve the users experience. My
          interest in web development became stronger after moving to Vancouver
          where I found a perfect context to pursue my passion. Along my
          Canadian journey I took a two-year Post-Degree Diploma in Web and
          Mobile App Development at Langara College. This program gave me
          experience developing real-world projects from concept to deployment,
          and being surrounded by passionate developers and designers.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
