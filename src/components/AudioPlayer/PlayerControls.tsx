import { PlayerBtn } from './PlayerBtn';
import { toggleHandler } from './utils';
import { usePlayerHook } from './usePlayerHook';
import svgIcon from '../../assets/svg/sprite.svg';

type Props = {
  play: boolean;
  onPlayPauseClick?: VoidFunction;
  onRepeat?: VoidFunction;
  isRepeatClicked?: boolean;
};

export const PlayerControls = ({
  play,
  onPlayPauseClick,
  onRepeat,
  isRepeatClicked,
}: Props) => {
  const { shuffled, setShuffled, nextTrackHandler, prevTrackHandler } =
    usePlayerHook();

  return (
    <>
      <PlayerBtn
        src={`${svgIcon}#prev`}
        name="prev"
        onClick={prevTrackHandler}
      />
      <PlayerBtn
        src={`${svgIcon}#${play ? 'pause' : 'play'}`}
        name="play"
        onClick={onPlayPauseClick}
      />

      <PlayerBtn
        src={`${svgIcon}#next`}
        name="next"
        onClick={nextTrackHandler}
      />
      <PlayerBtn
        src={`${svgIcon}#repeat`}
        name="repeat"
        onClick={onRepeat}
        isClicked={isRepeatClicked}
      />
      <PlayerBtn
        src={`${svgIcon}#shuffle`}
        name="shuffle"
        onClick={() => toggleHandler(setShuffled, shuffled)}
        isClicked={shuffled}
      />
    </>
  );
};
