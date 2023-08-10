import { useContext } from "react";
import DataContext from "../context/DataContext";
import { Link } from "react-router-dom";

const Electronics = () => {
  const { laptops, addToFav, addToCart } = useContext(DataContext);
  
  

  return (
    <div className="w-screen h-fit font-rem bg-cat2">
      <div className="grid grid-cols-6 gap-4 p-10">
        {laptops?.map((elect, i) => {
          return (
            <div key={i} className="rounded-lg bg-card">
              <div>
                <img
                  src={elect.thumbnail}
                  alt=""
                  width={300}
                  height={200}
                  className="rounded-lg h-52"
                />
              </div>
              <div className="font-bold mt-2 text-slate-950 h-24">
                <h1 className="text-center">{elect.category.name}</h1>
                <h1 className="text-center">{elect.title}</h1>
                <h1 className="text-center">${elect.price}</h1>
              </div>
              <div className="flex flex-row items-center justify-center text-sm gap-4 text-slate-950 mb-4 font-semibold">
                <Link
                  to={`/product/${elect.id}`}
                  className="underline"
                  id={elect.id}
                >
                  Details
                </Link>
                <button className="underline" id={elect.id} onClick={addToCart}>Add to Cart</button>
                <button
                  className="text-center text-md"
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
