import { useGlobalContext } from "../../contexts/DarkModeContext";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";


const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext();
  return (
    <section className="toggle-container">
      <button className="dark-toggle" onClick={toggleDarkTheme}>
        {isDarkTheme ? (
          <BsFillMoonFill className="text-slate-50" />
        ) : (
          <BsFillSunFill className="text-black" />
        )}
      </button>
    </section>
  );
};
export default ThemeToggle;