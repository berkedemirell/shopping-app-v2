import { useContext } from "react";
import DataContext from "../context/DataContext";
import { Link } from "react-router-dom";
/* eslint-disable react/prop-types */

const Cart = (props) => {
  const {cart, handleDeleteCart, addToCart } = useContext(DataContext);
  const total = cart?.map(p => p.price)?.reduce((a,b) => a+b,0)

  const closeDrops = () => {
    props.setIsCart(false)
    props.setIsAcc(false)
  }
  return (
    <div className="absolute -left-44 border z-10 border-slate-200 p-4 w-cart bg-indigo-200 text-sky-800 rounded-lg text-sm">
      {cart?.length === 0
        ? "There is no any product in your cart."
        : cart?.map((pro, i) => {
            return (
              <div key={i} className="border-b border-slate-700 mb-2 pt-2 pb-2">
                <div className="flex flex-row items-center justify-between pl-4 pr-4">
                  <div>
                    <p className="w-title"><Link to={`/product/${pro.id}`}>{pro.title}</Link></p>
                  </div>
                  <div className="flex flex-row gap-2 text-lg">
                    <button id={i} className="text-2xl" onClick={handleDeleteCart}>-</button>
                    <button id={pro.id} className="text-2xl" onClick={addToCart}>+</button>
                  </div>
                  <div>
                    <p className="w-delete">${pro.price}</p>
                  </div>
                </div>
              </div>
            );
          })}
      <div className="mt-6 pr-4 pl-4 text-end text-lg text-green-900 underline">
        <div>
          <p>Total Amount: ${total}</p>
        </div>
      </div>
      <div className="text-center mt-6">
        <Link to='/payment' className="p-2 mt-4 rounded-lg bg-violet-400 font-bold pl-4 pr-4 cursor-pointer hover:bg-violet-600 hover:text-slate-50 transition-all duration-500 active:bg-violet-400" onClick={closeDrops}>
          Purchase
        </Link>
      </div>
    </div>
  );
};

export default Cart;
