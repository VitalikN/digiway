import s from '../sass/layouts/footer.module.scss';
import SVGIcon from './SVGIcon';

const Footer = () => {
  return (
    <footer>
      <div className={`${s.container} ${s.container__footer}`}>
        <div className={s.visa__box}>
          <p className={s.visa__text}>
            Jakiekolwiek wykorzystanie lub kopiowanie wybranych materiałów ze
            strony jest dozwolone tylko za zgodą właściciela praw autorskich i
            tylko z powołaniem się na źródło.
          </p>
          <SVGIcon iconId="visa" width="68" height="18" className={s.visa} />
        </div>
        <div className={s.nas__box__text}>
          <div className={s.nas__box}>
            <ul className={s.list}>
              <li className={s.list__item}>
                <h3 className={s.list__item__title}>O nas</h3>
              </li>
              <li className={s.list__item}>
                <h3 className={s.list__item__title}>Usługi</h3>
              </li>
              <li className={s.list__item}>
                <h3 className={s.list__item__title}>Blog</h3>
              </li>
              <li className={s.list__item}>
                <h3 className={s.list__item__title}>Praca</h3>
              </li>
              <li className={s.list__item}>
                <h3 className={s.list__item__title}>Cennik</h3>
              </li>
            </ul>
            <p className={s.text}>Lokalizacja</p>
            <div className={s.box__link}>
              <a href="#" target="_blank">
                <SVGIcon
                  iconId="ins"
                  width="24"
                  height="24"
                  className={s.link__svg}
                />
              </a>
              <a href="#" target="_blank">
                <SVGIcon
                  iconId="facebook"
                  width="24"
                  height="24"
                  className={s.link__svg}
                />
              </a>
              <a href="#" target="_blank">
                <SVGIcon
                  iconId="linkedin"
                  width="24"
                  height="24"
                  className={s.link__svg}
                />
              </a>
              <a href="#" target="_blank">
                <SVGIcon
                  iconId="youtube"
                  width="24"
                  height="24"
                  className={s.link__svg}
                />
              </a>
            </div>
          </div>
          <p className={s.text}>Skontaktuj się z nami</p>
        </div>
        <ul className={s.list__polityka}>
          <li className={s.list__item__link}>
            <a className={s.item__link} href="#">
              Polityka prywatności
            </a>
          </li>
          <li className={s.list__item__link}>
            <a className={s.item__link} href="#">
              Regulamin
            </a>
          </li>
          <li className={s.list__item__link}>
            <a className={s.item__link} href="#">
              Przygotowanie do badań
            </a>
          </li>
          <li className={s.list__item__link}>
            <a className={s.item__link} href="#">
              Informacja o prawach pacjenta
            </a>
          </li>
          <li className={s.list__item__link}>
            <a className={s.item__link} href="#">
              Polityka cookie
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
