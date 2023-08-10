import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"



const Detail = () => {
    const [single, setSingle] = useState({});
    const location = useLocation();
    
    const path = location.pathname.split("/")[2]
    useEffect(() => {  
        const fetchSingle = async () => {
            const res = await axios.get(`https://dummyjson.com/products/${Number(path)}`)
            setSingle(res.data);
        }
        fetchSingle();
    }, [path])


  return (
    <div>
        <div>
            <img src={single.thumbnail} alt=""/>
        </div>
        <div>
            <p>{single.brand}</p>
            <p>{single.title}</p>
            <p>{single.description}</p>
            <p>${single.price}</p>
            <p>{single.rating}/5</p>
            <p>{single.category}</p>
        </div>
    </div>
  )
}

export default Detail