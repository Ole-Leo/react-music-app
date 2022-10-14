import { PlayerBtn } from './PlayerBtn';
import { forwardRef, useState } from 'react';
import svgIcon from '../../assets/svg/sprite.svg';

import styles from './styles.module.css';

type PlayerVolumeProps = {
  onClick?: VoidFunction;
};

export const PlayerVolume = forwardRef<HTMLAudioElement, PlayerVolumeProps>(
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
      <div className={styles.volume}>
        <PlayerBtn src={`${svgIcon}#volume`} name="volume" onClick={onClick} />
        <input
          type="range"
          className={styles.volumeInput}
          value={volume}
          onChange={changeVolumeHandler}
        />
      </div>
    );
  }
);
