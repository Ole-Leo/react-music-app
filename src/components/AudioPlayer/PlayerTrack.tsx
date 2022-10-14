import { FC } from 'react';
import trackIcon from '../../assets/svg/track-icon.svg';

import styles from './styles.module.css';

type PlayerTrackProps = {
  title: string;
  author: string;
};

export const PlayerTrack: FC<PlayerTrackProps> = ({ title, author }) => {
  return (
    <div className={styles.track}>
      <img className={styles.trackImg} src={trackIcon} alt="track-icon" />
      <div className={styles.title}>
        <div className={styles.text}>{title}</div>
        <div className={styles.performer}>{author}</div>
      </div>
    </div>
  );
};
