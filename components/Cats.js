import CategoryButton from "./btns/CategoryButton";
import SubCats from "./SubCats";

const Cats = ({ cats, subcats, duasName, duas, querycat, querySubcat }) => {
  return (
    <div
      className={`w-[380px] xl:w-[400px] 2xl:w-[430px] rounded-[10px] bg-[white] max-h-[85vh] hidden lg:block`}
    >
      <h3 className="bg-[#1FA45B] text-center py-[18px] font-[600] text-[17px] text-white rounded-t-[10px]">
        Categories
      </h3>
      <div className="px-[15px] pt-[15px]">
        <input type="text" className="w-full" />
      </div>

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
