import Cats from "./Cats";
import DuaContainer from "./DuaContainer";
import { IoSearchOutline } from "react-icons/io5";
import NavButtons from "./NavButtons";
import SettingsBar from "./SettingsBar";

const MainContainer = ({
  cats,
  subcats,
  duasName,
  duas,
  querycat,
  querySubcat,
}) => {
  return (
    <div className="flex flex-col">
      <nav className="flex justify-between my-[28px]">
        <h1 className="text-[24px] leading-[36px] font-[600] text-[#393939] max-xl:pl-4">
          Dua Page
        </h1>
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

      <div className="flex gap-[30px]">
        <Cats
          duas={duas}
          cats={cats}
          subcats={subcats}
          duasName={duasName}
          querycat={querycat}
          querySubcat={querySubcat}
        />
        <DuaContainer
          cats={cats}
          subcats={subcats}
          duas={duas}
          duasName={duasName}
          querycat={querycat}
          querySubcat={querySubcat}
        />
        {/* right sidebar*/}
        <SettingsBar />
      </div>
    </div>
  );
};

export default MainContainer;
