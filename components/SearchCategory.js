"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { IoSearchOutline } from "react-icons/io5";

const SearchCategory = ({ querycat, querySubcat }) => {
  const params = useSearchParams();
  const router = useRouter();

  const searchHandler = (string) => {
    const searchParams = new URLSearchParams(params);
    if (string !== "") {
      searchParams.set("search-cat", string);
    } else {
      searchParams.delete("search-cat");
    }
    const newUrl = `/category/${querycat}/${querySubcat}?${searchParams.toString()}`;
    router.push(newUrl);
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
