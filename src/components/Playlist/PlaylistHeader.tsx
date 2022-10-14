import { FC } from 'react';
import svgIcon from '../../assets/svg/sprite.svg';

import styles from './styles.module.css';

export const PlaylistHeader: FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.track}>ТРЕК</div>
      <div className={styles.performer}>ИСПОЛНИТЕЛЬ</div>
      <div className={styles.album}>АЛЬБОМ</div>
      <div className={styles.time}>
        <svg className={styles.timeSvg}>
          <use xlinkHref={`${svgIcon}#time`}></use>
        </svg>
      </div>
    </div>
  );
};
