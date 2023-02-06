import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import styles from './styles.module.css';

type Props = {
  text?: string;
  isLoading?: boolean;
};

export const Title = ({ text, isLoading }: Props) => {
  return !isLoading ? (
    <h2 className={styles.title}>{text}</h2>
  ) : (
    <Skeleton
      baseColor="#202020"
      highlightColor="#444"
      className={styles.skeleton}
    />
  );
};
