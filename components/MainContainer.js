import DuaContainer from "./DuaContainer";
import { IoSearchOutline } from "react-icons/io5";
import NavButtons from "./NavButtons";
import SettingsBar from "./SettingsBar";
import Image from "next/image";
import { LOGO } from "@/utils";
import CatsContainer from "./CatsContainer";

const MainContainer = ({ cats, subcats, duas, querycat, querySubcat }) => {
  return (
    <div className="flex flex-col">
      {/* nav bar */}
      <nav className="flex justify-between my-[28px]">
        <div className="flex items-center">
          <Image
            width={350}
            height={350}
            className="size-[80px] cursor-pointer xl:hidden"
            src={LOGO}
            alt="logo"
          />
          <h1 className="text-[24px] leading-[36px] font-[600] text-[#393939] max-xl:pl-1">
            Dua Page
          </h1>
        </div>
        <div className="hidden md:flex items-center gap-[50px]">
          <div className="relative">
            <input
              style={{ boxShadow: "0 0 0 0.5px #E2E2E2" }}
              className="h-[47px] rounded-[10px] p-[16px] w-[250px] xl:w-[300px] focus:outline-[#1FA45B]"
              placeholder="Search by Dua Name"
              type="text"
            />
            <div className="bg-[#f7f8fa] absolute py-[10px] px-[15px] rounded-[6px] text-[#868686] top-0 right-0 m-[4px]">
              <IoSearchOutline size={18} />
            </div>
          </div>
          <NavButtons />
        </div>
      </nav>

      <div className="flex gap-[20px] 2xl:gap-[30px]">
        <CatsContainer
          duas={duas}
          cats={cats}
          subcats={subcats}
          querycat={querycat}
          querySubcat={querySubcat}
        />
        <DuaContainer
          cats={cats}
          subcats={subcats}
          duas={duas}
          querycat={querycat}
          querySubcat={querySubcat}
        />
        {/* right sidebar for desktop device*/}
        <div className="hidden 2xl:block">
          <SettingsBar />
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
