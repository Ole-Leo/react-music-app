import './AudioPlayer.css';

import block from 'bem-cn-lite';
import svgIcon from '../../assets/svg/sprite.svg';
import PlayerBtn from './PlayerBtn';
import PlayerControls from './PlayerControls';
import PlayerTrack from './PlayerTrack';
import PlayerVolume from './PlayerVolume';
import PlayerProgress from './PlayerProgress';
import { FC, useEffect, useRef } from 'react';
import { useAppSelector } from '../../hooks/reduxHook';
import { useActions } from '../../store/actions';

export const audioPlayer = block('audioPlayer');

const AudioPlayer: FC = () => {
  const { setMute, setPlay, setVolume } = useActions();
  const { tracks, trackIndex, isPlay, isMute, volume } = useAppSelector(
    state => state.player
  );

  const currentTrack = tracks[trackIndex];
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (currentTrack) {
      isPlay ? audioRef.current?.play() : audioRef.current?.pause();
    }
  }, [currentTrack, isPlay]);

  const togglePlayHandler = () => {
    setPlay(!isPlay);
  };

  const muteToggleHandler = () => {
    setMute(!isMute);
  };

  const changeVolumeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setVolume(Number(value));
    audioRef.current!.volume = volume / 100;
  };

  return (
    <>
      {currentTrack && (
        <div className={audioPlayer()}>
          <audio
            src={currentTrack.track_file}
            ref={audioRef}
            muted={isMute}
            preload="auto"
          />
          <PlayerProgress />
          <div className={audioPlayer('content')}>
            <PlayerControls play={isPlay} onClick={togglePlayHandler} />
            <PlayerTrack
              title={currentTrack.name}
              author={currentTrack.author}
            />
            <PlayerBtn src={`${svgIcon}#like`} name="like" />
            <PlayerBtn src={`${svgIcon}#dislike`} name="dislike" />
            <PlayerVolume
              onClick={muteToggleHandler}
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
