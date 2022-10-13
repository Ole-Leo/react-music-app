import { FC } from 'react';
import trackIcon from '../../assets/svg/track-icon.svg';
import { audioPlayer } from './AudioPlayer';

type PlayerTrackProps = {
  title: string;
  author: string;
};

export const PlayerTrack: FC<PlayerTrackProps> = ({ title, author }) => {
  return (
    <div className={audioPlayer('track')}>
      <img
        className={audioPlayer('track_img')}
        src={trackIcon}
        alt="track-icon"
      />
      <div className={audioPlayer('track_title')}>
        <div className={audioPlayer('track_title-text')}>{title}</div>
        <div className={audioPlayer('track_performer')}>{author}</div>
      </div>
    </div>
  );
};
