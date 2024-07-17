import { useEffect, useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import SVGIcon from "./SVGIcon";
import s from "../sass/layouts/burgerMenu.module.scss";
import LinkButton from "./LinkButton";

const BurgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("body-no-scroll");
    } else {
      document.body.classList.remove("body-no-scroll");
    }

    return () => {
      document.body.classList.remove("body-no-scroll");
    };
  }, [menuOpen]);
  return (
    <>
      <div
        className={`${s.burger__button} ${menuOpen ? s.spin : ""}`}
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        <div className={s.line}></div>
        <div className={s.line}></div>
        <div className={s.line}></div>
      </div>
      <div
        //
        className={`${menuOpen ? s.showMenu : ""} ${s.box__showMenu}`}
      >
        <div className={`${menuOpen ? s.showMenu__list : s.hideMenu__list}`}>
          <nav className={s.nav__menu}>
            <ul className={s.nav__list}>
              <li className={s.nav__list__item}>
                <a className={s.nav__list__item__link} href="#">
                  Nasi lekarze
                </a>
              </li>
              <li className={s.nav__list__item}>
                <a className={s.nav__list__item__link} href="#">
                  Kontakt
                </a>
              </li>
              <li className={s.nav__list__item}>
                <a className={s.nav__list__item__link} href="#">
                  Programs
                  <SVGIcon
                    iconId="arrow"
                    width="9"
                    height="6"
                    className={s.arrow}
                  />
                </a>
              </li>
              <li className={s.nav__list__item}>
                <a className={s.nav__list__item__link} href="#">
                  O nas
                  <SVGIcon
                    iconId="arrow"
                    width="6"
                    height="3"
                    className={s.arrow}
                  />
                </a>
              </li>
            </ul>
          </nav>
          <div className={s.box__menu}>
            <div className={s.box__menu__link}>
              <a href="#" className={s.user__link}>
                <SVGIcon
                  iconId="user"
                  width="15"
                  height="17"
                  className={s.user__icon}
                />
              </a>
              <LinkButton className={s.link__btn} href="#">
                Skontaktuj się z nami
              </LinkButton>
              <div className={s.select__wrapper}>
                <select className={s.select}>
                  <option value="pl">PL</option>
                  <option value="en">EN</option>
                  <option value="uk">UK</option>
                </select>
                <SVGIcon
                  iconId="arrow"
                  width="6"
                  height="3"
                  className={s.arrow__select}
                />
              </div>
            </div>
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </>
  );
};
export default BurgerMenu;
