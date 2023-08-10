import { useContext } from "react";
import DataContext from "../context/DataContext";
import { Link } from "react-router-dom";



const Decoration = () => {
    const {deco, addToFav, addToCart} = useContext(DataContext);
  return (
    <div className="w-screen h-fit font-rem bg-cat2">
    <div className="grid grid-cols-6 gap-4 p-10">
      {deco.map((d, i) => {
        return (
          <div key={i} className="border border-slate-800 rounded-lg bg-card">
            <div>
              <img src={d.thumbnail} alt="" width={400} height={400} className="rounded-lg h-52"/>
            </div>
            <div className='font-bold mt-2 text-slate-950 h-24'>
              <h1 className="text-center">{d.category.name}</h1>
              <h1 className="text-center">{d.title}</h1>
              <h1 className="text-center">${d.price}</h1>
            </div>
            <div className="flex flex-row items-center justify-center text-sm gap-4 text-slate-950 mb-4 font-semibold">
              <Link to={`/product/${d.id}`} className="underline">Details</Link>
              <button className="underline" id={d.id} onClick={addToCart}>Add to Cart</button>
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
  )
}

export default Decoration