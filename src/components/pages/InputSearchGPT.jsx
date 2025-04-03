import { FaSearch } from "react-icons/fa";
import { langConst } from "../utils/languageConstants";
import { useSelector } from "react-redux";
const InputSearchGPT = () => {
  const currentLang = useSelector((store) => store?.lang?.currentLang);
  return (
    <div className="pt-[18%]">
      <form className="w-1/2 m-auto">
        <div className="flex flex-row gap-3 p-3.5 bg-black rounded-lg shadow-xl">
          <input
            type="text"
            placeholder={langConst[currentLang]?.gptSearchPlaceHolder}
            className="flex-grow px-4 py-2 bg-white text-black rounded-lg"
          />
          <button
            type="submit"
            className="bg-red-800 text-white font-bold px-5 py-4 rounded-lg flex items-center justify-center gap-2"
          >
            <span className="font-bold text-lg">
              {langConst[currentLang]?.search}
            </span>
            <FaSearch className="text-xl" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default InputSearchGPT;
