import { useContext } from "react";
import DataContext from "../context/DataContext";
import { Link } from "react-router-dom";

const Shoes = () => {
  const { phones,addToFav, addToCart } = useContext(DataContext);
  return (
    <div className="w-screen h-fit font-rem bg-shoes">
      <div className="grid grid-cols-6 gap-4 p-10">
        {phones.map((shoe, i) => {
          return (
            <div key={i} className="border border-slate-800 rounded-lg bg-shoe-card">
              <div>
                <img src={shoe.thumbnail} alt="" width={400} height={400} className="rounded-lg h-52"/>
              </div>
              <div className='font-bold mt-2 text-slate-950 h-24'>
                <h1 className="text-center">{shoe.category.name}</h1>
                <h1 className="text-center">{shoe.title}</h1>
                <h1 className="text-center">${shoe.price}</h1>
              </div>
              <div className="flex flex-row items-center text-sm justify-center gap-4 text-slate-950 mb-4 font-semibold">
                <Link to={`/product/${shoe.id}`} className="underline">Details</Link>
                <button className="underline" id={shoe.id} onClick={addToCart}>Add to Cart</button>
                <button
                  className="text-center text-md"
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
