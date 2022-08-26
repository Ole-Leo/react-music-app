import { FC, ChangeEvent } from 'react';
import svgIcon from '../../assets/svg/sprite.svg';
import { audioPlayer } from './AudioPlayer';
import PlayerBtn from './PlayerBtn';

type PlayerVolumeProps = {
  value: number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onClick?: VoidFunction;
};

const PlayerVolume: FC<PlayerVolumeProps> = ({ onClick, value, onChange }) => {
  return (
    <div className={audioPlayer('volume')}>
      <PlayerBtn src={`${svgIcon}#volume`} name="volume" onClick={onClick} />
      <input
        type="range"
        className={audioPlayer('volume-input')}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default PlayerVolume;
