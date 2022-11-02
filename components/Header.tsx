import { SocialIcon } from "react-social-icons";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <div className="flex flex-row items-center">
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
      </div>
      <div className="flex flex-row items-center text-black cursor-pointer">
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="black"
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-black">
          Contact
        </p>
      </div>
    </header>
  );
};

export default Header;
