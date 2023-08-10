import { useContext } from "react";
import DataContext from "../context/DataContext";
import { Link } from "react-router-dom";

const Favs = () => {
  const { favs, handleDeleteFavs } = useContext(DataContext);
  return (
    <div>
      <div className="mt-10 mb-10 font-rem">
        {favs?.map((fav, i) => {
          return (
            <div key={i} className="flex hover:bg-slate-200 flex-row text-indigo-800 items-center justify-evenly pb-4 pt-4 uppercase font-bold border-b border-slate-400">
              <div>
                <img src={fav.thumbnail} alt="" className="w-favs-i h-favs-i rounded-full"/>
              </div>
              <div>
                <h1 className="w-cart hover:text-indigo-400 transition-all duration-500"><Link to={`/product/${fav?.id}`}>{fav.title}</Link></h1>
              </div>
              <div>
                <h1 className="w-12">${fav.price}</h1>
              </div>
              <div>
                <h1 className="w-12">{fav.rating}/5</h1>
              </div>
              <button id={i} className="text-red-800 font-bold w-12" onClick={handleDeleteFavs}>Delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Favs;
