import { forwardRef, useState } from 'react';
import svgIcon from '../../assets/svg/sprite.svg';
import { audioPlayer } from './AudioPlayer';
import PlayerBtn from './PlayerBtn';

type PlayerVolumeProps = {
  onClick?: VoidFunction;
};

const PlayerVolume = forwardRef<HTMLAudioElement, PlayerVolumeProps>(
  ({ onClick }, ref) => {
    const [volume, setVolume] = useState(100);

    const changeVolumeHandler = (
      event: React.ChangeEvent<HTMLInputElement>
    ) => {
      const { value } = event.target;
      setVolume(Number(value));

      if (ref !== null && typeof ref !== 'function') {
        ref.current!.volume = volume / 100;
      }
    };

    return (
      <div className={audioPlayer('volume')}>
        <PlayerBtn src={`${svgIcon}#volume`} name="volume" onClick={onClick} />
        <input
          type="range"
          className={audioPlayer('volume-input')}
          value={volume}
          onChange={changeVolumeHandler}
        />
      </div>
    );
  }
);

export default PlayerVolume;
