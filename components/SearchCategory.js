"use client";

import { useRouter } from "next/navigation";
import { IoSearchOutline } from "react-icons/io5";

const SearchCategory = ({ querycat, querySubcat }) => {
  const router = useRouter();

  const searchHandler = (string) => {
    router.push(`/category/${querycat}/${querySubcat}?search-cat=${string}`);
  };

  return (
    <div className="mx-[15px] mt-[15px] rounded-[10px] relative">
      <input
        onChange={(e) => searchHandler(e.target.value)}
        style={{ boxShadow: "0 0 0 0.5px #E2E2E2" }}
        className="h-[47px] rounded-[10px] pl-11 p-[16px] w-full focus:outline-[#1FA45B] font-[400] text-[14px]"
        placeholder="Search by Categories"
        type="text"
      />
      <IoSearchOutline
        className="absolute text-[#868686] top-3 left-3"
        size={22}
      />
    </div>
  );
};

export default SearchCategory;
