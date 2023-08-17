import { useContext } from "react";
import DataContext from "../context/DataContext";
import { Link } from "react-router-dom";
import EmptyCard from "./EmptyCard";
/* eslint-disable react/prop-types */

const Cart = (props) => {
  const {cart, handleDeleteCart, addToCart } = useContext(DataContext);
  const total = cart?.map(p => p?.price)?.reduce((a,b) => a+b,0)

  const closeDrops = () => {
    props.setIsCart(false)
    props.setIsAcc(false)
  }
  return (
    <div className="absolute xl:w-cartl xl:text-lg xl:top-20 xl:-left-72 -left-44 border no-scrollbar xxs:h-carth2 h-carth overflow-auto top-10 ssm:w-cart2 z-10 border-slate-200 p-4 ssm:p-2 w-cart bg-indigo-200 text-sky-800 rounded-lg text-sm">
      {cart?.length !== 0 ? <div>
      { cart?.map((pro, i) => {
            return (
              <div key={i} className="border-b border-slate-700 mb-2 pt-2 pb-2">
                <div className="flex flex-row items-center justify-between pl-4 pr-4 ssm:pl-1 ssm:pr-1">
                  <div>
                    <p className="w-title xl:w-64 ssm:text-xs"><Link to={`/product/${pro.id}`}>{pro.title}</Link></p>
                  </div>
                  <div className="flex flex-row gap-2 text-lg">
                    <button id={i} className="text-2xl ssm:text-xl" onClick={handleDeleteCart}>-</button>
                    <button id={pro.id} className="text-2xl ssm:text-xl" onClick={addToCart}>+</button>
                  </div>
                  <div>
                    <p className="w-delete ssm:text-xs">${pro?.price}</p>
                  </div>
                </div>
              </div>
            );
          })}
      <div className="mt-6 pr-4 pl-4 xl:text-xl text-end text-lg text-green-900 underline ssm:text-sm">
        <div>
          <p>Total Amount: ${total}</p>
        </div>
      </div>
      <div className="text-center mt-6 mb-2">
        <Link to='/payment' className="p-2 mt-4 xl:text-xl rounded-lg bg-violet-400 font-bold pl-4 pr-4 cursor-pointer hover:bg-violet-600 hover:text-slate-50 transition-all duration-500 active:bg-violet-400 ssm:text-xs" onClick={closeDrops}>
          Purchase
        </Link>
      </div>
      </div> : <EmptyCard setIsCart={props.setIsCart}/>}
    </div>
  );
};

export default Cart;
