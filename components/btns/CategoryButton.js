"use client";

import { findCatLogo } from "@/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";

const CategoryButton = ({ cat, subcats }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(
      `/category/${cat.cat_id}/${
        subcats.filter((subcat) => subcat.cat_id === cat.cat_id)[0].subcat_id
      }`
    );
  };

  return (
    <a href={`#dua-container-top`}>
      <div
        onClick={handleClick}
        className="hover:bg-[#E8F0F5] flex p-[10px] items-center gap-[16px] border-b border-[#F9F9F9] rounded-[10px]"
      >
        <div className="size-[60px] bg-[#CFE0E5] flex items-center justify-center rounded-[10px]">
          <Image
            width={40}
            height={40}
            src={findCatLogo(cat.cat_icon)}
            alt={cat.cat_icon}
          />
        </div>

        <div className="flex flex-col gap-[5px] flex-1">
          <p className="w-full font-[600] text-[#1FA45B]"> {cat.cat_name_en}</p>
          <p className="text-[#7E7E7E] font-[400] font-poppins text-[14px] leading-[21px]">
            Subcategory: {cat.no_of_subcat}
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-[9px]">
          <p className="font-[600] leading-[20px] text-[#393939]">
            {cat.no_of_dua}
          </p>
          <p className="font-[400] text-[#7E7E7E] text-[14px] leading-[21px]">
            Duas
          </p>
        </div>
      </div>
    </a>
  );
};

export default CategoryButton;
