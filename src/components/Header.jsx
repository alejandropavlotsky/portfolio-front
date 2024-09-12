import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { LANGUAGES } from "../constants";

import "../styles/sass/header.scss";

export const Header = () => {
  const { i18n, t } = useTranslation();
  const [navBar, setNavBar] = useState(false);
  const [hamburger, setHamburger] = useState(true);
  const [navMenu, setNavMenu] = useState(true)

  const onChangeLang = (e) => {
    const lang_code = e.target.value;
    i18n.changeLanguage(lang_code);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setNavBar(true);
      } else {
        setNavBar(false);
      }
    });
  }, []);

  const showHideNav = () => {
    setNavMenu(!navMenu)
  }

  return (
    <header id={navBar ? "header-dark" : "header"}>
      <nav className={navMenu ? 'show' : ''}>
        <ul>
          <li>
            <a href="#about">{t("about")}</a>
          </li>
          <li>
            <a href="#projects">{t("projects")}</a>
          </li>
          <li>
            <a href="#contact">{t("contact")}</a>
          </li>
          <li>
            <select defaultValue={i18n.language} onChange={onChangeLang}>
              {LANGUAGES.map(({ code, label }) => (
                <option key={code} value={code}>
                  {label}
                </option>
              ))}
            </select>
          </li>
        </ul>
      </nav>
      {hamburger && (
        <div className={navMenu ? 'close' : 'hamburger'} onClick={showHideNav}>
          <div>
            <span></span>
            <span></span>
          </div>
        </div>
      )}
    </header>
  );
};
