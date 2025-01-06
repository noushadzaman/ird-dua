"use client";

import Link from "next/link";

const SubcatButton = ({ subcat, querycat }) => {
  return (
    <Link className="ml-5" href={`/category/${querycat}/${subcat.id}`}>
      {subcat.subcat_name_en}
    </Link>
  );
};

export default SubcatButton;
