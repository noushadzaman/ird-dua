export const revalidate = false;
import getDb from "@/sqlite";
import Category from "./Category";

const Categories = async ({ queryCat, querySubcat, queryDua }) => {
  const db = await getDb();
  const categories = await db.all("SELECT * FROM category");
  // console.log("Data from database:", data);

  return (
    <div>
      {categories.map((cat) => (
        <Category
          key={cat._id}
          cat={cat}
          queryCat={queryCat}
          querySubcat={querySubcat}
          queryDua={queryDua}
        />
      ))}
    </div>
  );
};

export default Categories;
