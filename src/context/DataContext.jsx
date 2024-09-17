import { createContext, useEffect, useState } from "react";
import axios from "axios";
/* eslint-disable react/prop-types */

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  //https://dummyjson.com/products

  const [products, setProducts] = useState([]);
  const [cats, setCats] = useState("");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isDark, setIsDark] = useState(false);
  const [last, setLast] = useState(() => {
    const savedLasts = localStorage.getItem("last");
    if (savedLasts) {
      return JSON.parse(savedLasts);
    } else {
      return [];
    }
  });
  const [productPerPage] = useState(12);
  const [selectedCode, setSelectedCode] = useState({});
  const [isDiscounted, setIsDiscounted] = useState(false);
  const [favs, setFavs] = useState(() => {
    const savedFavs = localStorage.getItem("favs");
    if (savedFavs) {
      return JSON.parse(savedFavs);
    } else {
      return [];
    }
  });
  const [history, setHistory] = useState(() => {
    const savedHis = localStorage.getItem("history");
    if (savedHis) {
      return JSON.parse(savedHis);
    } else {
      return [];
    }
  });
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      return JSON.parse(savedCart);
    } else {
      return [];
    }
  });

  const handleDarkMode = (e) => {
    e.preventDefault();
    setIsDark((prev) => !prev);
  };

  const [currentUser, setCurrentUser] = useState(() => {
    const user = localStorage.getItem("user");
    if (user) {
      return JSON.parse(user)[0];
    } else {
      return [];
    }
  });

  const priceAmount = cart?.map((c) => Number(c.price) * Number(c.quantity));
  const total = priceAmount?.reduce((a, b) => a + b, 0);

  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;
  const currentPosts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const nextPage = () => {
    if (currentPage !== Math.ceil(products.length / productPerPage)) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const addToLasts = (e) => {
    const selected = products.filter(
      (pro) => Number(e.target.id) === Number(pro.id)
    )[0];

    if (last.length < 3) {
      setLast([...last, selected]);
    } else {
      last.shift();
      setLast([...last, selected]);
    }
  };

  const addToFav = (e) => {
    e.preventDefault();
    const selected = products.filter(
      (pro) => Number(e.target.id) === Number(pro.id)
    )[0];
    if (currentUser?.length === 0) {
      alert("You have be logged in to add a product in your favourites.");
    } else if (
      favs?.map((ca) => Number(ca?.id)).includes(Number(e.target.id))
    ) {
      alert("You have already have this product in your favourites.");
    } else {
      setFavs([...favs, selected]);
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
            .concat(p?.title?.toLowerCase())
            .concat(p?.brand?.toLowerCase())
            .concat(p?.category?.toLowerCase())
        ),
    };
  });

  const addToCart = (e) => {
    e.preventDefault();
    const selected = {
      ...products.filter((pro) => Number(e.target.id) === Number(pro.id))[0],
      quantity: 1,
    };
    if (currentUser?.length === 0) {
      alert("You have be logged in to add a product in your cart.");
    } else if (
      cart.filter((pr) => Number(pr.id) === Number(e.target.id)).length !== 0
    ) {
      const newState = cart.map((c) => {
        if (Number(c.id) === Number(e.target.id)) {
          return { ...c, quantity: Number(c.quantity) + 1 };
        } else {
          return c;
        }
      });
      setCart(newState);
    } else {
      setCart([...cart, selected]);
    }
  };

  const handleDeleteFavs = (e) => {
    e.preventDefault();
    const newFavsArray = favs.filter((fav, i) => {
      if (Number(i) === Number(e.target.id)) {
        return false;
      } else {
        return true;
      }
    });
    setFavs(newFavsArray);
  };

  const handleDeleteLast = (e) => {
    e.preventDefault();
    const newArray = [];
    setLast(newArray);
  };

  const handleDeleteCart = (e) => {
    e.preventDefault();
    if (
      Number(
        cart.filter((a) => Number(a.id) === Number(e.target.id))[0]?.quantity
      ) > 1
    ) {
      const newState = cart.map((c) => {
        if (Number(c.id) === Number(e.target.id)) {
          return { ...c, quantity: Number(c.quantity) - 1 };
        } else {
          return c;
        }
      });
      setCart(newState);
    } else {
      const newCartArray = cart.filter((c) => {
        if (Number(c.id) === Number(e.target.id)) {
          return false;
        } else {
          return true;
        }
      });
      setCart(newCartArray);
    }
  };

  const handleChange = (e) => {
    setCats(e.target.value);
  };

  const handleSubmitCat = () => {
    setSearch(cats);
    if (history.length !== 10) {
      setHistory([cats, ...history]);
    } else {
      history.pop();
      setHistory([cats, ...history]);
    }
  };

  const handleDeleteHistory = (e) => {
    e.preventDefault();
    const newArray = history.filter((his, i) => {
      if (Number(e.target.id) === Number(i)) {
        return false;
      } else {
        return true;
      }
    });

    setHistory(newArray);
  };

  const searchedArray = modified.filter((m) => {
    const letters = search?.toLowerCase().split(" ");
    const modifiedLetter = letters.filter((letter) => {
      if (letter === " ") {
        return false;
      } else {
        return true;
      }
    });
    return modifiedLetter?.some((val) => m.ca.includes(val));
  });

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(favs));
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("last", JSON.stringify(last));
    localStorage.setItem("history", JSON.stringify(history));
    const getProducts = async () => {
      const res = await axios.get("https://dummyjson.com/products");
      setProducts(res.data.products);
    };
    getProducts();
  }, [favs, cart, last, history]);

  console.log(products)

  // const laptops = products.filter((pro) => pro.category === "laptops");
  // const phones = products.filter((pro) => pro.category === "smartphones");
  const frag = products.filter((pro) => pro.category === "fragrances");
  const skin = products.filter((pro) => pro.category === "beauty");
  const groceries = products.filter((pro) => pro.category === "groceries");
  const deco = products.filter((pro) => pro.category === "furniture");

  return (
    <DataContext.Provider
      value={{
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
        currentPage,
        productPerPage,
        previousPage,
        nextPage,
        paginate,
        currentPosts,
        indexOfFirstProduct,
        indexOfLastProduct,
        setCurrentPage,
        addToLasts,
        last,
        handleDeleteLast,
        history,
        handleDeleteHistory,
        setLast,
        handleDarkMode,
        isDark,
        setIsDark,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
