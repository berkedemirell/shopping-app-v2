
/* eslint-disable react/prop-types */


const LazyImage = (props) => {
  return (
    <div className="rounded-lg sm:w-60 xs:w-24 xxs:w-20 h-52 xs:h-28 ssm:w-36 flex p-2 items-center justify-center">
        <img src={props.imgSrc} alt="" className="rounded-full sm:w-60 h-52 xs:h-28 p-2 ssm:w-36"/>
    </div>
  )
}

export default LazyImage