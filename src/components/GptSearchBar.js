import { useSelector } from "react-redux";
import lang from "../utils/langConstants";

const GptSearchBar = () => {
  const languageKey = useSelector((store) => store.lang.language);

  return (
    <div className="pt-[8%] flex justify-center">
      <form
        className="bg-black grid grid-cols-12 w-1/2"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          className="col-span-9 p-2 m-2 rounded-lg"
          type="text"
          placeholder={lang[languageKey].gptSearchPlaceholder}
        />
        <button className="col-span-3 bg-red-700 p-2 m-2 rounded-lg text-white">
          {lang[languageKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
