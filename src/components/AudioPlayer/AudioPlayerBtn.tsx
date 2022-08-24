import { FC } from 'react';
import { audioPlayer } from './AudioPlayer';

type AudioPlayerBtnProps = {
  link: string;
  name?: string;
  onClick?: VoidFunction;
};

const AudioPlayerBtn: FC<AudioPlayerBtnProps> = ({ link, name, onClick }) => {
  return (
    <button
      className={audioPlayer(`btn`, { [`${name}`]: true })}
      onClick={onClick}
    >
      <svg className={audioPlayer(`btn`, { [`svg-${name}`]: true })}>
        <use xlinkHref={link}></use>
      </svg>
    </button>
  );
};

export default AudioPlayerBtn;
