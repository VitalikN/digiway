import { Field, Form, Formik } from 'formik';

import s from '../sass/layouts/contactForm.module.scss';

import * as Yup from 'yup';
import SVGIcon from './SVGIcon';

const validationSchemaForm = Yup.object().shape({
  name: Yup.string()
    .min(3, "Ім'я може містити від 3 до 50 символів")
    .max(50, "Ім'я може містити від 3 до 50 символів")
    .matches(
      /^[a-zA-Zа-яА-ЯёЁЇїІіЄєҐґ' -]+$/,
      'Ім’я може містити тільки букви, пробіли, апострофи і дефіси'
    )
    .required("Обов'язкове поле!"),

  email: Yup.string()
    .email('Некоректний формат електронної пошти')
    .required("Обов'язкове поле!")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      'Введіть дійсну електронну адресу у форматі username@example.com'
    ),

  phone: Yup.string()
    .matches(/^\+?[1-9]\d{1,14}$/, 'Некоректний формат номера телефону')
    .required("Обов'язкове поле!"),

  zgody: Yup.bool()
    .oneOf([true], 'Необхідна згода на обробку персональних даних')
    .required("Обов'язкове поле!"),
});

interface FormValues {
  email: string;
  phone: string;
  name: string;
  zgody: boolean;
}
const ContactForm = () => {
  const handleSubmit = (
    values: FormValues,
    { resetForm }: { resetForm: () => void }
  ) => {
    console.log('Form submitted', values);

    resetForm();
  };
  return (
    <div className={s.box}>
      <h3 className={s.title}>Czekamy na Ciebie!</h3>
      <Formik
        initialValues={{ email: '', phone: '', name: '', zgody: false }}
        onSubmit={handleSubmit}
        validationSchema={validationSchemaForm}
      >
        {({ errors, touched }) => (
          <Form className={s.form}>
            <div className={s.form__box}>
              <label
                className={`${s.label} ${
                  touched.name && errors.name ? s.invalid : ''
                } `}
              >
                Imię i nazwisko
              </label>
              <Field
                className={`${s.input} ${
                  touched.name && !errors.name ? s.invalid : s.valid
                }`}
                type="text"
                name="name"
                placeholder="Imię i nazwisko"
                error={touched.name && errors.name}
              />
            </div>

            <div className={s.form__box}>
              <label
                className={`${s.label} ${
                  touched.phone && errors.phone ? s.invalid : ''
                } `}
              >
                Phone
              </label>
              <Field
                className={`${s.input} ${
                  touched.phone && !errors.phone ? s.invalid : s.valid
                }`}
                type="text"
                name="phone"
                placeholder="+48 XXX XXX XXX"
                error={touched.phone && errors.phone}
              />
            </div>

            <div className={s.form__box}>
              <label
                className={`${s.label} ${
                  touched.email && errors.email ? s.invalid : ''
                } `}
              >
                Email
              </label>
              <Field
                className={`${s.input} ${
                  touched.email && !errors.email ? s.invalid : s.valid
                }`}
                type="email"
                name="email"
                placeholder="name@gmail.com"
                error={touched.email && errors.email}
              />
            </div>

            <div className={s.form__box__checkbox}>
              <label className={s.checkboxLabel}>
                <Field type="checkbox" name="zgody" className={s.checkbox} />
                <SVGIcon
                  iconId="checkbox"
                  width="12"
                  height="7"
                  className={s.chip__checkbox}
                />
                Wypełnienie formularza zgłoszeniowego jest równoznaczne z
                wyrażeniem zgody na przetwarzanie danych osobowych, otrzymywanie
                newslettera, oraz kontakt telefoniczny
              </label>
            </div>
            <button type="submit" className={s.styledBtn}>
              Wyślij
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default ContactForm;
