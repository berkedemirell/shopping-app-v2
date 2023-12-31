
import { useContext } from "react";
import { Link } from "react-router-dom";
import DataContext from '../context/DataContext.jsx'



const Main = () => {

  const {isDark} = useContext(DataContext)


  return (
    <div className={` h-screen ${isDark ? 'bg-back-dark text-slate-200' : 'bg-back text-indigo-600'} bg-no-repeat bg-cover bg-center flex items-start justify-end font-rem`}>
      <div className="pr-24 lg:pr-0 lg:w-fit pt-32 md:pt-26 ssm:pr-6">
        <h1 className="text-5xl ssm:w-cart xl:text-6xl lg:text-4xl xxxs:text-2xl xxxs:w-60 lg:w-pro-pic w-header ssm:text-3xl md:w-pro-pic font-semibold md:text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </h1>
        <p className="text-lg xl:text-xl w-header md:w-pro-pic xxxs:w-60 lg:w-pro-pic mt-2 ssm:text-sm ssm:w-cart">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
          dolorum nulla at labore quae quos nihil consequatur?
        </p>
        <div className="flex items-center justify-center mt-6">
          <Link to='/products' className="text-xl xl:text-2xl ssm:text-sm font-bold bg-indigo-600 rounded-lg text-slate-50 pl-4 pr-4 hover:opacity-80 active:opacity-100 transition-all duration-500 p-2 text-center">
            Start Shopping &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
