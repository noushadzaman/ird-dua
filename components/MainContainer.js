import Cats from "./Cats";
import DuaContainer from "./DuaContainer";

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
        <h1 className="text-[24px] leading-[36px] font-[600] text-[#393939]">
          Dua Page
        </h1>
        <div className="hidden md:flex items-center gap-[50px]">
          <input
            style={{ boxShadow: "0 0 0 0.5px #E2E2E2" }}
            className="h-[52px] rounded-[10px] p-[16px] lg:w-[250px] xl:w-[300px] focus:outline-[#1FA45B]"
            placeholder="Search by Dua Name"
            type="text"
          />
          <div>{`:)`}</div>
        </div>
      </nav>

      <div className="flex gap-[33px]">
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
      </div>
    </div>
  );
};

export default MainContainer;
