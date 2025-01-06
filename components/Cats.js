import CategoryButton from "./btns/CategoryButton";
import SubCats from "./SubCats";

const Cats = ({ cats, subcats, duasName, querycat, querySubcat }) => {
  return (
    <div className="md:w-[429px] rounded-[10px] bg-[white] h-auto">
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
              />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cats;
