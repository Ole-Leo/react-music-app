import cn from 'classnames';
import { trackTime } from './utils';
import { FC, useMemo, useState } from 'react';
import { TrackData } from '../../../models/types';
import svgIcon from '../../../assets/svg/sprite.svg';
import trackIcon from '../../../assets/svg/track-icon.svg';

import styles from './styles.module.css';

export type TrackProps = TrackData & {
  onClick?: VoidFunction;
  isActive?: boolean;
};

export const Track: FC<TrackProps> = ({
  name,
  author,
  album,
  duration_in_seconds: time,
  onClick,
  isActive = false,
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const memoTrackTime = useMemo(() => trackTime(time), [time]);

  const likeClickHandler = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className={cn(styles.track, isActive && styles.active)}>
      <div className={styles.title} onClick={onClick}>
        <img className={styles.titleImg} src={trackIcon} alt="track-icon" />
        <div className={styles.titleText}>{name}</div>
      </div>
      <div className={styles.performer}>{author}</div>
      <div className={styles.album}>{album}</div>
      <div className={styles.time}>
        <svg
          className={cn(styles.timeLike, isLiked && styles.liked)}
          onClick={likeClickHandler}
        >
          <use xlinkHref={`${svgIcon}#like`}></use>
        </svg>
        <div className={styles.timeTime}>{memoTrackTime}</div>
      </div>
    </div>
  );
};
