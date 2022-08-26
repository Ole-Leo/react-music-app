import { FC } from 'react';
import PlayerBtn from './PlayerBtn';
import svgIcon from '../../assets/svg/sprite.svg';

type PlayerControlsProps = {
  isPlaying: boolean;
  onToggle: VoidFunction;
};

const PlayerControls: FC<PlayerControlsProps> = ({ isPlaying, onToggle }) => {
  return (
    <>
      <PlayerBtn src={`${svgIcon}#prev`} name="prev" />
      <PlayerBtn
        src={`${svgIcon}#${isPlaying ? 'pause' : 'play'}`}
        name="play"
        onClick={onToggle}
      />

      <PlayerBtn src={`${svgIcon}#next`} name="next" />
      <PlayerBtn src={`${svgIcon}#repeat`} name="repeat" />
      <PlayerBtn src={`${svgIcon}#shuffle`} name="shuffle" />
    </>
  );
};

export default PlayerControls;
