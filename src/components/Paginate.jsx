import { useContext } from "react";
import { Link } from "react-router-dom";
import DataContext from "../context/DataContext";

const Paginate = () => {
  const {
    previousPage,
    nextPage,
    paginate,
    products,
    productPerPage,
    currentPage,
  } = useContext(DataContext);

  let pageNumbers = [];

  for (let i = 1; i <= Math.ceil(products.length / productPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex flex-col items-center justify-center p-2 pb-10">
      <ul className="flex flex-row items-center gap-4">
        {pageNumbers.length === 1 ? (
          ""
        ) : (
          <Link onClick={previousPage} id="prev">
            {currentPage !== 1 ? <li className="text-xl bg-purple-200 rounded-full p-1 pl-2 pr-2">&larr;</li> : ''}
          </Link>
        )}
        {pageNumbers.map((number,i) => (
          <Link className={`text-lg p-1 pl-3 pr-3 rounded-full ${currentPage === number ? 'bg-purple-700 text-slate-50' : 'bg-purple-200'}`} key={i} onClick={() => paginate(number)}>
            <li className="">{number}</li>
          </Link>
        ))}
        {pageNumbers.length === 1 ? (
          ""
        ) : (
          <Link>
            {currentPage !== pageNumbers.length ? <li id="next" className="text-xl bg-purple-200 rounded-full p-1 pl-2 pr-2" onClick={nextPage}>
              &rarr;
            </li> : ''}
            {""}
          </Link>
        )}
      </ul>
    </div>
  );
};

export default Paginate;
