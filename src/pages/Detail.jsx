import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom"
import DataContext from "../context/DataContext";



const Detail = () => {
    const [single, setSingle] = useState({});
    const location = useLocation();
    const {addToCart} = useContext(DataContext)
    
    const path = location.pathname.split("/")[2]
    useEffect(() => {  
        const fetchSingle = async () => {
            const res = await axios.get(`https://dummyjson.com/products/${Number(path)}`)
            setSingle(res.data);
        }
        fetchSingle();
    }, [path])


  return (
    <div className="flex p-10 flex-row items-center justify-center gap-12 font-rem bg-gradient-to-r from-purple-100 to-purple-200">
        <div className="text-center">
            <img src={single.thumbnail} alt="" className="w-success-w rounded-full"/>
            <button className="mt-2 text-center underline" id={single.id} onClick={addToCart}>Add to cart</button>
        </div>
        <div className="w-cart flex flex-col gap-4">
            <p><span className="uppercase font-bold">Brand: </span>{single.brand}</p>
            <p className="capitalize"><span className="uppercase font-bold">Category: </span>{single.category}</p>
            <p><span className="uppercase font-bold">Product: </span>{single.title}</p>
            <p><span className="uppercase font-bold">Description: </span>{single.description}</p>
            <p><span className="uppercase font-bold">Price: </span>${single.price}</p>
            <p><span className="uppercase font-bold">Rate: </span>{single.rating}/5</p>
            <p><span className="uppercase font-bold">Stock: </span>{single.stock}</p>
        </div>
    </div>
  )
}

export default Detail