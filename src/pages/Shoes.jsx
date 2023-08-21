import React, { useContext, useState, Suspense } from "react";
import DataContext from "../context/DataContext";
import { Link } from "react-router-dom";

const Lazy = React.lazy(() => import ('../components/LazyImage'))

const Shoes = () => {
  const { phones,addToFav, addToCart, addToLasts, isDark } = useContext(DataContext);
  const [sort, setSort] = useState(false)
  const [sort2, setSort2] = useState(false)
  

  const cond = isDark ? 'text-slate-50 bg-slate-950' : 'bg-shoes'
  const cond2 = isDark ? 'text-slate-50' : 'text-red-900'
  const cond3 = isDark ? 'text-slate-50 bg-slate-700' : 'bg-shoe-card text-slate-900'

    const asd = phones.map((lap) => lap);
    const asd2 = phones.map((lap) => lap);
  
    const newArrayCte = asd.sort((a, b) => a.price - b.price);
    const newArrayEtc = asd2.sort((a, b) => b.price - a.price);
  
  
    const handleSort = () => {
      setSort((prev) => !prev)
      setSort2(false);
    }
    const handleSort2 = () => {
      setSort2((prev) => !prev)
      setSort(false)
    }
  return (
    <div className={`w-screen h-fit font-rem ${cond}`}>
      <div className="p-2 ml-8">
        <div className={`flex flex-row items-center gap-2 font-bold ${cond2}`}>
          <input type="checkbox" className="" id="cte" onChange={handleSort} disabled={sort2 ? true : false}/>
          <label htmlFor="cte">Sort by price (lower to higher)</label>
        </div>
        <div className={`flex flex-row items-center gap-2 ${cond2} font-bold`}>
          <input type="checkbox" className="" id="etc" onChange={handleSort2} disabled={sort ? true : false}/>
          <label htmlFor="etc">Sort by price (higher to lower)</label>
        </div>
      </div>
      <div className="grid grid-cols-6 gap-4 p-10 lg:grid-cols-4 md:flex md:flex-row md:flex-wrap">
        {(sort && newArrayCte || sort2 && newArrayEtc || phones).map((shoe, i) => {
          return (
            <div key={i} className={`border ${cond3} border-slate-800 rounded-lg xxxs:p-1  xxxs:w-fit xxxs:h-fit ssm:flex xxxs:gap-0 ssm:gap-2 xxxs:flex-col ssm:p-4 ssm:items-center ssm:justify-center ssm:w-fit xs:h-36`}>
              <div>
              <Suspense fallback={<div><div className="load2"></div></div>}><Lazy imgSrc={shoe.thumbnail}/></Suspense>
              </div>
              <div className='font-bold mt-2 h-24'>
                <h1 className="text-center xs:text-xm uppercase xxs:text-xs">{shoe.category}</h1>
                <h1 className="text-center ssm:w-36 xs:text-sm xxs:text-xs">{shoe.title}</h1>
                <h1 className="text-center xs:text-sm xxs:text-xs">${shoe.price}</h1>
              </div>
              <div className="flex flex-row items-center ssm:flex-col text-sm justify-center gap-4 mb-4 xxxs:m-0 xxxs:gap-2 font-semibold">
                <Link to={`/product/${shoe.id}`} id={shoe.id} onClick={addToLasts} className="underline md:text-lg xs:text-xs">Details</Link>
                <button className="underline md:text-lg xs:text-xs" id={shoe.id} onClick={addToCart}>Add to Cart</button>
                <button
                  className="text-center text-md md:text-2xl xs:text-lg"
                  id={shoe.id}
                  onClick={addToFav}
                >
                  <ion-icon id={shoe.id} name="heart-outline"></ion-icon>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Shoes;
