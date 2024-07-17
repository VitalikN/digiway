import s from '../sass/layouts/kontrola.module.scss';
import Logo from './Logo';

const Kontrola = () => {
  return (
    <section className={s.kontrola}>
      <div className={`${s.container} ${s.container__kontrola} `}>
        <h2 className={s.title}>
          Twój
          <span className={s.title__span}>kompleksowy przegląd</span>
          <span className={s.title__span__stanu}>stanu zdrowia</span>
          <div className={s.logo__box}>
            <Logo width={'112'} height={'94'} />
          </div>
        </h2>
      </div>
    </section>
  );
};
export default Kontrola;
