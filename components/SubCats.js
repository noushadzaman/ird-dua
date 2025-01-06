import SubcatButton from "./btns/SubCategoryButton";

const SubCats = ({ subcats, querycat, querySubcat, duasName }) => {
  return (
    <>
      {subcats.map((subcat) => (
        <div key={subcat.id} className="block">
          <SubcatButton subcat={subcat} querycat={querycat} />
          {querySubcat == subcat.id ? (
            <>
              {duasName.map((duaName, i) => (
                <p className="ml-24" key={i}>
                  {duaName.dua_name_en}
                </p>
              ))}
            </>
          ) : null}
        </div>
      ))}
    </>
  );
};

export default SubCats;
