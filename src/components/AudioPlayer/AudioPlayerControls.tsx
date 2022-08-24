import { FC } from 'react';
import AudioPlayerBtn from './AudioPlayerBtn';
import svgIcon from '../../assets/svg/sprite.svg';

type AudioPlayerControlsProps = {
  isPlaying: boolean;
  onToggle: VoidFunction;
};

const AudioPlayerControls: FC<AudioPlayerControlsProps> = ({
  isPlaying,
  onToggle,
}) => {
  return (
    <>
      <AudioPlayerBtn link={`${svgIcon}#prev`} name="prev" />
      <AudioPlayerBtn
        link={`${svgIcon}#${isPlaying ? 'pause' : 'play'}`}
        name="play"
        onClick={onToggle}
      />

      <AudioPlayerBtn link={`${svgIcon}#next`} name="next" />
      <AudioPlayerBtn link={`${svgIcon}#repeat`} name="repeat" />
      <AudioPlayerBtn link={`${svgIcon}#shuffle`} name="shuffle" />
    </>
  );
};

export default AudioPlayerControls;
