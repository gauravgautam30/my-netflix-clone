import { useState } from "react";

const Header = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const toggleSignInForm = () => {
    setIsSignIn((s) => !s);
  };
  return (
    <div>
      <div className="absolute h-36 w-52 mx-20 p-2 bg-gradient-to-b from-black">
        <img
          alt="logo"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        />
      </div>
      <form className="absolute text-white w-fit p-10 mx-[430px] my-32 bg-black bg-opacity-80">
        <h1 className="p-2 m-2 font-bold text-3xl">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="First name"
            className="p-4 m-2 w-full bg-gray-700 rounded-lg"
          />
        )}
        {!isSignIn && (
          <input
            type="text"
            placeholder="Last name"
            className="p-4 m-2 w-full bg-gray-700 rounded-lg"
          />
        )}
        <input
          type="text"
          placeholder="Email or mobile number"
          className="p-4 m-2 w-full bg-gray-700 rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 m-2 w-full bg-gray-700 rounded-lg"
        />
        <button className="bg-red-700 p-4 m-2 my-6 w-full rounded-lg">
          Sign In
        </button>
        <h1 className="w-ful cursor-pointer" onClick={() => toggleSignInForm()}>
          {isSignIn
            ? "New to Netflix? Sign up now."
            : "Already registered? Sign in now."}
        </h1>
      </form>
    </div>
  );
};

export default Header;
