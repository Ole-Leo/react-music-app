import './AudioPlayer.css';

import block from 'bem-cn-lite';
import svgIcon from '../../assets/svg/sprite.svg';
import PlayerBtn from './PlayerBtn';
import PlayerControls from './PlayerControls';
import PlayerTrack from './PlayerTrack';
import PlayerVolume from './PlayerVolume';
import PlayerProgress from './PlayerProgress';
import { useAppSelector } from '../../hooks/reduxHook';
import { FC, useEffect, useRef, useState, ChangeEvent } from 'react';

export const audioPlayer = block('audioPlayer');

const AudioPlayer: FC = () => {
  const [isPlayerShown, setIsPlayerShown] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volumeValue, setVolumeValue] = useState(50);
  const [isMute, setIsMute] = useState(false);

  const { currentTrack } = useAppSelector(state => state.player);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (currentTrack) {
      setIsPlayerShown(true);
      setIsPlaying(true);
    }
  }, [currentTrack]);

  useEffect(() => {
    isPlaying ? audioRef.current?.play() : audioRef.current?.pause();
  }, [isPlaying]);

  const togglePlayHandler = () => {
    setIsPlaying(!isPlaying);
  };

  const muteToggleHandler = () => {
    setIsMute(!isMute);
  };

  const changeVolumeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setVolumeValue(Number(value));
    audioRef.current!.volume = volumeValue / 100;
  };

  return (
    <>
      {isPlayerShown && (
        <div className={audioPlayer()}>
          <audio src={currentTrack?.track_file} ref={audioRef} muted={isMute} />
          <PlayerProgress />
          <div className={audioPlayer('content')}>
            <PlayerControls
              isPlaying={isPlaying}
              onToggle={togglePlayHandler}
            />
            <PlayerTrack
              title={currentTrack!.name}
              author={currentTrack!.author}
            />
            <PlayerBtn src={`${svgIcon}#like`} name="like" />
            <PlayerBtn src={`${svgIcon}#dislike`} name="dislike" />
            <PlayerVolume
              onClick={muteToggleHandler}
              value={volumeValue}
              onChange={changeVolumeHandler}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default AudioPlayer;
