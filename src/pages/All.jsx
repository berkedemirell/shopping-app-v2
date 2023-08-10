import { useContext } from "react";
import DataContext from "../context/DataContext";
import { Link } from "react-router-dom";

const All = () => {
    const {products, addToFav, addToCart} = useContext(DataContext);
  return (
    <div className="w-screen h-fit font-rem bg-shoes">
        <div className="grid grid-cols-6 gap-4 p-10">
          {products?.map((pro, i) => {
            return (
              <div key={i} className="border border-slate-800 rounded-lg bg-shoe-card">
                <div>
                  <img src={pro.thumbnail} alt="" width={300} height={200} className="rounded-lg h-52 p-2"/>
                </div>
                <div className='font-bold mt-2 text-slate-950 h-24'>
                  <h1 className="text-center">{pro.category.name}</h1>
                  <h1 className="text-center">{pro.title}</h1>
                  <h1 className="text-center">${pro.price}</h1>
                </div>
                <div className="flex flex-row items-center text-sm justify-center gap-4 text-slate-950 mb-4 font-semibold">
                  <Link to={`/product/${pro.id}`} className="underline" id={pro.id}>Details</Link>
                  <button className="underline" id={pro.id} onClick={addToCart}>Add to Cart</button>
                  <button
                  className="text-center text-md"
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