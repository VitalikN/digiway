import React, { useState } from "react";
import SVGIcon from "./SVGIcon";
import s from "../sass/layouts/header.module.scss";

const ThemeSwitcher: React.FC = () => {
  const [theme, setTheme] = useState("light");

  const handleThemeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTheme(e.target.value);
    document.documentElement.setAttribute("data-theme", e.target.value);
  };

  return (
    <div className={s.theme__switcher}>
      <label className={`${s.label} ${s.label__light}`}>
        <input
          type="radio"
          name="theme"
          value="light"
          checked={theme === "light"}
          onChange={handleThemeChange}
        />
        <SVGIcon iconId="light" width="14" height="14" className={s.light} />
      </label>
      <label className={`${s.label} ${s.label__dark}`}>
        <input
          type="radio"
          name="theme"
          value="dark"
          checked={theme === "dark"}
          onChange={handleThemeChange}
        />
        <SVGIcon iconId="dark" width="11" height="11" className={s.dark} />
      </label>
    </div>
  );
};

export default ThemeSwitcher;
