import { Link, useNavigate } from "react-router-dom";
import Cart from "./Cart";
import logo from "../style/logo.png";
import { useContext, useState } from "react";
import DataContext from "../context/DataContext";

const Nav = () => {
  const { currentUser, handleChange, handleSubmitCat, favs, cart, cats, handleDarkMode, isDark } =
    useContext(DataContext);
  const [isAcc, setIsAcc] = useState(false);
  const [isCart, setIsCart] = useState(false);
  const navigate = useNavigate();
  const handleAcc = () => {
    setIsAcc((prev) => !prev);
    setIsCart(false);
  };
  const [isDropDown, setIsDropDown] = useState(false)
  const handleCart = () => {
    setIsCart((prev) => !prev);
    setIsAcc(false);
  };
  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("user");
    navigate("/");
    window.location.reload();
  };

  const handleDropDown = (e) => {
    e.preventDefault();
    setIsDropDown((prev) => !prev)
  }

  const cond = isDark ? 'text-slate-50 bg-slate-800' : 'bg-gradient-to-r from-nav to-nav2 text-slate-200'


  const cartLength = cart.map((d) => d.quantity).reduce((a,b) => a+b,0)

  return (
    <div className={`xxs:pb-4 xl:p-6 xxs:pt-4 flex flex-row ${cond} justify-between p-2 xs:p-1 items-center font-rem tracking-wider`}>
      <div className="flex flex-row items-center gap-2 pl-4">
        <Link to="/">
          <img
            src={logo}
            alt=""
            width={75}
            height={75}
            className="rounded-full hover:scale-110 transition-all xl:w-24 duration-500 xs:h-14 xs:w-14 xxs:w-8 xxs:h-8"
          />
        </Link>
        <p className="text-amber-300 lg:hidden">
          {currentUser?.length === 0
            ? ""
            : `Happy Shopping, ${currentUser?.username}`}
        </p>
      </div>
      <div className="flex flex-col items-center gap-1 font-rem">
        <div>
          <input
            type="text"
            placeholder="Search"
            className="border border-amber-200 xl:h-12 xl:w-cart xxs:w-search-input4 xs:text-xs xs:h-6 pl-1 rounded-tl-md rounded-bl-md ssm:h-8 ssm:text-sm text-slate-50 ssm:w-search-input3 text-md md:w-search-input2 font-semibold p-1 w-search-input h-8 bg-gradient-to-r from-nav to-nav2"
            onChange={handleChange}
          />
          <button className="">
            <Link
              to={cats.length === 0 ? `/` : `/search`}
              onClick={handleSubmitCat}
              className="bg-fuchsia-800 ssm:text-xs xxs:hidden xl:p-4 pl-4 xs:p-1 pr-4 p-2 md:pr-2 md:pl-2 rounded-md font-bold hover:bg-fuchsia-950 active:bg-fuchsia-800 transition-all duration-200"
            >
              Search
            </Link>
          </button>
          <button className="">
            <Link
              to={cats.length === 0 ? `/` : `/search`}
              onClick={handleSubmitCat}
              className="bg-fuchsia-800 ssm:text-xs xxs:pl-2 xxs:pr-2 hidden xxs:rounded-tl-none xxs:rounded-bl-none xxs:block pl-4 xs:p-1 pr-4 p-2 md:pr-2 md:pl-2 rounded-md font-bold hover:bg-fuchsia-950 active:bg-fuchsia-800 transition-all duration-200"
            >
              X
            </Link>
          </button>
        </div>
      </div>
      <div className="pr-4">
        <div className="flex flex-row gap-6 text-lg font-semibold items-center relative">
          <Link
            to="/products"
            className="hover:opacity-70 transition-all duration-500 md:hidden xl:text-xl"
          >
            Products
          </Link>
          {currentUser?.length !== 0 && (
            <div className="">
              <button
                className="hover:opacity-70 xl:text-xl final:hidden xxs:text-xs transition-all duration-500 flex flex-row items-center gap-1 xs:text-sm"
                onClick={handleCart}
              >
                Cart({cartLength}){" "}
                <ion-icon
                  name="chevron-down-outline"
                  className="rotate-45"
                ></ion-icon>
              </button>
              {isCart && (
                <Cart
                  isAcc={isAcc}
                  isCart={isCart}
                  setIsAcc={setIsAcc}
                  setIsCart={setIsCart}
                />
              )}
            </div>
          )}
          {currentUser?.length !== 0 && (
            <button onClick={handleAcc} className="rounded-full">
              <img
                src={currentUser?.image}
                alt=""
                className="rounded-full xl:h-20 xl:w-20 h-12 w-12 xs:h-10 xs:w-10 xxs:h-8 xxs:w-8"
              />
            </button>
          )}
          {isAcc && (
            <div className={`flex flex-col items-start xs:text-sm gap-2 final:-left-24 final:top-10 absolute ${isDark ? 'bg-slate-600' : 'bg-slate-900'} md:-left-8 top-14 left-24  p-4 rounded-lg z-10`}>
              <Link
                to="/products"
                className="hover:opacity-70 transition-all duration-500 hidden md:block"
                onClick={() => setIsAcc(false)}
              >
                Products
              </Link>
              <Link
                to="/payment"
                className="hover:opacity-70 transition-all duration-500 hidden final:block"
                onClick={() => setIsAcc(false)}
              >
                Cart({cartLength})
              </Link>
              <Link
                to="/account/favourites"
                className="hover:opacity-70 transition-all xl:text-xl duration-500"
                onClick={() => setIsAcc(false)}
              >
                Favourites({favs?.length})
              </Link>
              <Link
                to="/account"
                className="hover:opacity-70 transition-all xl:text-xl duration-500"
              >
                Account
              </Link>
              <button
                className="hover:opacity-70 transition-all xl:text-xl duration-500"
                onClick={handleDarkMode}
              >
                {isDark ? 'Light Mode' : 'Dark Mode'}
              </button>
              <Link
                to="/"
                className="hover:opacity-70 transition-all xl:text-xl duration-500"
                onClick={handleLogout}
              >
                Logout
              </Link>
            </div>
          )}
          {currentUser?.length === 0 && (
            <>
              <button
                className="hover:opacity-70 transition-all xs:text-sm duration-500 md:hidden xxs:text-sm ssm:hidden"
                onClick={handleDarkMode}
              >
                Dark Mode
              </button>
              <Link
                to="/login"
                className="hover:opacity-70 transition-all xs:text-sm duration-500 xxs:text-sm ssm:hidden"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="hover:opacity-70 transition-all xs:text-sm duration-500 xxs:text-sm ssm:hidden"
              >
                Register
              </Link>
            </>
          )}
          {currentUser?.length === 0 && <div className="relative hidden ssm:block">
            <button className="rotate-90" onClick={handleDropDown}>...</button>
            {isDropDown && <div className="absolute w-36 z-10 -left-32 text-start rounded-lg top-8 p-4 bg-indigo-900 flex flex-col">
              <Link
                to="/products"
                className="hover:opacity-70 transition-all duration-500 hidden md:block xs:text-sm"
                onClick={() => setIsAcc(false)}
              >
                Products
              </Link>
              <button
                className="hover:opacity-70 transition-all text-start xs:text-sm duration-500 xxs:text-sm"
                onClick={handleDarkMode}
              >
                Dark Mode
              </button>
              <Link
                to="/login"
                className="hover:opacity-70 transition-all xs:text-sm duration-500"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="hover:opacity-70 transition-all xs:text-sm duration-500"
              >
                Register
              </Link>
            </div>}
          </div>}
        </div>
      </div>
    </div>
  );
};

export default Nav;
