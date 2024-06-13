import date from "date-and-time";
import DarkModeToggle from "react-dark-mode-toggle";
import toggleTheme from "../../assets/utilities/localStorage";
import { useState, useEffect } from "react";

const TopNavigationMenu = () => {
  const now = new Date();
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme === "dark";
  });

  // handle dark mode toggle
  const handleDarkModeToggle = () => {
    toggleTheme();
    setIsDarkMode(!isDarkMode);
  };

  //initial theme mode
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    setIsDarkMode(storedTheme === "dark");
  }, []);

  return (
    <div className=" bg-theme_primary py-1 px-8 flex text-center flex-col lg:flex-row lg:justify-between">
      <div className=" text-theme_light">
        {date.format(now, "ddd, MMM DD YYYY")}
      </div>
      <div className="flex justify-center items-center text-theme_light">
        <DarkModeToggle
          onChange={handleDarkModeToggle}
          checked={isDarkMode}
          size={50}
        />
      </div>
    </div>
  );
};

export default TopNavigationMenu;
