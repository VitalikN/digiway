import SVGIcon from "./SVGIcon";
import s from "../sass/layouts/header.module.scss";
import ThemeSwitcher from "./ThemeSwitcher";
import BurgerMenu from "./BurgerMenu";
import LinkButton from "./LinkButton";

const Header = () => {
  return (
    <header>
      <div className={`${s.container} ${s.container__header}`}>
        <a href="/" className={s.logo}>
          <SVGIcon
            iconId="logo"
            width="67"
            height="63"
            className="logo__chip"
          />
        </a>
        <nav className={s.nav}>
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
        <div className={s.box}>
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
          <ThemeSwitcher />
        </div>
        <BurgerMenu />
      </div>
    </header>
  );
};
export default Header;
