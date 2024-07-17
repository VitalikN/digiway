import s from "../sass/layouts/header.module.scss";

interface SVGIconProps {
  iconId: string;
  width?: string | number;
  height?: string | number;
  className?: string;
}

const SVGIcon: React.FC<SVGIconProps> = ({
  iconId,
  width = 18,
  height = 18,
  className = "",
}) => {
  return (
    <svg width={width} height={height} className={`${s.chip} ${className}`}>
      <use href={`/symbol-defs.svg#${iconId}`} />
    </svg>
  );
};

export default SVGIcon;
