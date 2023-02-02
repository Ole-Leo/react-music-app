import cn from 'classnames';
import { trackTime } from './utils';
import { FC, useMemo, useState } from 'react';
import { TrackData } from '../../../models/types';
import svgIcon from '../../../assets/svg/sprite.svg';
import trackIcon from '../../../assets/svg/track-icon.svg';
import { useFavoriteTrack } from '../../../hooks/useFavoriteTrack';

import styles from './styles.module.css';

export type TrackProps = {
  track: TrackData;
  onClick?: VoidFunction;
  isActive?: boolean;
};

export const Track: FC<TrackProps> = ({ track, onClick, isActive = false }) => {
  const { favorite, toggleFavoriteTrack } = useFavoriteTrack(track);
  const [isLiked, setIsLiked] = useState(favorite);
  const memoTrackTime = useMemo(
    () => trackTime(track.duration_in_seconds),
    [track.duration_in_seconds]
  );

  const likeClickHandler = () => {
    setIsLiked(!favorite);
    toggleFavoriteTrack(track.id || 0);
  };

  return (
    <div className={cn(styles.track, isActive && styles.active)}>
      <div className={styles.title} onClick={onClick}>
        <img className={styles.titleImg} src={trackIcon} alt="track-icon" />
        <div className={styles.titleText}>{track.name}</div>
      </div>
      <div className={styles.performer}>{track.author}</div>
      <div className={styles.album}>{track.album}</div>
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
