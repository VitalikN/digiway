import React from 'react';
import SVGIcon from './SVGIcon';
import s from '../sass/layouts/header.module.scss';

interface LogoProps {
  width?: string;
  height?: string;
}

const Logo: React.FC<LogoProps> = ({ width = '67', height = '63' }) => {
  return (
    <a href="/" className={s.logo}>
      <SVGIcon
        iconId="logo"
        width={width}
        height={height}
        className="logo__chip"
      />
    </a>
  );
};

export default Logo;
