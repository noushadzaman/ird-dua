import CategoryButton from "./btns/CategoryButton";
import SubCats from "./SubCats";
import SearchCategory from "./SearchCategory";

const Cats = ({ cats, subcats, duasName, duas, querycat, querySubcat }) => {
  return (
    <div
      style={{ boxShadow: "0 0 0 0.5px #E2E2E2" }}
      className={`w-[380px] 2xl:w-[400px] rounded-[10px] bg-[white] max-h-[85vh] hidden lg:block max-xl:ml-[20px]`}
    >
      <h3 className="bg-[#1FA45B] text-center py-[18px] font-[600] text-[17px] text-white rounded-t-[10px]">
        Categories
      </h3>
      <SearchCategory querycat={querycat} querySubcat={querySubcat} />
      <div className="px-[15px] pt-[15px] pb-[15px] overflow-y-scroll h-[100vh] md:h-[70vh]">
        {cats.map((cat) => (
          <div key={cat.cat_id} className="">
            <CategoryButton cat={cat} subcats={subcats} />
            {cat.cat_id == querycat ? (
              <SubCats
                subcats={subcats.filter((subcat) => subcat.cat_id == querycat)}
                querycat={querycat}
                querySubcat={querySubcat}
                duasName={duasName}
                duas={duas}
              />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cats;
