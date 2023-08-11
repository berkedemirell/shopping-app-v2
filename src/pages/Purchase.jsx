import { useContext, useState } from "react";
import DataContext from "../context/DataContext";
import { Link } from "react-router-dom";
import SuccessPayment from "../components/SuccessPayment";
import Discount from "../components/Discount";

const Purchase = () => {
  const { cart, handleDeleteCart, addToCart,setCart,isDiscounted,total,selectedCode } = useContext(DataContext);
  const [error, setError] = useState('')
  const [isPaid, setIsPaid] = useState(false)
  // const splittedNumber = info?.cardNumber.match(/.{1,4}/g);
  // const newNumber = splittedNumber?.join(" ");
  const [cardInputs, setCardInputs] = useState({
    cardHolder: "",
    cardNumber: "",
    cvv: "",
    month: "",
    year: "",
  });

  const cardInfo = [
    {
      cardHolder: "Berke Demirel",
      cardNumber: "1234 1234 1234 1234",
      cvv: "123",
      month: "02",
      year: "25",
    },
    {
      cardHolder: "Tom Bombadil",
      cardNumber: "3131 1313 3131 3131",
      cvv: "133",
      month: "05",
      year: "26",
    },
    {
      cardHolder: "asd asd",
      cardNumber: "1234",
      cvv: "144",
      month: "02",
      year: "29",
    },
  ];

  const divided = cardInputs?.cardNumber?.match(/.{1,4}/g)?.join(" ") || null;

  const selectedCard =
    cardInfo?.filter((card) => card.cvv === cardInputs.cvv)[0] || null;

  const handleChange = (e) => {
    setCardInputs({ ...cardInputs, [e.target.name]: e.target.value });
  };

  const handlePayment = (e) => {
    e.preventDefault();
    if (
      Object.values(cardInputs)
        .map((val) => val.length === 0)
        .includes(true)
    ) {
      setError('Fill all empty spaces')
    } else if (
      cardInputs?.cardHolder !== selectedCard?.cardHolder ||
      divided !== selectedCard?.cardNumber ||
      cardInputs?.cvv !== selectedCard?.cvv ||
      cardInputs?.month !== selectedCard?.month ||
      cardInputs?.year !== selectedCard?.year
    ) {
      setError('Wrong card information')
    }else if(cart?.length === 0) {
      setError('Your cart is empty')
    }
     else {
      setCart([])
      setIsPaid(true)
    }

  };
  
  if(error.length !== 0) {
    setTimeout(() => {
      setError('')
    },5000)
  } 

  return (
    <div className="font-mono">
    {!isPaid ? <div className="p-10 xxs:p-4 flex flex-row md:flex-col md:items-center items-start justif-center w-full gap-12 font-rem">
      {cart?.length !== 0 ? <div className="w-1/2 ml-4 md:w-full">
        {cart?.map((c, i) => {
          return (
            <div key={i}>
              <div className="flex flex-row items-center gap-12 mb-2 xxs:gap-6 p-2 border-b border-slate-400">
                <div className="text-lg font-bold xxs:text-xs">{i + 1}.</div>
                <div className="ssm:hidden">
                  <img
                    src={c.thumbnail}
                    alt=""
                    className="w-14 h-14 ssm:w-14 ssm:h-8 ssm:h-6 rounded-full"
                  />
                </div>
                <div className="w-40 ssm:w-24">
                  <p className="text-sm font-bold text-slate-600 xxs:text-xs xxs:w-10">
                    <Link to={`/product/${c?.id}`}>{c?.title}</Link>
                  </p>
                </div>
                <div className="w-20 text-center xs:w-10">
                  <p className="text-sm font-bold text-slate-800 xxs:text-xs xxs:w-10">
                    ${c?.price}
                  </p>
                </div>
                <div className="flex flex-row gap-4 xs:w-20">
                  <button
                    className="text-red-800 font-bold xxs:text-xs"
                    id={i}
                    onClick={handleDeleteCart}
                  >
                    Delete
                  </button>
                  <button
                    className="text-green-900 font-bold xxs:text-xs"
                    id={c.id}
                    onClick={addToCart}
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          );
        })}
        <div className="mt-4 text-end p-4">
          <div><Discount/></div>
          <p className={`text-indigo-700 font-bold text-lg uppercase xxs:text-sm ${isDiscounted ? 'line-through' : ''}`} id="amount">Total Amount: ${total}</p>
          {isDiscounted && <p className="text-indigo-700 font-bold text-lg uppercase xxs:text-sm" id="discounted-amount">Discounted price(%{selectedCode?.rate*100}): ${(Number(total)) - (Number(total) * Number((selectedCode?.rate)))}</p>}
        </div>
      </div> : 
      <div className="w-1/2 sm:full md:w-full p-4 text-center">
          <p className="font-bold text-slate-500 uppercase">Your cart is empty</p>
        </div>}
      <div className="w-1/2 sm:w-full md:w-full mt-6 xs:mt-0">
        <form className="flex flex-col gap-4 items-start sm:justify-start sm:items-start ml-24 xs:ml-4">
          <div className="flex flex-col">
            <label
              htmlFor="name"
              className="text-xs uppercase font-bold text-indigo-900"
            >
              Name on the Card:
            </label>
            <input
              type="text"
              name="cardHolder"
              id="name"
              className="w-cart h-8 border-2 border-indigo-900 rounded-lg p-1 font-bold text-indigo-900"
              placeholder="Name on the Card"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="card-number"
              className="text-xs uppercase font-bold text-indigo-900"
            >
              Card Number:
            </label>
            <input
              type="number"
              name="cardNumber"
              id="card-number"
              className="w-cart h-8 border-2 border-indigo-900 rounded-lg p-1 font-bold text-indigo-900"
              placeholder="Card Number"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="cvv"
              className="text-xs uppercase font-bold text-indigo-900"
            >
              Cvv:
            </label>
            <input
              type="number"
              name="cvv"
              id="cvv"
              className="w-cart h-8 border-2 border-indigo-900 rounded-lg p-1 font-bold text-indigo-900"
              placeholder="Cvv"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="month"
              className="text-xs uppercase font-bold text-indigo-900"
            >
              valid thru:
            </label>
            <div className="flex flex-row gap-2">
              <input
                type="number"
                name="month"
                id="month"
                maxLength={2}
                className="w-20 h-8 border-2 border-indigo-900 rounded-lg p-1 font-bold text-indigo-900"
                placeholder="MM"
                onChange={handleChange}
              />
              <input
                type="number"
                id="year"
                name="year"
                maxLength={2}
                className="w-20 h-8 border-2 border-indigo-900 rounded-lg p-1 font-bold text-indigo-900"
                placeholder="YY"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="h-1 text-center font-bold text-xs uppercase text-red-800"><p>{error}</p></div>
          <div className="mt-4">
            <button
              className="border border-indigo-700 p-2 pr-10 pl-10 rounded-lg font-bold bg-indigo-900 text-slate-50 hover:opacity-70 transition-all duration-500 active:opacity-100"
              onClick={handlePayment}
            >
              Pay
            </button>
          </div>
        </form>
      </div>
    </div> : <SuccessPayment/>}
    </div>
  );
};

export default Purchase;
