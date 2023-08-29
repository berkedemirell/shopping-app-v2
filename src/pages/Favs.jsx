import { useContext } from "react";
import DataContext from "../context/DataContext";
import { Link } from "react-router-dom";

const Favs = () => {
  const { favs, handleDeleteFavs, isDark } = useContext(DataContext);
  return (
    <div className={`${favs?.length > 3 ? 'h-fit' : 'h-screen'} p-10 font-rem ${isDark ? 'bg-slate-500' : ''}`}>
      {favs?.length !== 0 ? <div className="font-rem">
        {favs?.map((fav, i) => {
          return (
            <div key={i} className={`flex xxs:capitalize xxs:font-semibold flex-row ${isDark ? 'text-indigo-100' : 'text-indigo-800'} items-center justify-evenly pb-4 pt-4 xxs:p-2 uppercase font-bold border-b border-slate-400`}>
              <div>
                <img src={fav.thumbnail} alt="" className="w-favs-i h-favs-i rounded-full xs:w-12 xs:h-12 xxxs:w-6 xxxs:h-6"/>
              </div>
              <div>
                <h1 className="w-cart sm:w-24 xs:text-xs xxxs:w-10 hover:text-indigo-400 xxs:w-14 sm:text-sm transition-all duration-500"><Link to={`/product/${fav?.id}`}>{fav.title}</Link></h1>
              </div>
              <div>
                <h1 className="w-12 sm:text-xs xxs:w-8 xxxs:w-6">${fav.price}</h1>
              </div>
              <div>
                <h1 className="w-12 sm:text-xs xxs:w-8 xxxs:4">{fav.rating}/5</h1>
              </div>
              <button id={i} className="text-red-800 font-bold w-12 sm:text-sm xxs:text-xs" onClick={handleDeleteFavs}>Delete</button>
            </div>
          );
        })}
      </div> : <div className="flex flex-col items-center justify-start h-screen">
        
          <div className={`mt-12 text-md ${isDark ? 'text-slate-100' : 'text-slate-500'} font-bold uppercase xxxs:text-xs`}>No product found in your favourites</div>
        
        </div>}
    </div>
  );
};

export default Favs;
