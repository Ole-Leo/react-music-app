import { FC } from 'react';

type LogoProps = {
  img: string;
  href: string;
};

export const Logo: FC<LogoProps> = ({ img, href }) => {
  return (
    <a href={href}>
      <img src={img} alt="logo" />
    </a>
  );
};
