import { motion } from "framer-motion";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import { Social } from "../typings";

type Props = {
  socials: Social[];
};

const Header = ({ socials }: Props) => {
  return (
    <>
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
          {socials.map((social) => (
            <SocialIcon
              key={social._id}
              url={social.url}
              fgColor="black"
              bgColor="transparent"
              network={social.title}
            />
          ))}
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
            url="#contact"
          />
          <p className="uppercase hidden md:inline-flex text-sm text-black">
            <Link href="#contact">Contact</Link>
          </p>
        </motion.div>
      </header>
    </>
  );
};

export default Header;
