
import { Link } from "react-router-dom";



const Main = () => {



  return (
    <div className="w-screen h-screen bg-back bg-no-repeat bg-cover bg-center flex items-start justify-end font-rem">
      <div className="pr-24 pt-32">
        <h1 className="text-5xl w-header font-semibold text-indigo-600">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </h1>
        <p className="text-lg text-indigo-500 w-header mt-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
          dolorum nulla at labore quae quos nihil consequatur?
        </p>
        <div className="flex items-center justify-center mt-6">
          <Link to='/products' className="text-xl font-bold bg-indigo-600 rounded-lg text-slate-50 pl-4 pr-4 hover:opacity-80 active:opacity-100 transition-all duration-500 p-2 text-center">
            Start Shopping &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
