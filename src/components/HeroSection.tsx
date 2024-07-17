import s from '../sass/layouts/hero.module.scss';
import SVGIcon from './SVGIcon';

const HeroSection = () => {
  return (
    <section className={s.hero}>
      <div className={`${s.container} ${s.container__hero} `}>
        <div className={s.hero__box}>
          <h1 className={s.title}>Aкції та Акційні пакети</h1>
          <p className={s.text}>
            Ми завжди прагнемо підвищити рівень сервісу надаваних медичних
            послуг, і вдячні вам за залишений позитивний відгук. Ми беремо до
            уваги всі коментарі та побажання, які відносяться до нашої роботи.
            Дякуємо за ваш вибір.
          </p>
        </div>
        <div className={s.box__img}>
          <img
            className={s.img}
            src={'/image.png'}
            alt="top_image"
            width={440}
            height={440}
          />
          <div className={s.img__icon}>
            <SVGIcon
              iconId="icon-Vector"
              width="120"
              height="123"
              className={s.vector}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
