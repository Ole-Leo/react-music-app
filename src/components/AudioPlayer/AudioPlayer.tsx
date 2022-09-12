import './AudioPlayer.css';

import block from 'bem-cn-lite';
import svgIcon from '../../assets/svg/sprite.svg';
import PlayerBtn from './PlayerBtn';
import PlayerControls from './PlayerControls';
import PlayerTrack from './PlayerTrack';
import PlayerVolume from './PlayerVolume';
import PlayerProgress from './PlayerProgress';
import { FC, useEffect, useRef, useState } from 'react';
import { useAppSelector } from '../../hooks/reduxHook';
import { useActions } from '../../store/actions';
import { toggleHandler } from './utils';
import usePlayerHook from './usePlayerHook';
import AudioElement from './AudioElement';

export const audioPlayer = block('audioPlayer');

const AudioPlayer: FC = () => {
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
        <div className={audioPlayer()}>
          <AudioElement
            ref={audioRef}
            src={currentTrack.track_file}
            mute={mute}
            repeat={repeat}
            onTrackEnd={nextTrackHandler}
          />
          <PlayerProgress />
          <div className={audioPlayer('content')}>
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
            <PlayerBtn src={`${svgIcon}#like`} name="like" />
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

export default AudioPlayer;
