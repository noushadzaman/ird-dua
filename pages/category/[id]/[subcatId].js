import getDb from "@/sqlite";
import "@/app/globals.css";
import Cats from "@/components/Cats";
import DuaContainer from "@/components/DuaContainer";
import Sidebar from "@/components/Sidebar";

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
    <div className="flex gap-[33px] h-[100vh] overflow-y-hidden">
      {/* left sidebar*/}
      <Sidebar />
      {/* middle part */}
      <div className="flex flex-col">
        <nav className="flex justify-between my-[28px]">
          <h1 className="text-[24px] font-[600]">Dua Page</h1>
          <div className="flex items-center gap-[50px]">
            <input className="" type="text" />
            <div>{`:)`}</div>
          </div>
        </nav>

        <div className="flex gap-[33px]">
          <Cats
            cats={cats}
            subcats={subcats}
            duasName={duasName}
            querycat={querycat}
            querySubcat={querySubcat}
          />
          <DuaContainer subcats={subcats} duas={duas} />
        </div>
      </div>
      {/* right sidebar*/}
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
