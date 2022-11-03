import Image from "next/image";
import Link from "next/link";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [
      "Hi, I'm Javier!",
      "I like to Travel",
      "I like Music",
      "<ILikeToCode />",
    ],
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });
  return (
    <>
      <div className="h-screen flex flex-col space-y-10 items-center justify-center text-center overflow-hidden">
        <BackgroundCircles />
        <Image
          className="relative rounded-full h-32 w-32 mx-auto object-cover"
          src="https://avatars.githubusercontent.com/u/42308135?v=4"
          alt="Javier Gongora"
          width={128}
          height={128}
        />

        <div className="z-20">
          <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
            Software Developer
          </h2>
          <h1 className="text-5xl capitalize lg:text-5xl font-semibold px-10">
            <span className="mr-3">{text}</span>
            <Cursor cursorColor="green" />
          </h1>
          <div className="pt-5">
            <Link href="#about">
              <button className="heroButton">About</button>
            </Link>
            <Link href="#experience">
              <button className="heroButton">Experience</button>
            </Link>
            <Link href="#skills">
              <button className="heroButton">Skills</button>
            </Link>
            <Link href="#projects">
              <button className="heroButton">Projects</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
