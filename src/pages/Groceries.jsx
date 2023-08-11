import { useContext } from "react";
import DataContext from "../context/DataContext";
import { Link } from "react-router-dom";



const Groceries = () => {
    const {groceries, addToFav, addToCart} = useContext(DataContext);

  return (
    <div className="w-screen h-fit font-rem bg-cat2">
    <div className="grid grid-cols-6 gap-4 p-10 lg:grid-cols-4 md:flex md:flex-row md:flex-wrap">
      {groceries.map((g, i) => {
        return (
          <div key={i} className="border border-slate-800 xxxs:p-1 rounded-lg bg-card xxxs:flex-col xxxs:h-fit ssm:flex ssm:gap-2 ssm:p-4 ssm:items-center ssm:justify-center ssm:w-fit xs:h-36">
            <div>
              <img src={g.thumbnail} alt="" width={400} height={400} className="rounded-lg h-52 sm:w-60 ssm:w-36 xs:h-32"/>
            </div>
            <div className='font-bold mt-2 text-slate-950 h-24'>
              <h1 className="text-center xs:text-sm uppercase xxs:text-xs">{g.category}</h1>
              <h1 className="text-center ssm:w-36 xs:text-sm xxs:text-xs">{g.title}</h1>
              <h1 className="text-center xs:text-sm xxs:text-xs">${g.price}</h1>
            </div>
            <div className="flex flex-row ssm:flex-col items-center justify-center text-sm xxxs:gap-2 xxxs:mb-0 gap-4 text-slate-950 mb-4 font-semibold">
              <Link to={`/product/${g.id}`} className="underline md:text-lg xs:text-xs">Details</Link>
              <button className="underline md:text-lg xs:text-xs" id={g.id} onClick={addToCart}>Add to Cart</button>
              <button
                  className="text-center text-md md:text-2xl xs:text-lg"
                  id={g.id}
                  onClick={addToFav}
                >
                  <ion-icon id={g.id} name="heart-outline"></ion-icon>
                </button>
            </div>
          </div>
        );
      })}
    </div>
  </div>
  )
}

export default Groceries