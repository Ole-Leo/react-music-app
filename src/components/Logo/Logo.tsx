import { Link } from 'react-router-dom';

type Props = {
  img: string;
  href: string;
  onClick?: React.MouseEventHandler<Element>;
};

export const Logo = ({ img, href, onClick }: Props) => {
  return (
    <Link to={href} onClick={onClick}>
      <img src={img} alt="logo" />
    </Link>
  );
};
