import SearchCategory from "./SearchCategory";
import Cats from "./Cats";

const CatsContainer = ({
  cats,
  subcats,
  duasName,
  duas,
  querycat,
  querySubcat,
}) => {
  return (
    <div
      style={{ boxShadow: "0 0 0 0.5px #E2E2E2" }}
      className={`w-[380px] 2xl:w-[400px] rounded-[10px] bg-[white] max-h-[85vh] hidden lg:block max-xl:ml-[20px]`}
    >
      <h3 className="bg-[#1FA45B] text-center py-[18px] font-[600] text-[17px] text-white rounded-t-[10px]">
        Categories
      </h3>
      <SearchCategory querycat={querycat} querySubcat={querySubcat} />
      <Cats
        duas={duas}
        cats={cats}
        subcats={subcats}
        duasName={duasName}
        querycat={querycat}
        querySubcat={querySubcat}
      />
    </div>
  );
};

export default CatsContainer;
