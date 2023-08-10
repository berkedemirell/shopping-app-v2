import { Link, useNavigate } from "react-router-dom";
import Cart from "./Cart";
import logo from "../style/logo.png";
import { useContext, useState } from "react";
import DataContext from "../context/DataContext";

const Nav = () => {
  const { currentUser, handleChange, handleSubmitCat, favs, cart,cats } =
    useContext(DataContext);
  const [isAcc, setIsAcc] = useState(false);
  const [isCart, setIsCart] = useState(false);
  const navigate = useNavigate();
  const handleAcc = () => {
    setIsAcc((prev) => !prev);
    setIsCart(false);
  };

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
  return (
    <div className="text-slate-200 bg-gradient-to-r from-nav to-nav2 flex flex-row justify-between p-2 items-center font-rem tracking-wider">
      <div className="flex flex-row items-center gap-2 pl-4">
        <Link to="/">
          <img
            src={logo}
            alt=""
            width={75}
            height={75}
            className="rounded-full hover:scale-110 transition-all duration-500"
          />
        </Link>
        <p className="text-amber-300">
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
            className="border border-amber-200 pl-1 rounded-tl-md rounded-bl-md text-slate-50 text-md font-semibold p-1 w-search-input h-8 bg-gradient-to-r from-nav to-nav2"
            onChange={handleChange}
          />
          <button className="">
            <Link
              to={cats.length === 0 ? `/` : `/search`}
              onClick={handleSubmitCat}
              className="bg-fuchsia-800 pl-4 pr-4 p-2 rounded-md font-bold hover:bg-fuchsia-950 active:bg-fuchsia-800 transition-all duration-200"
            >
              Search
            </Link>
          </button>
        </div>
      </div>
      <div className="pr-4">
        <div className="flex flex-row gap-6 text-lg font-semibold items-center relative">
          <Link
            to="/products"
            className="hover:opacity-70 transition-all duration-500"
          >
            Products
          </Link>
          {currentUser?.length !== 0 && (
            <div className="">
              <button
                className="hover:opacity-70 transition-all duration-500 flex flex-row items-center gap-1"
                onClick={handleCart}
              >
                Cart({cart?.length}){" "}
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
                className="rounded-full h-12 w-12"
              />
            </button>
          )}
          {isAcc && (
            <div className="flex flex-col gap-2 absolute top-14 left-24 bg-slate-800 p-4 rounded-lg z-10">
              <Link
                to="/account/favourites"
                className="hover:opacity-70 transition-all duration-500"
                onClick={() => setIsAcc(false)}
              >
                Favourites({favs?.length})
              </Link>
              <Link
                to="/"
                className="hover:opacity-70 transition-all duration-500"
              >
                Account
              </Link>
              <Link
                to="/"
                className="hover:opacity-70 transition-all duration-500"
                onClick={handleLogout}
              >
                Logout
              </Link>
            </div>
          )}
          {currentUser?.length === 0 && (
            <>
              <Link
                to="/login"
                className="hover:opacity-70 transition-all duration-500"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="hover:opacity-70 transition-all duration-500"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
