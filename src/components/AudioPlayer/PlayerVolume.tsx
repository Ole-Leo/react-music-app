import { PlayerBtn } from './PlayerBtn';
import svgIcon from '../../assets/svg/sprite.svg';
import { forwardRef, useEffect, useState } from 'react';

import styles from './styles.module.css';

type PlayerVolumeProps = {
  onClick?: VoidFunction;
};

export const PlayerVolume = forwardRef<HTMLAudioElement, PlayerVolumeProps>(
  ({ onClick }, ref) => {
    const [volume, setVolume] = useState(50);

    const changeVolumeHandler = (
      event: React.ChangeEvent<HTMLInputElement>
    ) => {
      const { value } = event.target;
      setVolume(Number(value));
    };

    useEffect(() => {
      if (ref !== null && typeof ref !== 'function') {
        ref.current!.volume = volume / 100;
      }
    }, [ref, volume]);

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
