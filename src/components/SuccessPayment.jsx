import { Link } from 'react-router-dom'
import image from '../style/pik.png'

const SuccessPayment = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justif-center p-4 font-rem pb-20 pt-8">
        <div className='rounded-full border border-slate-300 mt-10'>
            <img src={image} alt="" className='w-success-w h-success rounded-full'/>
        </div>
        <div>
            <p className='text-4xl mt-2 text-indigo-700 font-bold uppercase'>Thanks for shopping from us</p>
            <p className='text-center text-2xl text-indigo-700 font-bold uppercase'>We received your order</p>
        </div>
        <div><Link to='/products' className='underline text-xl font-bold'>Continue shopping &rarr;</Link></div>
    </div>
  )
}

export default SuccessPayment