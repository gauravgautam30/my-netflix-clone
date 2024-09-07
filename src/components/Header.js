import { useNavigate } from "react-router-dom";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { toggleGptSearch } from "../utils/GptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const langauage = useRef(null);
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  console.log("SHOW", showGptSearch);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => {
      unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  const handleGptSearchClick = () => {
    // on click make it toggle by using gptSlice
    dispatch(toggleGptSearch());
  };

  const handleLangChange = () => {
    dispatch(changeLanguage(langauage.current.value));
  };
  return (
    <div className="absolute w-[98.7vw] px-6 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img className="w-40 mx-auto md:mx-0" src={LOGO} alt="logo" />
      {showGptSearch && (
        <select
          onChange={handleLangChange}
          ref={langauage}
          className="font-bold px-2 my-4 rounded-lg ml-[650px] bg-slate-300"
        >
          {SUPPORTED_LANGUAGES.map((lang) => {
            return (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            );
          })}
        </select>
      )}
      {user && (
        <div className="flex px-6">
          <button
            className="bg-purple-800 font-bold px-2 my-4 rounded-lg"
            onClick={() => handleGptSearchClick()}
          >
            {showGptSearch ? "Home Page" : "GPT Search"}
          </button>
          <div className="p-2 m-2">
            <img alt="userImg" src={user.photoURL} />
          </div>

          <div>
            <button
              onClick={() => handleSignOut()}
              className="bg-slate-300 font-bold px-2 my-4 py-2 rounded-lg"
            >
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
