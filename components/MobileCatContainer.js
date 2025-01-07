import { IoReorderThreeOutline } from "react-icons/io5";
import CategoryButton from "./btns/CategoryButton";
import SubCats from "./SubCats";

const MobileCatContainer = ({
  cats,
  subcats,
  querycat,
  querySubcat,
  duasName,
}) => {
  return (
    <>
      <div
        style={{ boxShadow: "0 0 0 0.5px #E2E2E2" }}
        className="rounded-[10px] bg-white font-[500] text-[#393939] lg:hidden"
      >
        <p className="px-[30px] py-[15px] rounded-[10px] flex items-center gap-2">
          <IoReorderThreeOutline size={30} />
          {`Dua's `}excellence
        </p>
      </div>

      {/* <div className="absolute bg-white px-[15px] pt-[15px] pb-[15px] overflow-y-scroll h-full lg:h-[70vh]">
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
      </div> */}
    </>
  );
};

export default MobileCatContainer;
