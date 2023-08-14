

import { Link } from 'react-router-dom'
import empty from '../style/empty.png'
/* eslint-disable react/prop-types */

const EmptyCard = (props) => {
    const handleDeneme = () => {
        props.setIsCart(false)
    }
  return (
    <div className='flex flex-col items-center font-rem'>
        <div>
            <img src={empty} alt="" className='rounded-lg h-48 w-60'/>
        </div>
        <div className='mt-2 uppercase'>
            <p className='font-bold'>Your cart is empty!!</p>
        </div>
        <Link to='/products' className='uppercase  text-xs bg-indigo-700 text-slate-50 p-2 mt-24' onClick={handleDeneme}>
            <p className=''>
                Start shopping &rarr;
            </p>
        </Link>
    </div>
  )
}

export default EmptyCard