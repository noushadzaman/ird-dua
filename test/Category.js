import getDb from "@/sqlite";
import CategoryButton from "../components/btns/CategoryButton";
import SubCategory from "./SubCategory";
import clsx from "clsx";

const Category = async ({ cat, queryCat, querySubcat, queryDua }) => {
  const db = await getDb();
  const subCategory = await db.all(
    "SELECT * FROM sub_category WHERE cat_id = ?",
    [cat.cat_id]
  );

  return (
    <div className="block">
      <CategoryButton cat={cat} />
      <div className={clsx(cat.cat_id != queryCat ? `hidden` : ``)}>
        {subCategory.map((subCat) => (
          <SubCategory
            key={subCat.id}
            subCat={subCat}
            querySubcat={querySubcat}
            queryDua={queryDua}
          />
        ))}
      </div>
    </div>
  );
};

export default Category;
