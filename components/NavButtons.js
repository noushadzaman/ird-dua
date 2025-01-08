import { AVATAR_ICON } from "@/utils";
import Image from "next/image";
import { IoIosSettings } from "react-icons/io";
import NavDropDown from "./NavDropDown";

const NavButtons = () => {
  return (
    <div className="flex items-center gap-7 pr-8">
      <IoIosSettings size={22} className="text-[#1FA45B]" />
      <div className="flex items-center gap-2">
        <Image
          className="size-[45px]"
          width={500}
          height={500}
          src={AVATAR_ICON}
          alt="AVATAR_ICON"
        />
        <NavDropDown />
      </div>
    </div>
  );
};

export default NavButtons;
