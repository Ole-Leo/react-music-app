import { FC } from 'react';
import PlayerBtn from './PlayerBtn';
import svgIcon from '../../assets/svg/sprite.svg';

type PlayerControlsProps = {
  play: boolean;
  onPlayPauseClick?: VoidFunction;
  onPrevClick?: VoidFunction;
  onNextClick?: VoidFunction;
  onRepeat?: VoidFunction;
  onShuffle?: VoidFunction;
};

const PlayerControls: FC<PlayerControlsProps> = ({
  play,
  onPlayPauseClick,
  onPrevClick,
  onNextClick,
  onRepeat,
  onShuffle,
}) => {
  return (
    <>
      <PlayerBtn src={`${svgIcon}#prev`} name="prev" onClick={onPrevClick} />
      <PlayerBtn
        src={`${svgIcon}#${play ? 'pause' : 'play'}`}
        name="play"
        onClick={onPlayPauseClick}
      />

      <PlayerBtn src={`${svgIcon}#next`} name="next" onClick={onNextClick} />
      <PlayerBtn src={`${svgIcon}#repeat`} name="repeat" onClick={onRepeat} />
      <PlayerBtn
        src={`${svgIcon}#shuffle`}
        name="shuffle"
        onClick={onShuffle}
      />
    </>
  );
};

export default PlayerControls;
