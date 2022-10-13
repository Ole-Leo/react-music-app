import { FC } from 'react';
import { audioPlayer } from './AudioPlayer';

type PlayerBtnProps = {
  src: string;
  name?: string;
  onClick?: VoidFunction;
  isClicked?: boolean;
};

export const PlayerBtn: FC<PlayerBtnProps> = ({
  src,
  name,
  onClick,
  isClicked = false,
}) => {
  return (
    <button
      className={audioPlayer(`btn`, { [`${name}`]: true, active: isClicked })}
      onClick={onClick}
    >
      <svg className={audioPlayer(`btn`, { [`svg-${name}`]: true })}>
        <use xlinkHref={src}></use>
      </svg>
    </button>
  );
};
