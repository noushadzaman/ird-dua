import SubcatButton from "./btns/SubCategoryButton";
import { PiArrowBendDownRight } from "react-icons/pi";

const SubCats = ({ subcats, querycat, duas, querySubcat, duasName }) => {
// console.log(duas);

  return (
    <>
      {subcats.map((subcat) => (
        <div
          key={subcat.id}
          className="block ml-[35px] border-dotted border-l-[2px] border-[#1FA45B] font-[500] leading-[25px]"
        >
          <SubcatButton
            duasName={duasName}
            subcat={subcat}
            duas={duas}
            querycat={querycat}
          />
          {querySubcat == subcat.id ? (
            <div className="ml-[20px] space-y-4 py-3">
              {duasName.map((duaName, i) => (
                <a
                  href={`#dua-card-${duaName.id}`}
                  key={i}
                  className="flex gap-2 items-start "
                >
                  <PiArrowBendDownRight
                    size={18}
                    className="text-[#1FA45B] shrink-0"
                  />
                  <p className="text-[13px] text-[#565656] font-[400] leading-[19px]">
                    {duaName.dua_name_en
                      ? duaName.dua_name_en
                      : `${subcat.subcat_name_en} #${i + 1}`}
                  </p>
                </a>
              ))}
            </div>
          ) : null}
        </div>
      ))}
    </>
  );
};

export default SubCats;
