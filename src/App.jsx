import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Nav from "./components/Nav";
import Main from "./pages/Main";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Products from "./pages/Products";
import Shoes from "./pages/Shoes";
import Electronics from "./pages/Electronics";
import Detail from "./pages/Detail";
import Fragrance from "./pages/Fragrance";
import Skin from "./pages/Skin";
import Groceries from "./pages/Groceries";
import Decoration from "./pages/Decoration";
import All from "./pages/All";
import Register from "./pages/Register";
import Favs from "./pages/Favs";
import Purchase from "./pages/Purchase";
import Search from "./pages/Search";

//https://api.escuelajs.co/api/v1/products


function App() {
  const Layout = () => {
    return (
      <>
        <Nav />
        <Outlet/>
        <Footer/>
      </>
    );
  };

  const router = createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children: [
        {
          path:"/",
          element:<Main/>
        },
        {
          path:"/products",
          element:<Products/>
        },
        {
          path:"/products/shoes",
          element:<Shoes/>
        },
        {
          path:"/products/electronics",
          element:<Electronics/>
        },
        {
          path:"/products/fragrances",
          element:<Fragrance/>
        },
        {
          path:"/products/home-decoration",
          element:<Decoration/>
        },
        {
          path:"/products/all",
          element:<All/>
        },
        {
          path:"/search",
          element:<Search/>
        },
        {
          path:"/payment",
          element:<Purchase/>
        },
        {
          path:"/account/favourites",
          element:<Favs/>
        },
        {
          path:"/products/groceries",
          element:<Groceries/>
        },
        {
          path:"/products/skincare",
          element:<Skin/>
        },
        {
          path:"/product/:id",
          element:<Detail/>
        },
      ]
    },
    {
      path:"/login",
      element: <Login/>
    },
    {
      path:"/register",
      element: <Register/>
    }
  ])

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
