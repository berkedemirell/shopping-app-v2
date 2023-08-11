
import { useContext } from 'react'
import DataContext from '../context/DataContext';
import { Link } from 'react-router-dom';

const Fragrance = () => {
    const {frag, addToFav, addToCart} = useContext(DataContext);
  return (
    <div className="w-screen h-fit font-rem bg-cat2">
      <div className="grid grid-cols-6 gap-4 p-10 lg:grid-cols-4 md:flex md:flex-row md:flex-wrap">
        {frag.map((fra, i) => {
          return (
            <div key={i} className="border ssm:flex ssm:gap-2 ssm:p-2 ssm:items-center ssm:justify-center border-slate-800 rounded-lg bg-card ssm:w-fit xs:h-36">
              <div>
                <img src={fra.thumbnail} alt="" width={400} height={400} className="rounded-lg h-52 sm:w-60 ssm:w-36 xs:h-32"/>
              </div>
              <div className='font-bold mt-2 text-slate-950 h-24'>
                <h1 className="text-center xs:text-sm uppercase xxs:text-xs">{fra.category}</h1>
                <h1 className="text-center ssm:w-36 xs:text-sm xxs:text-xs">{fra.title}</h1>
                <h1 className="text-center xs:text-sm xxs:text-xs">${fra.price}</h1>
              </div>
              <div className="flex flex-row items-center ssm:flex-col justify-center text-sm gap-4 text-slate-950 mb-4 font-semibold">
                <Link to={`/product/${fra.id}`} className="underline md:text-lg xs:text-xs">Details</Link>
                <button className="underline md:text-lg xs:text-xs" id={fra.id} onClick={addToCart}>Add to Cart</button>
                <button
                  className="text-center text-md md:text-2xl xs:text-sm"
                  id={fra.id}
                  onClick={addToFav}
                >
                  <ion-icon id={fra.id} name="heart-outline"></ion-icon>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Fragrance