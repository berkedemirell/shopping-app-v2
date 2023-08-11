import { useContext } from "react";
import DataContext from "../context/DataContext";
import { Link } from "react-router-dom";

const Shoes = () => {
  const { phones,addToFav, addToCart } = useContext(DataContext);
  return (
    <div className="w-screen h-fit font-rem bg-shoes">
      <div className="grid grid-cols-6 gap-4 p-10 lg:grid-cols-4 md:flex md:flex-row md:flex-wrap">
        {phones.map((shoe, i) => {
          return (
            <div key={i} className="border border-slate-800 rounded-lg bg-shoe-card ssm:flex ssm:gap-2 ssm:p-4 ssm:items-center ssm:justify-center ssm:w-fit xs:h-36">
              <div>
                <img src={shoe.thumbnail} alt="" width={400} height={400} className="rounded-lg xs:h-32 h-52 sm:w-60 ssm:w-36"/>
              </div>
              <div className='font-bold mt-2 text-slate-950 h-24'>
                <h1 className="text-center xs:text-xm uppercase xxs:text-xs">{shoe.category}</h1>
                <h1 className="text-center ssm:w-36 xs:text-sm xxs:text-xs">{shoe.title}</h1>
                <h1 className="text-center xs:text-sm xxs:text-xs">${shoe.price}</h1>
              </div>
              <div className="flex flex-row items-center ssm:flex-col text-sm justify-center gap-4 text-slate-950 mb-4 font-semibold">
                <Link to={`/product/${shoe.id}`} className="underline md:text-lg xs:text-xs">Details</Link>
                <button className="underline md:text-lg xs:text-xs" id={shoe.id} onClick={addToCart}>Add to Cart</button>
                <button
                  className="text-center text-md md:text-2xl xs:text-lg"
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
