import { useState } from "react";
import { users } from "../data/users.js";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });
  const user = users?.filter((us) => us?.username === inputs?.username);
  const [error, setError] = useState("");

  const handleLoginInputs = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (inputs.username.length === 0 || inputs.password.length === 0) {
      setError("Fill all empty spaces");
    } else if (
      inputs.username !== user[0]?.username ||
      inputs.password !== user[0]?.password
    ) {
      setError("Wrong username or password");
    } else {
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/");
      window.location.reload();
    }

    setTimeout(() => {
      setError("");
    }, 3000);
  };

  return (
    <div className="font-rem flex flex-row justify-between">
      <div className="w-1/3 h-screen bg-gradient-to-r from-login1 to-login2"></div>
      <div className="flex flex-row mt-40 ssm:mt-20 md:mt-20 h-formh border border-indigo-300 p-6 rounded-lg">
        <form action="login" className="flex flex-col gap-2 h-formh">
          <h1 className="text-center text-xl uppercase mb-10 font-bold">
            Login
          </h1>
          <div className="flex flex-col ">
            <label
              htmlFor="username"
              className="text-xs uppercase font-semibold"
            >
              username
            </label>
            <input
              type="text"
              placeholder="username"
              id="username"
              name="username"
              onChange={handleLoginInputs}
              className="border border-slate-500 p-1 rounded-lg w-64"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="password"
              className="text-xs uppercase font-semibold"
            >
              password
            </label>
            <input
              type="password"
              placeholder="password"
              id="password"
              name="password"
              onChange={handleLoginInputs}
              className="border border-slate-500 p-1 rounded-lg w-64"
            />
          </div>
          <div className="text-xs text-indigo-800">
            <p>
              Don`t you have an account?{" "}
              <Link to="/register" className="underline">
                Register
              </Link>
            </p>
          </div>
          <div className="text-center text-xs uppercase text-red-800 font-bold">
            <p>{error}</p>
          </div>
          <div className="text-center">
            <button
              className="bg-slate-800 text-slate-50 p-1 pl-4 pr-4 w-36 rounded-lg cursor-pointer hover:opacity-80 active:opacity-100 transition-all duration-500"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
        </form>
      </div>
      <div className="w-1/3 h-screen bg-gradient-to-r from-login2 to-login1"></div>
    </div>
  );
};

export default Login;
