import React, { Suspense ,useContext, useState } from "react";
import DataContext from "../context/DataContext";
import { Link } from "react-router-dom";

const Lazy = React.lazy(() => import ('../components/LazyImage'))

const Electronics = () => {
  const { laptops, addToFav, addToCart } = useContext(DataContext);

  const [sort, setSort] = useState(false)
  const [sort2, setSort2] = useState(false)

    const asd = laptops.map((lap) => lap);
    const asd2 = laptops.map((lap) => lap);
  
    const newArrayCte = asd.sort((a, b) => a.price - b.price);
    const newArrayEtc = asd2.sort((a, b) => b.price - a.price);
  
  
    const handleSort = () => {
      setSort((prev) => !prev)
    }
    const handleSort2 = () => {
      setSort2((prev) => !prev)
    }
  return (
    <div className="w-screen h-fit font-rem bg-cat2">
      <div className="p-2 ml-8">
        <div className="flex flex-row items-center gap-2 text-red-900 font-bold">
          <input type="checkbox" className="" id="cte" onChange={handleSort} disabled={sort2 ? true : false}/>
          <label htmlFor="cte">Sort by price (lower to higher)</label>
        </div>
        <div className="flex flex-row items-center gap-2 text-red-900 font-bold">
          <input type="checkbox" className="" id="etc" onChange={handleSort2} disabled={sort ? true : false}/>
          <label htmlFor="etc">Sort by price (higher to lower)</label>
        </div>
      </div>
      <div className="grid grid-cols-6 gap-4 p-10 lg:grid-cols-4 md:flex md:flex-row md:flex-wrap">
        {(sort && newArrayCte || sort2 && newArrayEtc || laptops)?.map((elect, i) => {
          return (
            <div
              key={i}
              className="rounded-lg bg-card ssm:flex xxxs:p-1 ssm:gap-2 ssm:p-4 ssm:items-center xxxs:flex-col xxxs:h-fit ssm:justify-center ssm:w-fit xs:h-36"
            >
              <div>
              <Suspense fallback={<div><div className="load2"></div></div>}><Lazy imgSrc={elect.thumbnail}/></Suspense>
              </div>
              <div className="font-bold mt-2 text-slate-950 h-24 xxxs:mt-1">
                <h1 className="text-center xs:text-sm uppercase xxs:text-xs">
                  {elect.category}
                </h1>
                <h1 className="text-center ssm:w-24 xs:text-sm xxs:text-xs">
                  {elect.title}
                </h1>
                <h1 className="text-center xs:text-sm xxs:text-xs">
                  ${elect.price}
                </h1>
              </div>
              <div className="flex flex-row ssm:flex-col items-center justify-center text-sm xxxs:gap-2 gap-4 text-slate-950 mb-4 xxxs:mb-0 font-semibold">
                <Link
                  to={`/product/${elect.id}`}
                  className="underline md:text-lg xs:text-xs"
                  id={elect.id}
                >
                  Details
                </Link>
                <button
                  className="underline md:text-lg xs:text-xs"
                  id={elect.id}
                  onClick={addToCart}
                >
                  Add to Cart
                </button>
                <button
                  className="text-center text-md md:text-2xl xs:text-lg"
                  id={elect.id}
                  onClick={addToFav}
                >
                  <ion-icon id={elect.id} name="heart-outline"></ion-icon>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Electronics;
