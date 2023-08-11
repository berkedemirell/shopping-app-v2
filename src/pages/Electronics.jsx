import { useContext } from "react";
import DataContext from "../context/DataContext";
import { Link } from "react-router-dom";

const Electronics = () => {
  const { laptops, addToFav, addToCart } = useContext(DataContext);
  
  

  return (
    <div className="w-screen h-fit font-rem bg-cat2">
      <div className="grid grid-cols-6 gap-4 p-10 lg:grid-cols-4 md:flex md:flex-row md:flex-wrap">
        {laptops?.map((elect, i) => {
          return (
            <div key={i} className="rounded-lg bg-card ssm:flex xxxs:p-1 ssm:gap-2 ssm:p-4 ssm:items-center xxxs:flex-col xxxs:h-fit ssm:justify-center ssm:w-fit xs:h-36">
              <div>
                <img
                  src={elect.thumbnail}
                  alt=""
                  width={300}
                  height={200}
                  className="rounded-lg h-52 sm:w-60 ssm:w-36 xs:h-32"
                />
              </div>
              <div className="font-bold mt-2 text-slate-950 h-24 xxxs:mt-1">
                <h1 className="text-center xs:text-sm uppercase xxs:text-xs">{elect.category}</h1>
                <h1 className="text-center ssm:w-24 xs:text-sm xxs:text-xs">{elect.title}</h1>
                <h1 className="text-center xs:text-sm xxs:text-xs">${elect.price}</h1>
              </div>
              <div className="flex flex-row ssm:flex-col items-center justify-center text-sm xxxs:gap-2 gap-4 text-slate-950 mb-4 xxxs:mb-0 font-semibold">
                <Link
                  to={`/product/${elect.id}`}
                  className="underline md:text-lg xs:text-xs"
                  id={elect.id}
                >
                  Details
                </Link>
                <button className="underline md:text-lg xs:text-xs" id={elect.id} onClick={addToCart}>Add to Cart</button>
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
