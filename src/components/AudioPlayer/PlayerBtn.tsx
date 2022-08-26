import { FC } from 'react';
import { audioPlayer } from './AudioPlayer';

type PlayerBtnProps = {
  src: string;
  name?: string;
  onClick?: VoidFunction;
};

const PlayerBtn: FC<PlayerBtnProps> = ({ src, name, onClick }) => {
  return (
    <button
      className={audioPlayer(`btn`, { [`${name}`]: true })}
      onClick={onClick}
    >
      <svg className={audioPlayer(`btn`, { [`svg-${name}`]: true })}>
        <use xlinkHref={src}></use>
      </svg>
    </button>
  );
};

export default PlayerBtn;
