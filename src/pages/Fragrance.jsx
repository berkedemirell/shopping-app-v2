
import React, { Suspense,useContext, useState } from 'react'
import DataContext from '../context/DataContext';
import { Link } from 'react-router-dom';

const Lazy = React.lazy(() => import ('../components/LazyImage'))

const Fragrance = () => {
    const {frag, addToFav, addToCart, addToLasts, isDark} = useContext(DataContext);
    const [sort, setSort] = useState(false)
    const [sort2, setSort2] = useState(false)

    const cond = isDark ? 'text-slate-50 bg-slate-950' : 'bg-cat2'
    const cond2 = isDark ? 'text-slate-50' : 'text-red-900'
    const cond3 = isDark ? 'text-slate-50 bg-slate-700' : 'bg-card text-slate-900'

    const asd = frag.map((lap) => lap);
    const asd2 = frag.map((lap) => lap);
  
    const newArrayCte = asd.sort((a, b) => a.price - b.price);
    const newArrayEtc = asd2.sort((a, b) => b.price - a.price);
  
  
    const handleSort = () => {
      setSort((prev) => !prev)
    }
    const handleSort2 = () => {
      setSort2((prev) => !prev)
    }
  return (
    <div className={`w-screen h-fit font-rem ${cond}`}>
      <div className="p-2 ml-8">
        <div className={`flex flex-row items-center gap-2 text-red-900 font-bold ${cond2}`}>
          <input type="checkbox" className="" id="cte" onChange={handleSort} disabled={sort2 ? true : false}/>
          <label htmlFor="cte">Sort by price (cheap to expensive)</label>
        </div>
        <div className={`flex flex-row items-center gap-2 text-red-900 font-bold ${cond2}`}>
          <input type="checkbox" className="" id="etc" onChange={handleSort2} disabled={sort ? true : false}/>
          <label htmlFor="etc">Sort by price (cheap to expensive)</label>
        </div>
      </div>
      <div className="grid grid-cols-6 gap-4 p-10 lg:grid-cols-4 md:flex md:flex-row md:flex-wrap">
        {(sort && newArrayCte || sort2 && newArrayEtc || frag)?.map((fra, i) => {
          return (
            <div key={i} className={`border ssm:flex ssm:gap-2 ssm:p-2 xxxs:p-1 ssm:items-center xxxs:flex-col xxxs:h-fit ssm:justify-center border-slate-800 ${cond3} rounded-lg ssm:w-fit xs:h-36`}>
              <div>
              <Suspense fallback={<div><div className="load2"></div></div>}><Lazy imgSrc={fra.thumbnail}/></Suspense>
              </div>
              <div className='font-bold mt-2 h-24 mb-6'>
                <h1 className="text-center xs:text-sm uppercase xxs:text-xs">{fra.category}</h1>
                <h1 className="text-center ssm:w-36 xs:text-sm xxs:text-xs">{fra.title}</h1>
                <h1 className="text-center xs:text-sm xxs:text-xs">${fra.price}</h1>
              </div>
              <div className="flex flex-row items-center ssm:flex-col justify-center text-sm gap-4 xxxs:gap-2 xxxs:mb-0 mb-4 font-semibold">
                <Link to={`/product/${fra.id}`} className="underline md:text-lg xs:text-xs" id={fra.id} onClick={addToLasts}>Details</Link>
                <button className="underline md:text-lg xs:text-xs" id={fra.id} onClick={addToCart}>Add to Cart</button>
                <button
                  className="text-center text-md md:text-2xl xs:text-sm"
                  id={fra.id}
                  onClick={addToFav}
                >
                  <ion-icon id={fra.id} name="heart-outline"></ion-icon>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Fragrance