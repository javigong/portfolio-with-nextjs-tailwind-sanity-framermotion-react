import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className=" sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        className="flex flex-row items-center"
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
          transition: {
            duration: 1.2,
          },
        }}
      >
        {/* Social Icons */}
        <SocialIcon
          url=""
          fgColor="black"
          bgColor="transparent"
          network="linkedin"
        />
        <SocialIcon
          url=""
          fgColor="black"
          bgColor="transparent"
          network="github"
        />
        <SocialIcon
          url=""
          fgColor="black"
          bgColor="transparent"
          network="twitter"
        />
      </motion.div>
      <motion.div
        className="flex flex-row items-center text-black cursor-pointer"
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
          transition: {
            duration: 1.2,
          },
        }}
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="black"
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-black">
          Contact
        </p>
      </motion.div>
    </header>
  );
};

export default Header;
