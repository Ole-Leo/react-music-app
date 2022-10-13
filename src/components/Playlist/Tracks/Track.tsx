import { FC, useMemo } from 'react';
import block from 'bem-cn-lite';
import trackIcon from '../../../assets/svg/track-icon.svg';
import svgIcon from '../../../assets/svg/sprite.svg';
import { trackTime } from './utils';
import { TrackData } from '../../../models/types';

import './Tracks.css';

const track = block('track');

export type TrackProps = TrackData & {
  onClick?: VoidFunction;
  isActive?: boolean;
};

export const Track: FC<TrackProps> = ({
  name,
  author,
  album,
  duration_in_seconds: duration,
  onClick,
  isActive = false,
}) => {
  const memoTrackTime = useMemo(() => trackTime(duration), [duration]);

  return (
    <div className={track({ active: isActive })}>
      <div className={track('title')} onClick={onClick}>
        <img className={track('title-img')} src={trackIcon} alt="track-icon" />
        <div className={track('title-text')}>{name}</div>
      </div>
      <div className={track('performer')}>{author}</div>
      <div className={track('album')}>{album}</div>
      <div className={track('time')}>
        <svg className={track('time-like')}>
          <use xlinkHref={`${svgIcon}#like`}></use>
        </svg>
        <div className={track('time-time')}>{memoTrackTime}</div>
      </div>
    </div>
  );
};
