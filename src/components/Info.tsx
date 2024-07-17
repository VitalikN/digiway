import s from '../sass/layouts/info.module.scss';
import Networks from './Networks';
import SVGIcon from './SVGIcon';
const Info = () => {
  return (
    <section className={s.info}>
      <div className={`${s.container} ${s.container__info} `}>
        <div className={s.box__tel}>
          <a className={s.info__link} href="/">
            W razie jakichkolwiek pytań, zadzwoń
          </a>
          <a className={s.info__link__tel} href="tel:+48 00 000 00 00">
            +48 00 000 00 00
          </a>
          <p className={s.info__text}>Pon. - Pt.: 07:00-20:00</p>{' '}
        </div>
        <div className={s.box__icon}>
          <SVGIcon iconId="map" width="386" height="368" className={s.vector} />
        </div>
        <div>
          <p className={s.info__text__mail}>Nasz adres e-mail</p>
          <a
            className={s.info__link__tel}
            target="_blank"
            href="mailto:info@lorem.center"
          >
            info@lorem.center
          </a>
          <div className={s.link__box}>
            <Networks />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Info;
