import { FC } from 'react';
import { Link } from 'react-router-dom';

type LogoProps = {
  img: string;
  href: string;
  onClick?: React.MouseEventHandler<Element>;
};

export const Logo: FC<LogoProps> = ({ img, href, onClick }) => {
  return (
    <Link to={href} onClick={onClick}>
      <img src={img} alt="logo" />
    </Link>
  );
};
