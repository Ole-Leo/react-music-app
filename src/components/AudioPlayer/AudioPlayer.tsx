import './AudioPlayer.css';

import { ChangeEvent, FC, useEffect, useRef, useState } from 'react';
import block from 'bem-cn-lite';
import svgIcon from '../../assets/svg/sprite.svg';
import AudioPlayerBtn from './AudioPlayerBtn';
import AudioPlayerControls from './AudioPlayerControls';
import AudioPlayerTrack from './AudioPlayerTrack';
import { useAppSelector } from '../../hooks/reduxHook';

export const audioPlayer = block('audioPlayer');

const AudioPlayer: FC = () => {
  const [isPlayerShown, setIsPlayerShown] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMute, setIsMute] = useState(false);
  const [volumeValue, setVolumeValue] = useState(100);

  const track = useAppSelector(state => state.song);
  // console.log(track);

  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (track) {
      setIsPlayerShown(true);
      setIsPlaying(true);
    }
  }, [track]);

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
    setVolumeValue(parseInt(value, 10));
    audioRef.current!.volume = volumeValue / 100;
  };

  return (
    <>
      {isPlayerShown && (
        <div className={audioPlayer()}>
          <audio src={track?.track_file} ref={audioRef} muted={isMute} />
          <div className={audioPlayer('progress')}>
            <input className={audioPlayer('progress-input')} type="range" />
          </div>

          <div className={audioPlayer('content')}>
            <AudioPlayerControls
              isPlaying={isPlaying}
              // onPrevClick={toPrevTrack}
              // onNextClick={toNextTrack}
              onToggle={togglePlayHandler}
            />
            <AudioPlayerTrack title={track!.name} author={track!.author} />

            <AudioPlayerBtn link={`${svgIcon}#like`} name="like" />
            <AudioPlayerBtn link={`${svgIcon}#dislike`} name="dislike" />

            <div className={audioPlayer('volume')}>
              <AudioPlayerBtn
                link={`${svgIcon}#volume`}
                name="volume"
                onClick={muteToggleHandler}
              />
              <input
                type="range"
                className={audioPlayer('volume-input')}
                value={volumeValue}
                onChange={changeVolumeHandler}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AudioPlayer;
