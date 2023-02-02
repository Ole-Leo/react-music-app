import { toggleHandler } from './utils';
import { PlayerTrack } from './PlayerTrack';
import { AudioElement } from './AudioElement';
import { PlayerVolume } from './PlayerVolume';
import { usePlayerHook } from './usePlayerHook';
import { useActions } from '../../redux/actions';
import { PlayerControls } from './PlayerControls';
import { PlayerProgress } from './PlayerProgress';
import { useAppSelector } from '../../hooks/reduxHook';
import { FC, useEffect, useRef, useState } from 'react';

import styles from './styles.module.css';

export const AudioPlayer: FC = () => {
  const [mute, setMute] = useState(false);
  const [repeat, setRepeat] = useState(false);
  const { setPlay } = useActions();
  const { isPlay } = useAppSelector(state => state.player);
  const { currentTrack, nextTrackHandler } = usePlayerHook();
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (currentTrack) {
      isPlay ? audioRef.current?.play() : audioRef.current?.pause();
    }
  }, [currentTrack, isPlay]);

  const togglePlayPause = () => {
    setPlay(!isPlay);
  };

  return (
    <>
      {currentTrack && (
        <div className={styles.player}>
          <AudioElement
            ref={audioRef}
            src={currentTrack.track_file}
            mute={mute}
            repeat={repeat}
            onTrackEnd={nextTrackHandler}
          />
          <PlayerProgress />
          <div className={styles.content}>
            <PlayerControls
              play={isPlay}
              onPlayPauseClick={togglePlayPause}
              onRepeat={() => toggleHandler(setRepeat, repeat)}
              isRepeatClicked={repeat}
            />
            <PlayerTrack
              title={currentTrack.name}
              author={currentTrack.author}
            />
            <PlayerVolume
              ref={audioRef}
              onClick={() => toggleHandler(setMute, mute)}
            />
          </div>
        </div>
      )}
    </>
  );
};
