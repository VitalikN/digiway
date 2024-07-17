import SVGIcon from './SVGIcon';

import s from '../sass/layouts/info.module.scss';

const Networks = () => {
  return (
    <>
      <a href="#" target="_blank">
        <SVGIcon iconId="ins" width="24" height="24" className={s.link} />
      </a>
      <a href="#" target="_blank">
        <SVGIcon iconId="facebook" width="24" height="24" className={s.link} />
      </a>
      <a href="#" target="_blank">
        <SVGIcon iconId="linkedin" width="24" height="24" className={s.link} />
      </a>
      <a href="#" target="_blank">
        <SVGIcon iconId="youtube" width="24" height="24" className={s.link} />
      </a>
    </>
  );
};
export default Networks;
