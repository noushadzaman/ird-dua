import { Fragment } from "react";
import DuaCard from "./DuaCard";

const DuaContainer = ({ subcats, duas }) => {
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

  console.log(duaStructure);

  return (
    <div className="flex flex-col gap-[10px] flex-1 h-[90vh] overflow-y-scroll ">
      {duaStructure.map((item, number) => {
        return typeof item === "string" ? (
          <div
            style={{ boxShadow: "0 0 0 0.5px #E2E2E2" }}
            className="rounded-[10px] bg-white font-[500] text-[#393939]"
          >
            <p
              className="px-[30px] py-[15px] rounded-[10px]"
              key={number}
            >
              <span className="text-[#1FA45B] font-[600]">Section: </span>
              {item}
            </p>
          </div>
        ) : (
          <Fragment key={number}>
            {item.map((dua, i) => (
              <DuaCard key={i} dua={dua} number={number} />
            ))}
          </Fragment>
        );
      })}
    </div>
  );
};

export default DuaContainer;
