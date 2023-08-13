import { createContext, useEffect, useState } from "react";
import axios from "axios";
/* eslint-disable react/prop-types */

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  //https://dummyjson.com/products

  const [products, setProducts] = useState([]);
  const [cats, setCats] = useState("");
  const [search, setSearch] = useState("");
  const [selectedCode, setSelectedCode] = useState({})
  const [isDiscounted, setIsDiscounted] = useState(false);
  const [favs, setFavs] = useState(() => {
    const savedFavs = localStorage.getItem('favs');
    if(savedFavs) {
      return JSON.parse(savedFavs)
    } else {
      return []
    }
  })
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    if(savedCart) {
      return JSON.parse(savedCart)
    } else {
      return []
    }
  })
  const [currentUser, setCurrentUser] = useState(() => {
    const user = localStorage.getItem("user");
    if (user) {
      return JSON.parse(user)[0];
    } else {
      return [];
    }
  });
  const total = cart?.map((p) => p.price)?.reduce((a, b) => a + b, 0);

  const addToFav = (e) => {
    e.preventDefault();
    const selected = products.filter(
      (pro) => Number(e.target.id) === Number(pro.id)
    )[0];
    if (currentUser?.length === 0) {
      alert("You have be logged in to add a product in your favourites.");
    } else if (
      favs
        ?.map((ca) => Number(ca?.id))
        .includes(Number(e.target.id))
    ) {
      alert("You have already have this product in your favourites.");
    } else {
      setFavs([...favs, selected])
    }
  };


  const newPro = products.map((pro) => pro);

  const modified = newPro.map((p) => {
    return {
      ...p,
      ca: p.description
        .toLowerCase()
        .split(" ")
        .concat(
          p.title
          .toLowerCase()
            .split(" ")
            .concat(p.title.toLowerCase())
            .concat(p.brand.toLowerCase())
            .concat(p.category.toLowerCase())
        ),
      };
  });
  
  const addToCart = (e) => {
    e.preventDefault();
    const selected = products.filter(
      (pro) => Number(e.target.id) === Number(pro.id)
      )[0];
      if (currentUser?.length === 0) {
        alert("You have be logged in to add a product in your cart.");
    } else {
      setCart([...cart, selected])
    }
  };

  const handleDeleteFavs = (e) => {
    e.preventDefault();
    const newFavsArray = favs.filter((fav,i) => {
      if(Number(i) === Number(e.target.id)) {
        return false
      } else {
        return true
      }
    })
    setFavs(newFavsArray);
  }

  const handleDeleteCart = (e) => {
    e.preventDefault();
    const newCartArray = cart.filter((c,i) => {
      if(Number(i) === Number(e.target.id)) {
        return false
      } else {
        return true
      }
    })

    setCart(newCartArray)
  }
  
  const handleChange = (e) => {
    setCats(e.target.value);
  };

  const handleSubmitCat = () => {
    setSearch(cats);
  };


  const searchedArray = modified.filter((m) => {
    const letters = search?.toLowerCase().split(" ");
    const modifiedLetter = letters.filter((letter) => {
      if(letter === ' ') {
        return false
      } else {
        return true
      }
    })
    return modifiedLetter?.some((val) => m.ca.includes(val));
  });
  
  useEffect(() => {
    localStorage.setItem('favs', JSON.stringify(favs))
    localStorage.setItem('cart', JSON.stringify(cart))
    const getProducts = async () => {
      const res = await axios.get("https://dummyjson.com/products");
      setProducts(res.data.products);
    };
    getProducts();
  }, [favs, cart]);

  const laptops = products.filter((pro) => pro.category === "laptops");
  const phones = products.filter((pro) => pro.category === "smartphones");
  const frag = products.filter((pro) => pro.category === "fragrances");
  const skin = products.filter((pro) => pro.category === "skincare");
  const groceries = products.filter((pro) => pro.category === "groceries");
  const deco = products.filter((pro) => pro.category === "home-decoration");

  return (
    <DataContext.Provider
      value={{
        laptops,
        phones,
        frag,
        skin,
        groceries,
        deco,
        products,
        currentUser,
        setCurrentUser,
        addToFav,
        addToCart,
        handleChange,
        setCats,
        cats,
        searchedArray,
        handleSubmitCat,
        favs,
        cart,
        handleDeleteFavs,
        handleDeleteCart,
        search,
        setCart,
        setIsDiscounted,
        isDiscounted,
        total,
        selectedCode,
        setSelectedCode,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;