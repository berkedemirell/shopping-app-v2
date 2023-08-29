import { useContext, useEffect, useState } from "react";
import codes from "../data/codes.js";
import DataContext from "../context/DataContext.jsx";

export const Discount = () => {
    const {setIsDiscounted,isDiscounted,selectedCode, setSelectedCode} = useContext(DataContext)

  const [code, setCode] = useState("");
  const handleChange = (e) => {
    setCode(e.target.value);
  };

  // const sselectedCode = () => {
  // } 
  
  useEffect(() => {
    setSelectedCode(codes.filter((c) => c.code === code)[0]);
  })

  // sselectedCode();

  const handleDiscount = (e) => {
    e.preventDefault();
    if(selectedCode === undefined) {
        alert('Invalid Discount Code')
    } else if(isDiscounted) {
        alert('You are allowed to apply a discount code only once.')
    }
     else {
        setIsDiscounted(true)
    }
  };

  useEffect(() => {
    setIsDiscounted(false)

  },[setIsDiscounted])



  return (
    <div className="mb-2">
      <div className="flex flex-row items-start justify-end font-rem">
        <input
          type="text"
          name="discount"
          onChange={handleChange}
          className="border border-indigo-700 xxs:text-xs ssm:text-sm bg-slate-200 rounded-tl-md rounded-bl-md w-52 h-8 p-1 text-indigo-700 font-bold xxs:h-6"
          readOnly={isDiscounted ? true : false}
          placeholder="e.g WELCOME or BERKE"
        />
        <button className="bg-indigo-600 rounded-tr-md ssm:text-sm rounded-br-md xxs:h-6 pl-2 pr-2 h-8 text-slate-50 hover:bg-indigo-900 active:bg-indigo-700 transition-all duration-400" onClick={handleDiscount}>
          Apply
        </button>
      </div>
    </div>
  );
};

export default Discount;
