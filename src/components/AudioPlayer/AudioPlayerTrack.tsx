import { FC } from 'react';
import trackIcon from '../../assets/svg/track-icon.svg';
import { audioPlayer } from './AudioPlayer';

type AudioPlayerTrackProps = {
  title: string;
  author: string;
};

const AudioPlayerTrack: FC<AudioPlayerTrackProps> = ({ title, author }) => {
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

export default AudioPlayerTrack;
