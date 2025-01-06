"use client";

import Link from "next/link";

const CategoryButton = ({ cat, subcats }) => {

  return (
    <Link
      href={`/category/${cat.cat_id}/${
        subcats.filter((subcat) => subcat.cat_id === cat.cat_id)[0].subcat_id
      }`}
    >
      {cat.cat_name_en}
    </Link>
  );
};

export default CategoryButton;
