import { Link } from "react-router-dom";
import shoe from "../style/phone.png";
import electronics from "../style/elect.png";
import furn from "../style/frag.png";
import all from "../style/all.png";
import decoration from "../style/decoration.png";
import skin from "../style/skin.png";
import groce from "../style/groceries.png";
import { useContext } from "react";
import DataContext from "../context/DataContext";

const Products = () => {
  const {isDark} = useContext(DataContext)
  const cond = isDark ? 'bg-slate-950 text-slate-50' : 'bg-gradient-to-r from-indigo-200 to-indigo-300'
  return (
    <div className={`w-full h-fit font-rem xl:text-3xl ${cond}`}>
      <div className="grid grid-cols-2 gap-4 p-14 sm:flex sm:flex-col">
        <Link
          to="/products/shoes"
          className={`flex lg:h-fit flex-row gap-2 xxxs:h-30 border border-slate-400 rounded-lg items-end hover:scale-105 transition-all duration-500 ${isDark ? 'bg-slate-800 text-slate-50' : 'bg-gradient-to-r from-slate-200 to-slate-300'} font-bold`}
        >
          <div>
            <img
              src={shoe}
              alt=""
              width={450}
              height={200}
              className="h-52 lg:h-40 w-pro-pic rounded-lg xxs:w-36 xxxs:h-32 xxxs:w-32"
            />
          </div>
          <div className="p-4">
            <h1 className="uppercase text-xs xl:text-lg">Smartphones</h1>
            <h1 className="text-md xxs:text-sm">See Products</h1>
            <h1 className="text-3xl text-end">&rarr;</h1>
          </div>
        </Link>
        <Link
          to="/products/electronics"
          className={`flex lg:h-fit flex-row gap-2 border xxxs:h-30 border-slate-400 rounded-lg items-end hover:scale-105 transition-all duration-500 ${isDark ? 'bg-slate-800 text-slate-50' : 'bg-gradient-to-r from-sky-600 to-sky-400'} text-slate-50 font-bold`}
        >
          <div>
            <img
              src={electronics}
              alt=""
              width={400}
              height={200}
              className="h-52 lg:h-40 w-pro-pic rounded-lg xxs:w-36 xxxs:w-32 xxxs:h-32"
            />
          </div>
          <div className="p-4">
            <h1 className="uppercase text-xs xl:text-lg">Laptops</h1>
            <h1 className="text-md xxs:text-sm ">See Products</h1>
            <h1 className="text-3xl text-end">&rarr;</h1>
          </div>
        </Link>
        <Link
          to="/products/fragrances"
          className={`flex lg:h-fit flex-row gap-2 border xxxs:h-30 border-slate-400 rounded-lg items-end hover:scale-105 transition-all duration-500 ${isDark ? 'bg-slate-800 text-slate-50' : 'bg-gradient-to-r from-sky-300 to-amber-400'} font-bold`}
        >
          <div>
            <img
              src={furn}
              alt=""
              width={450}
              height={200}
              className="h-52 lg:h-40 w-pro-pic rounded-lg xxs:w-36 xxxs:h-32 xxxs:w-32"
            />
          </div>
          <div className="p-4">
            <h1 className="uppercase text-xs xl:text-lg">Fragrances</h1>
            <h1 className="text-md xxs:text-sm">See Products</h1>
            <h1 className="text-3xl text-end">&rarr;</h1>
          </div>
        </Link>
        <Link
          to="/products/skincare"
          className={`flex lg:h-fit flex-row gap-2 border xxxs:h-30 border-slate-400 rounded-lg items-end hover:scale-105 transition-all duration-500 ${isDark ? 'text-slate-50 bg-slate-800' : 'bg-gradient-to-r from-sky-300 to-orange-200'} font-bold`}
        >
          <div>
            <img
              src={skin}
              alt=""
              width={450}
              height={200}
              className="h-52 lg:h-40 w-pro-pic rounded-lg xxs:w-36 xxxs:h-32 xxxs:w-32"
            />
          </div>
          <div className="p-4">
            <h1 className="uppercase text-xs xl:text-lg">Skincare</h1>
            <h1 className="text-md xxs:text-sm">See Products</h1>
            <h1 className="text-3xl text-end">&rarr;</h1>
          </div>
        </Link>
        <Link
          to="/products/groceries"
          className={`flex lg:h-fit flex-row col-start-1 gap-2 xxxs:h-30 border border-slate-400 rounded-lg items-end hover:scale-105 transition-all duration-500 ${isDark ? 'text-slate-50 bg-slate-800' : 'bg-gradient-to-r from-sky-300 to-groce-card'} font-bold`}
        >
          <div>
            <img
              src={groce}
              alt=""
              width={450}
              height={200}
              className="h-52 lg:h-40 w-pro-pic rounded-lg xxs:w-36 xxxs:h-32 xxxs:w-32"
            />
          </div>
          <div className="p-4">
            <h1 className="uppercase text-xs xl:text-lg">Groceries</h1>
            <h1 className="text-md xxs:text-sm">See Products</h1>
            <h1 className="text-3xl text-end">&rarr;</h1>
          </div>
        </Link>
        <Link
          to="/products/home-decoration"
          className={`flex lg:h-fit flex-row col-start-2 gap-2 xxxs:h-32 border border-slate-400 rounded-lg items-end hover:scale-105 transition-all duration-500 ${isDark ? 'text-slate-50 bg-slate-800' : 'bg-gradient-to-r from-sky-300 to-deco-card '} font-bold`}
        >
          <div>
            <img
              src={decoration}
              alt=""
              width={450}
              height={200}
              className="h-52 lg:h-40 w-pro-pic rounded-lg xxs:w-36 xxxs:h-32"
            />
          </div>
          <div className="p-4">
            <h1 className="uppercase text-xs xl:text-lg">Decoration</h1>
            <h1 className="text-md xxs:text-sm">See Products</h1>
            <h1 className="text-3xl text-end">&rarr;</h1>
          </div>
        </Link>
        <Link
          to="/products/all"
          className={`flex lg:h-fit flex-row gap-2 border border-slate-400 rounded-lg items-end hover:scale-105 transition-all duration-500 ${isDark ? 'text-slate-50 bg-slate-800' : ' bg-gradient-to-r from-sky-300 to-orange-300'} font-bold`}
        >
          <div>
            <img
              src={all}
              alt=""
              width={450}
              height={200}
              className="h-52 lg:h-40 w-pro-pic rounded-lg xxs:w-36 xxxs:w-32 xxxs:h-32"
            />
          </div>
          <div className="p-4">
            <h1 className="uppercase text-xs xl:text-lg">All</h1>
            <h1 className="text-md xxs:text-sm">See Products</h1>
            <h1 className="text-3xl text-end">&rarr;</h1>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Products;
