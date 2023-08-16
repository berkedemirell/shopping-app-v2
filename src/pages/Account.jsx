import { useContext } from "react";
import DataContext from "../context/DataContext";
import { Link } from "react-router-dom";

const Account = () => {
  const { currentUser, last } = useContext(DataContext);

  console.log(last);
  return (
    <div className="flex flex-row items-center gap-36 font-rem p-12 md:flex-col md:gap-4">
      <div className="flex flex-col justify-center items-center text-indigo-800">
        <div>
          <img
            src={currentUser.image}
            alt=""
            className="w-52 h-52 rounded-full"
          />
        </div>
        <div className="mt-2">
          <p className="text-lg">{currentUser.username}</p>
        </div>
        <div>
          <p className="text-lg">{currentUser.email}</p>
        </div>
        <div className="mt-2">
          <div className="flex flex-row gap-4 underline font-bold">
            <Link to="/payment">Cart</Link>
            <Link to="favourites">Favs</Link>
            <Link to="/products">Products</Link>
          </div>
        </div>
      </div>
      <div>
        <p className="text-xl font-bold mb-4 text-indigo-800">Recently viewed products:</p>
        <div className="flex flex-row gap-10 ssm:flex-col">
          {last?.map((l, i) => {
            return <div key={i} className="flex flex-col bg-gradient-to-r text-slate-50 from-nav to-nav2 items-center border border-indigo-400 p-6 rounded-lg">
                    <div><img src={l.thumbnail} alt="" className="w-32 h-32 rounded-full"/></div>
                    <div className="text-center mt-2 font-bold">
                        <p>{l.title}</p>
                        <p>${l.price}</p>
                        <p>{l.rating}/5</p>
                    </div>
                    <div><Link to={`/product/${l.id}`} className="underline font-bold">Details</Link></div>
                </div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Account;
