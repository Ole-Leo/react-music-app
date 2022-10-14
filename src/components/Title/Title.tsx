import { FC } from 'react';

import styles from './styles.module.css';

type TitleProps = {
  text?: string;
};

export const Title: FC<TitleProps> = ({ text }) => {
  return <h2 className={styles.title}>{text}</h2>;
};
