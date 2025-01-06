import getDb from "@/sqlite";
import "@/app/globals.css";
import Cats from "@/components/Cats";
import DuaContainer from "@/components/DuaContainer";

export default function Post({
  cats,
  subcats,
  duasName,
  duas,
  querycat,
  querySubcat,
}) {
  // console.log("Category ID:", querycat);
  // console.log("Subcategory ID:", querySubcat);
  // console.log("subcats", subcats);
  // console.log(cats, subcats, duasName);
  console.log(duas);

  return (
    <div className="flex">
      <Cats
        cats={cats}
        subcats={subcats}
        duasName={duasName}
        querycat={querycat}
        querySubcat={querySubcat}
      />
      <DuaContainer subcats={subcats} duas={duas} />
    </div>
  );
}

export async function getStaticPaths() {
  const db = await getDb();
  const categories = await db.all("SELECT * FROM category");
  const paths = [];

  for (const cat of categories) {
    const subcats = await db.all(
      "SELECT * FROM sub_category WHERE cat_id = ?",
      [cat.cat_id]
    );
    // Generate paths for each subcategory
    subcats.forEach((subcat) => {
      paths.push({
        params: {
          id: cat.cat_id.toString(),
          subcatId: subcat.subcat_id.toString(),
        },
      });
    });
  }
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const db = await getDb();
  const cats = await db.all("SELECT * FROM category");
  const subcats = await db.all("SELECT * FROM sub_category");
  const duasName = await db.all("SELECT * FROM dua WHERE subcat_id = ?", [
    params.subcatId,
  ]);
  const duas = await db.all("SELECT * FROM dua WHERE cat_id = ?", [params.id]);

  return {
    props: {
      cats,
      subcats,
      duasName,
      duas,
      querycat: params.id,
      querySubcat: params.subcatId,
    },
  };
}
