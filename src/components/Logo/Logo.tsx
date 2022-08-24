import { FC } from 'react';

type LogoProps = {
  img: string;
  href: string;
};

const Logo: FC<LogoProps> = ({ img, href }) => {
  return (
    <a href={href}>
      <img src={img} alt="logo" />
    </a>
  );
};

export default Logo;
