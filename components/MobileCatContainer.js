import { IoReorderThreeOutline } from "react-icons/io5";
import CategoryButton from "./btns/CategoryButton";
import SubCats from "./SubCats";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const MobileCatContainer = ({
  cats,
  duas,
  subcats,
  querycat,
  querySubcat,
}) => {
  return (
    <>
      <Sheet>
        <SheetTrigger>
          <div
            style={{ boxShadow: "0 0 0 0.5px #E2E2E2" }}
            className="rounded-[10px] bg-white font-[500] text-[#393939] lg:hidden"
          >
            <p className="px-[30px] py-[15px] rounded-[10px] flex items-center gap-2">
              <IoReorderThreeOutline size={30} />
              {`Dua's `}excellence
            </p>
          </div>
        </SheetTrigger>

        <SheetContent>
          <div className="absolute bg-white px-[15px] pt-[15px] pb-[15px] overflow-y-scroll h-full lg:h-[70vh] mt-[30px]">
            {cats.map((cat) => (
              <div key={cat.cat_id} className="">
                <CategoryButton cat={cat} subcats={subcats} />
                {cat.cat_id == querycat ? (
                  <SubCats
                    subcats={subcats.filter(
                      (subcat) => subcat.cat_id == querycat
                    )}
                    querycat={querycat}
                    querySubcat={querySubcat}
                    duas={duas}
                  />
                ) : null}
              </div>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileCatContainer;
