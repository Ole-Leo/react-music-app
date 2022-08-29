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
import { getRandomIndex, toggleHandler } from './utils';

export const audioPlayer = block('audioPlayer');

const AudioPlayer: FC = () => {
  const [mute, setMute] = useState(false);
  const [volume, setVolume] = useState(100);
  const [repeat, setRepeat] = useState(false);
  const [shuffled, setShuffled] = useState(false);

  const { setTrackIndex, setPlay } = useActions();
  const { tracks, trackIndex, isActive, isPlay } = useAppSelector(
    state => state.player
  );

  const currentTrack = tracks[trackIndex];
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (currentTrack) {
      isPlay ? audioRef.current?.play() : audioRef.current?.pause();
    }
  }, [currentTrack, isPlay]);

  const togglePlayPause = () => {
    setPlay(!isPlay);
  };

  const changeVolumeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setVolume(Number(value));
    audioRef.current!.volume = volume / 100;
  };

  const nextTrackHandler = () => {
    if (shuffled) {
      setTrackIndex(getRandomIndex(0, tracks.length - 1));
    } else {
      trackIndex === tracks.length - 1
        ? setTrackIndex(0)
        : setTrackIndex(trackIndex + 1);
    }
  };

  const prevTrackHandler = () => {
    if (shuffled) {
      setTrackIndex(getRandomIndex(0, tracks.length - 1));
    } else {
      trackIndex === 0
        ? setTrackIndex(tracks.length - 1)
        : setTrackIndex(trackIndex - 1);
    }
  };

  return (
    <>
      {isActive && (
        <div className={audioPlayer()}>
          <audio
            src={currentTrack.track_file}
            ref={audioRef}
            muted={mute}
            preload="auto"
            loop={repeat}
            onEnded={nextTrackHandler}
          />
          <PlayerProgress />
          <div className={audioPlayer('content')}>
            <PlayerControls
              play={isPlay}
              onPlayPauseClick={togglePlayPause}
              onPrevClick={prevTrackHandler}
              onNextClick={nextTrackHandler}
              onRepeat={() => toggleHandler(setRepeat, repeat)}
              onShuffle={() => toggleHandler(setShuffled, shuffled)}
            />
            <PlayerTrack
              title={currentTrack.name}
              author={currentTrack.author}
            />
            <PlayerBtn src={`${svgIcon}#like`} name="like" />
            <PlayerBtn src={`${svgIcon}#dislike`} name="dislike" />
            <PlayerVolume
              onClick={() => toggleHandler(setMute, mute)}
              value={volume}
              onChange={changeVolumeHandler}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default AudioPlayer;
