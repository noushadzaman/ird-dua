"use client";

import { useRouter } from "next/router";

const SubcatButton = ({ subcat, querycat, duas }) => {
  const router = useRouter();
  const firstDuaOfSubcat = duas.filter(
    (dua) => dua.subcat_id === subcat.subcat_id
  )[0].dua_id;

  const handleClick = () => {
    router.push(`/category/${querycat}/${subcat.id}`);
  };

  return (
    <a href={`#dua-card-${firstDuaOfSubcat}`}>
      <div className="py-[8px] relative cursor-pointer" onClick={handleClick}>
        <p className="pl-[19px]">{subcat.subcat_name_en}</p>
        <div className="size-[8px] bg-[#1FA45B] absolute top-4 rounded-full -left-[5px]"></div>
      </div>
    </a>
  );
};

export default SubcatButton;
