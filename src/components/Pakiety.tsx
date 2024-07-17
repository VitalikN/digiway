import s from "../sass/layouts/pakiety.module.scss";
import LinkButton from "./LinkButton";

const Pakiety = () => {
  return (
    <section className={s.pakiety}>
      <div className={`${s.container} ${s.container__pakiety} `}>
        <h2 className={s.pakiety__title}>пакети</h2>
        <ul className={s.pakiety__list}>
          <li className={s.pakiety__list__item}>
            <h3 className={s.pakiety__list__title}>
              УЗД всього організму для жінок
            </h3>
            <p className={s.pakiety__list__text}>
              УЗД всього організму для жінок
              <br />
              Щитовидна залоза
              <br />
              Молочні залози
              <br />
              Органи черевної порожнини (печінка, жовчний міхур, підшлункова
              залоза, селезінка)
              <br />
              Нирки та надниркові залози
              <br />
              Органи малого тазу
              <br />
              Ціна — 2600 грн.
              <br />
              Ціна по акції — 1280 грн
            </p>
            <LinkButton className={s.link__btn} href="#">
              Переглянути детальніше
            </LinkButton>
          </li>
          <li className={s.pakiety__list__item}>
            <h3 className={s.pakiety__list__title}>
              УЗД всього організму для жінок
            </h3>
            <p className={s.pakiety__list__text}>
              УЗД всього організму для жінок
              <br />
              Щитовидна залоза
              <br />
              Молочні залози
              <br />
              Органи черевної порожнини (печінка, жовчний міхур, підшлункова
              залоза, селезінка)
              <br />
              Нирки та надниркові залози
              <br />
              Органи малого тазу
              <br />
              Ціна — 2600 грн.
              <br />
              Ціна по акції — 1280 грн
            </p>
            <LinkButton className={s.link__btn} href="#">
              Переглянути детальніше
            </LinkButton>
          </li>
          <li className={s.pakiety__list__item}>
            <h3 className={s.pakiety__list__title}>
              УЗД всього організму для жінок
            </h3>
            <p className={s.pakiety__list__text}>
              УЗД всього організму для жінок
              <br />
              Щитовидна залоза
              <br />
              Молочні залози
              <br />
              Органи черевної порожнини (печінка, жовчний міхур, підшлункова
              залоза, селезінка)
              <br />
              Нирки та надниркові залози
              <br />
              Органи малого тазу
              <br />
              Ціна — 2600 грн.
              <br />
              Ціна по акції — 1280 грн
            </p>

            <LinkButton className={s.link__btn} href="#">
              Переглянути детальніше
            </LinkButton>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Pakiety;
