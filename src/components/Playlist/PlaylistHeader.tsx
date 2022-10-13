import { FC } from 'react';
import { playlist } from './Playlist';
import svgIcon from '../../assets/svg/sprite.svg';

export const PlaylistHeader: FC = () => {
  return (
    <div className={playlist('header')}>
      <div className={playlist('header', { track: true })}>ТРЕК</div>
      <div className={playlist('header', { performer: true })}>ИСПОЛНИТЕЛЬ</div>
      <div className={playlist('header', { album: true })}>АЛЬБОМ</div>
      <div className={playlist('header', { time: true })}>
        <svg className={playlist('header', { 'time-svg': true })}>
          <use xlinkHref={`${svgIcon}#time`}></use>
        </svg>
      </div>
    </div>
  );
};
