import CategoryButton from "./btns/CategoryButton";
import SubCats from "./SubCats";

const Cats = ({ cats, subcats, duasName, querycat, querySubcat }) => {
  return (
    <div>
      {cats.map((cat) => (
        <div key={cat.cat_id} className="block">
          <CategoryButton cat={cat} subcats={subcats} />
          {cat.cat_id == querycat ? (
            <SubCats
              subcats={subcats.filter((subcat) => subcat.cat_id == querycat)}
              querycat={querycat}
              querySubcat={querySubcat}
              duasName={duasName}
            />
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default Cats;
