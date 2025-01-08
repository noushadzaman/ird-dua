"use client";

import { useEffect, useState } from "react";
import CategoryButton from "./btns/CategoryButton";
import SubCats from "./SubCats";
import { useSearchParams } from "next/navigation";

const Cats = ({ cats, subcats, duas, querycat, querySubcat }) => {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(null);
  const [catsData, setCatsData] = useState(cats);

  useEffect(() => {
    setQuery(searchParams.get("search-cat"));
  }, [searchParams.get("search-cat")]);

  useEffect(() => {
    if (query) {
      setCatsData(
        cats.filter((cat) =>
          cat.cat_name_en.toLowerCase().includes(query.toLowerCase())
        )
      );
    } else {
      setCatsData(cats);
    }
  }, [query]);

  return (
    <div className="px-[15px] pt-[15px] pb-[15px] overflow-y-scroll h-[100vh] md:h-[70vh]">
      {catsData.map((cat) => (
        <div key={cat.cat_id} className="">
          <CategoryButton cat={cat} subcats={subcats} />
          {cat.cat_id == querycat ? (
            <SubCats
              subcats={subcats.filter((subcat) => subcat.cat_id == querycat)}
              querycat={querycat}
              querySubcat={querySubcat}
              duas={duas}
            />
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default Cats;
