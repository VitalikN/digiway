import s from '../sass/layouts/promotionalOffers.module.scss';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';
import ContactForm from './ContactForm';
import SVGIcon from './SVGIcon';

const PromotionalOffers = () => {
  const [dynamicHeight, setDynamicHeight] = useState(294);

  useEffect(() => {
    const handleResize = () => {
      const w = Math.min(window.innerWidth, 1280);

      const w1 = 768,
        h1 = 250;
      const w2 = 1280,
        h2 = 294;

      const calculatedHeight = h1 + ((w - w1) * (h2 - h1)) / (w2 - w1);
      setDynamicHeight(calculatedHeight);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <section className={s.offer}>
      <div className={`${s.container} ${s.container__offer} `}>
        <h2 className={s.offer__title}>Акційні пропозиції</h2>
        <div className={` ${s.container__swiper__form} `}>
          <div className={s.swiper__box}>
            <Swiper
              navigation={{
                nextEl: '.swiper__button__next',
                prevEl: '.swiper__button__prev',
              }}
              modules={[Navigation]}
              className="mySwiper"
              loop={true}
              slidesPerView={1}
            >
              <SwiperSlide className={s.slide}>
                <img
                  height={dynamicHeight}
                  src={'/rectangle.png'}
                  alt="rectangle"
                />
                <p className={s.offer__title__text}>
                  {' '}
                  Акція "-40% на пробне заняття з кінезітерапії"
                </p>
                <p className={s.offer__text}>
                  Маєте чудову нагоду потурбуватись про власне здоров’я за
                  вигідною пропозицією вартістю 680 408 грн.
                </p>
                <a className={s.offer__link} href="#">
                  Переглянути детальніше
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  height={dynamicHeight}
                  src={'/rectangle.png'}
                  alt="rectangle"
                />
                <p className={s.offer__title__text}>
                  {' '}
                  Акція "-40% на пробне заняття з кінезітерапії"
                </p>
                <p className={s.offer__text}>
                  Маєте чудову нагоду потурбуватись про власне здоров’я за
                  вигідною пропозицією вартістю 680 408 грн.
                </p>
                <a className={s.offer__link} href="#">
                  Переглянути детальніше
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  height={dynamicHeight}
                  src={'/rectangle.png'}
                  alt="rectangle"
                />
                <p className={s.offer__title__text}>
                  {' '}
                  Акція "-40% на пробне заняття з кінезітерапії"
                </p>
                <p className={s.offer__text}>
                  Маєте чудову нагоду потурбуватись про власне здоров’я за
                  вигідною пропозицією вартістю 680 408 грн.
                </p>
                <a className={s.offer__link} href="#">
                  Переглянути детальніше
                </a>
              </SwiperSlide>
            </Swiper>
            <div
              className={`${s.swiperButton} ${s.swiperButtonPrev} swiper__button__prev`}
            >
              <SVGIcon
                iconId="arrow-left"
                width="22"
                height="22"
                className={`${s.swiper__button__left} ${s.swiper__icon}`}
              />
            </div>
            <div
              className={`${s.swiperButton} ${s.swiperButtonNext} swiper__button__next`}
            >
              <SVGIcon
                iconId="arrow-right"
                width="22"
                height="22"
                className={`${s.swiper__button__right} ${s.swiper__icon}`}
              />
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};
export default PromotionalOffers;
