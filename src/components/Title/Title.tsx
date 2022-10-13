import { FC } from 'react';
import block from 'bem-cn-lite';

import './Title.css';

type TitleProps = {
  text?: string;
};

const title = block('title');

export const Title: FC<TitleProps> = ({ text }) => {
  return <h2 className={title()}>{text}</h2>;
};
