import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full h-fit bg-footer font-rem uppercase xs:capitalize font-bold text-slate-300">
      <div className="flex flex-row sm:grid sm:grid-cols-2 xl:justify-between xl:p-12 items-start justify-start xxxs:grid-cols-1 xs:gap-8 xs:pr-6 gap-44 lg:gap-20 p-4 pl-32 pt-10 lg:pl-12 sm:p-0 sm:pt-4 sm:gap-4">
        <div className="flex flex-col xxxs:items-center">
          <div className="text-xl underline ssm:text-lg">Company</div>
          <div className="flex flex-col justify-center text-sm mt-2 leading-6 text-xs xxxs:items-center">
            <Link to="/" className="hover:text-sky-400 transition-all duration-500">About us</Link>
            <Link to="/" className="hover:text-sky-400 transition-all duration-500">Community</Link>
            <Link to="/" className="hover:text-sky-400 transition-all duration-500">Partnerships</Link>
            <Link to="/" className="hover:text-sky-400 transition-all duration-500">Start Selling</Link>
            <Link to="/" className="hover:text-sky-400 transition-all duration-500">Blog</Link>
            <Link to="/" className="hover:text-sky-400 transition-all duration-500">FAQ</Link>
          </div>
        </div>
        <div className="flex flex-col sm:items-start xxxs:items-center">
          <div className="text-xl underline ssm:text-lg">Social</div>
          <div className="flex flex-col justify-center text-sm items-center mt-2">
            <Link
              to="/"
              className="text-xl hover:text-sky-400 transition-all duration-500"
            >
              <ion-icon name="logo-twitter"></ion-icon>
            </Link>
            <Link
              to="/"
              className="text-xl hover:text-sky-400 transition-all duration-500"
            >
              <ion-icon name="logo-instagram"></ion-icon>
            </Link>
            <Link
              to="/"
              className="text-xl hover:text-sky-400 transition-all duration-500"
            >
              <ion-icon name="logo-facebook"></ion-icon>
            </Link>
            <Link
              to="/"
              className="text-xl hover:text-sky-400 transition-all duration-500"
            >
              <ion-icon name="logo-youtube"></ion-icon>
            </Link>
            <Link
              to="/"
              className="text-xl hover:text-sky-400 transition-all duration-500"
            >
              <ion-icon name="logo-google-playstore"></ion-icon>
            </Link>
          </div>
        </div>
        <div className="flex flex-col xxxs:items-center">
          <div className="text-xl underline ssm:text-lg">Pricing</div>
          <div className="flex flex-col justify-center text-sm mt-2 leading-6 text-xs xxxs:items-center">
            <Link to="/" className="hover:text-sky-400 transition-all duration-500">Overview</Link>
            <Link to="/" className="hover:text-sky-400 transition-all duration-500">Premium</Link>
            <Link to="/" className="hover:text-sky-400 transition-all duration-500">Promotions</Link>
            <Link to="/" className="hover:text-sky-400 transition-all duration-500">Terms & Condition</Link>
            <Link to="/" className="hover:text-sky-400 transition-all duration-500">Privacy Policy</Link>
          </div>
        </div>
        <div className="xxxs:flex xxxs:flex-col xxxs:items-center">
          <div className="text-xl underline ssm:text-lg">Contact</div>
          <div className="flex flex-col justify-center mt-2 gap-2 text-xs xxxs:items-center">
            <p className="">Address: Mulholland Drive</p>
            <p className="">Tel: +1 234 123 123 / +1 445 234 123</p>
            <p className="">E-mail: dberke00@gmail.com</p>
            <p className="">Copyright &copy; Berke Demirel 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
