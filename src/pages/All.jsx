import { useContext } from "react";
import DataContext from "../context/DataContext";
import { Link } from "react-router-dom";

const All = () => {
    const {products, addToFav, addToCart} = useContext(DataContext);
  return (
    <div className="w-screen h-fit font-rem bg-shoes">
        <div className="grid grid-cols-6 gap-4 p-10 md:p-4 lg:grid-cols-4 md:flex md:flex-row md:flex-wrap">
          {products?.map((pro, i) => {
            return (
              <div key={i} className="border ssm:flex ssm:gap-2 ssm:p-4 ssm:items-center ssm:justify-center xxxs:flex-col xxxs:h-fit xxxs:p-1 border-slate-800 rounded-lg bg-shoe-card ssm:w-fit xs:h-36">
                <div>
                  <img src={pro.thumbnail} alt="" className="rounded-lg sm:w-60 h-52 xs:h-28 p-2 ssm:w-36"/>
                </div>
                <div className='font-bold mt-2 text-slate-950 h-24'>
                  <h1 className="text-center uppercase xs:text-sm xxs:text-xs">{pro.category}</h1>
                  <h1 className="text-center ssm:w-36 xs:text-sm xxs:text-xs">{pro.title}</h1>
                  <h1 className="text-center xs:text-sm">${pro.price}</h1>
                </div>
                <div className="flex ssm:flex-col flex-row items-center text-sm justify-center xxxs:gap-2 xxxs:mb-0 gap-4 text-slate-950 mb-4 font-semibold">
                  <Link to={`/product/${pro.id}`} className="underline md:text-lg xs:text-xs" id={pro.id}>Details</Link>
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
      </div>
  )
}

export default All