import { useContext } from "react";
import DataContext from "../context/DataContext";
import { Link } from "react-router-dom";

const Search = () => {
  const { searchedArray,addToFav,addToCart, addToLasts, isDark } = useContext(DataContext);

  const cond = isDark ? 'text-slate-50 bg-slate-950' : 'bg-cat2'
  const cond3 = isDark ? 'text-slate-50 bg-slate-700' : 'bg-card text-slate-900'

  return (
    <div className={`w-screen h-fit font-rem ${cond}`}>
      <div><p className={`p-2 text-xl ${isDark ? 'text-slate-200' : 'text-indigo-900'} font-bold`}>{searchedArray?.length} results found.</p></div>
    <div className="grid grid-cols-6 gap-4 p-10 lg:grid-cols-4 md:flex md:flex-row md:flex-wrap">
      {searchedArray?.length === 0 ? <div className="text-center mt-4 font-bold h-screen">
        <div className=""><h1 className="text-xl text-red-900 inline-block">Nothing Found...</h1></div>
      </div>
      : searchedArray.map((d, i) => {
        return (
          <div key={i} className={`border border-slate-800 rounded-lg ${cond3} xxxs:p-1 xxxs:w-fit xxxs:h-fit ssm:flex xxxs:gap-0 ssm:gap-2 xxxs:flex-col ssm:p-4 ssm:items-center ssm:justify-center ssm:w-fit xs:h-36`}>
            <div>
              <img src={d.thumbnail} alt="" width={400} height={400} className="rounded-lg h-52 sm:w-60 ssm:w-36 xs:h-32"/>
            </div>
            <div className='font-bold mt-2 h-24'>
              <h1 className="text-center xs:text-xm uppercase xxs:text-xs">{d.category}</h1>
              <h1 className="text-center ssm:w-36 xs:text-sm xxs:text-xs">{d.title}</h1>
              <h1 className="text-center xs:text-sm xxs:text-xs">${d.price}</h1>
            </div>
            <div className="flex flex-row items-center ssm:flex-col text-sm justify-center gap-4 mb-4 xxxs:m-0 xxs:gap-2 font-semibold">
              <Link to={`/product/${d.id}`} id={d.id} className="underline md:text-lg xs:text-xs xxs:text-xs" onClick={addToLasts}>Details</Link>
              <button className="underline text-center text-md md:text-2xl xs:text-lg md:text-sm xxs:text-xs" id={d.id} onClick={addToCart}>Add to Cart</button>
              <button
                  className="text-center text-md"
                  id={d.id}
                  onClick={addToFav}
                >
                  <ion-icon id={d.id} name="heart-outline"></ion-icon>
                </button>
            </div>
          </div>
        );
      })}
    </div>
  </div>
  );
};

export default Search;
