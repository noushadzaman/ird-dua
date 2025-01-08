import DuaCard from "./DuaCard";
import MobileCatContainer from "./MobileCatContainer";

const DuaContainer = ({
  subcats,
  duas,
  cats,
  duasName,
  querycat,
  querySubcat,
}) => {
  const groupedBySubcat = duas.reduce((acc, item) => {
    if (!acc[item.subcat_id]) {
      acc[item.subcat_id] = [];
    }
    acc[item.subcat_id].push(item);
    return acc;
  }, {});
  const group = Object.values(groupedBySubcat);
  group.map((dua) => {
    return dua[0].subcat_id;
  });
  const duaStructure = [];

  group.forEach((dua) => {
    duaStructure.push(
      subcats.find((subcat) => subcat.subcat_id == dua[0].subcat_id)
        .subcat_name_en
    );
    duaStructure.push(dua);
  });

  return (
    <div className="flex flex-col gap-[20px] lg:gap-[10px] flex-1 h-[90vh] overflow-y-scroll py-1 scroll-smooth px-1">
      <div id="dua-container-top"></div>
      {/*  */}
      <MobileCatContainer
        cats={cats}
        subcats={subcats}
        duasName={duasName}
        duas={duas}
        querycat={querycat}
        querySubcat={querySubcat}
      />
      {/*  */}
      {duaStructure.map((item, i) => {
        return typeof item === "string" ? (
          <div
            key={i}
            style={{ boxShadow: "0 0 0 0.5px #E2E2E2" }}
            className="rounded-[10px] bg-white font-[500] text-[#393939]"
          >
            <p className="px-[30px] py-[15px] rounded-[10px]">
              <span className="text-[#1FA45B] font-[600]">Section: </span>
              {item}
            </p>
          </div>
        ) : (
          <>
            {item.map((dua, i) => (
              <DuaCard key={i} dua={dua} i={i} />
            ))}
          </>
        );
      })}
    </div>
  );
};

export default DuaContainer;
