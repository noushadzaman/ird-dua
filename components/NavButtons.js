import { AVATAR_ICON } from "@/utils";
import Image from "next/image";
import { IoIosSettings } from "react-icons/io";
import NavDropDown from "./NavDropDown";
import SettingsBar from "./SettingsBar";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const NavButtons = () => {
  return (
    <div className="flex items-center flex-row-reverse gap-7 pr-8">
      <div className="hidden max-2xl:block">
        <Sheet>
          <SheetTrigger className="text-[#1FA45B] flex items-center justify-center">
            <IoIosSettings size={22} />
          </SheetTrigger>
          <SheetContent>
            <SettingsBar />
          </SheetContent>
        </Sheet>
      </div>
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
