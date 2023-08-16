import React, { Suspense, useContext, useState } from "react";
import DataContext from "../context/DataContext";
import { Link } from "react-router-dom";
import Paginate from "../components/Paginate";
const Lazy = React.lazy(() => import ('../components/LazyImage'))

const All = () => {
    const {products, addToFav, addToCart,indexOfFirstProduct, indexOfLastProduct, addToLasts} = useContext(DataContext);
    const [sort, setSort] = useState(false)
    const [sort2, setSort2] = useState(false)

    const asd = products.map((lap) => lap);
    const asd2 = products.map((lap) => lap);
  
    const newArrayCte = asd.sort((a, b) => a.price - b.price);
    const newArrayEtc = asd2.sort((a, b) => b.price - a.price);
  
  
    const handleSort = () => {
      setSort((prev) => !prev)
    }
    const handleSort2 = () => {
      setSort2((prev) => !prev)
    }
    const posts = (sort && newArrayCte || sort2 && newArrayEtc || products).slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <div className="w-screen h-fit font-rem bg-shoes">
      <div className="p-2 ml-8">
        <div className="flex flex-row items-center gap-2 text-red-900 font-bold">
          <input type="checkbox" className="" id="cte" onChange={handleSort} disabled={sort2 ? true : false}/>
          <label htmlFor="cte">Sort by price (cheap to expensive)</label>
        </div>
        <div className="flex flex-row items-center gap-2 text-red-900 font-bold">
          <input type="checkbox" className="" id="etc" onChange={handleSort2} disabled={sort ? true : false}/>
          <label htmlFor="etc">Sort by price (expensive to cheap)</label>
        </div>
      </div>
        <div className="grid grid-cols-6 gap-4 p-10 md:p-4 lg:grid-cols-4 md:flex md:flex-row md:flex-wrap">
          {(posts)?.map((pro, i) => {
            return (
              <div key={i} className="border ssm:flex ssm:gap-2 ssm:p-4 ssm:items-center ssm:justify-center xxxs:flex-col xxxs:h-fit xxxs:p-1 border-slate-800 rounded-lg bg-shoe-card ssm:w-fit xs:h-36">
                <div className="">
                  <Suspense fallback={<div><div className="load2"></div></div>}><Lazy imgSrc={pro.thumbnail}/></Suspense>
                </div>
                <div className='font-bold mt-2 text-slate-950 h-24 mb-6'>
                  <h1 className="text-center uppercase xs:text-sm xxs:text-xs">{pro.category}</h1>
                  <h1 className="text-center ssm:w-36 xs:text-sm xxs:text-xs">{pro.title}</h1>
                  <h1 className="text-center xs:text-sm">${pro.price}</h1>
                </div>
                <div className="flex ssm:flex-col flex-row items-center text-sm justify-center xxxs:gap-2 xxxs:mb-0 gap-4 text-slate-950 mb-4 font-semibold">
                  <Link to={`/product/${pro.id}`} className="underline md:text-lg xs:text-xs" id={pro.id} onClick={addToLasts}>Details</Link>
                  <button className="underline md:text-lg xs:text-xs" id={pro.id} onClick={addToCart}>Add to Cart</button>
                  <button
                  className="text-center xs:text-lg text-md md:text-2xl"
                  id={pro.id}
                  onClick={addToFav}
                >
                  <ion-icon id={pro.id} name="heart-outline"></ion-icon>
                </button>
                </div>
              </div>
            );
          })}
        </div>
        <Paginate sort={sort} sort2={sort2} newArrayCte={newArrayCte} newArrayEtc={newArrayEtc}/>
      </div>
  )
}

export default All