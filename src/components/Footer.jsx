import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full h-fit bg-footer font-rem uppercase font-bold text-slate-300">
      <div className="flex flex-row items-start justify-start gap-44 p-4 pl-32 pt-10">
        <div className="flex flex-col">
          <div className="text-xl underline">Company</div>
          <div className="flex flex-col justify-center text-sm mt-2 leading-6 text-xs">
            <Link to="/" className="hover:text-sky-400 transition-all duration-500">About us</Link>
            <Link to="/" className="hover:text-sky-400 transition-all duration-500">Community</Link>
            <Link to="/" className="hover:text-sky-400 transition-all duration-500">Partnerships</Link>
            <Link to="/" className="hover:text-sky-400 transition-all duration-500">Start Selling</Link>
            <Link to="/" className="hover:text-sky-400 transition-all duration-500">Blog</Link>
            <Link to="/" className="hover:text-sky-400 transition-all duration-500">FAQ</Link>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-xl underline">Social</div>
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
        <div className="flex flex-col">
          <div className="text-xl underline">Pricing</div>
          <div className="flex flex-col justify-center text-sm mt-2 leading-6 text-xs">
            <Link to="/" className="hover:text-sky-400 transition-all duration-500">Overview</Link>
            <Link to="/" className="hover:text-sky-400 transition-all duration-500">Premium</Link>
            <Link to="/" className="hover:text-sky-400 transition-all duration-500">Promotions</Link>
            <Link to="/" className="hover:text-sky-400 transition-all duration-500">Terms & Condition</Link>
            <Link to="/" className="hover:text-sky-400 transition-all duration-500">Privacy Policy</Link>
          </div>
        </div>
        <div>
          <div className="text-xl underline">Contact</div>
          <div className="flex flex-col justify-center mt-2 gap-2 text-xs">
            <p className="">Address: Bayındır district Muratpaşa/Antalya 07000</p>
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
