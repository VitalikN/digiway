import s from '../sass/layouts/cennik.module.scss';

const Cennik = () => {
  return (
    <section className={s.cennik}>
      <div className={`${s.container} ${s.container__cennik} `}>
        <h2 className={s.cennik__title}>прайс-лист</h2>

        <div className={s.container__table}>
          <div className={s.container__scrollbar}>
            <table className={s.table}>
              <thead className={s.thead}>
                <tr>
                  <th>Kod</th>
                  <th>Konsultacje</th>
                  <th>Cena brutto</th>
                </tr>
              </thead>
              <tbody className={s.tbody}>
                <tr className={`${s.table__item__text}`}>
                  <td>89.000</td>
                  <td>Konsultacja anestezjologiczna</td>
                  <td>280 zł</td>
                </tr>
                <tr className={`${s.table__item__text}`}>
                  <td>89.000</td>
                  <td>Telekonsultacja anestezjologiczna</td>
                  <td>190 zł</td>
                </tr>
                <tr className={`${s.table__item__text}`}>
                  <td>89.000</td>
                  <td>Konsultacja anestezjologiczna</td>
                  <td>280 zł</td>
                </tr>
                <tr className={`${s.table__item__text}`}>
                  <td>89.000</td>
                  <td>Konsultacja anestezjologiczna </td>
                  <td>280 zł</td>
                </tr>
              </tbody>
            </table>
            <table className={s.table}>
              <thead className={s.thead}>
                <tr>
                  <th>Kod</th>
                  <th>Konsultacje</th>
                  <th>Cena brutto</th>
                </tr>
              </thead>
              <tbody className={s.tbody}>
                <tr className={`${s.table__item__text}`}>
                  <td>89.000</td>
                  <td>Konsultacja anestezjologiczna</td>
                  <td>280 zł</td>
                </tr>
                <tr className={`${s.table__item__text}`}>
                  <td>89.000</td>
                  <td>Telekonsultacja anestezjologiczna</td>
                  <td>190 zł</td>
                </tr>
                <tr className={`${s.table__item__text}`}>
                  <td>89.000</td>
                  <td>Konsultacja anestezjologiczna</td>
                  <td>280 zł</td>
                </tr>
                <tr className={`${s.table__item__text}`}>
                  <td>89.000</td>
                  <td>Konsultacja anestezjologiczna </td>
                  <td>280 zł</td>
                </tr>
              </tbody>
            </table>
          </div>{' '}
        </div>
      </div>
    </section>
  );
};
export default Cennik;
