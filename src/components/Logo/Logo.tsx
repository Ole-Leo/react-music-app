import { FC } from 'react';
import { Link } from 'react-router-dom';

type LogoProps = {
  img: string;
  href: string;
};

export const Logo: FC<LogoProps> = ({ img, href }) => {
  return (
    <Link to={href}>
      <img src={img} alt="logo" />
    </Link>
  );
};
