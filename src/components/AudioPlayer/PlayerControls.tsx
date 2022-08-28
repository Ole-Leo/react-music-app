import { FC } from 'react';
import PlayerBtn from './PlayerBtn';
import svgIcon from '../../assets/svg/sprite.svg';
import { useActions } from '../../store/actions';
import { useAppSelector } from '../../hooks/reduxHook';

type PlayerControlsProps = {
  play: boolean;
  onClick: VoidFunction;
};

const PlayerControls: FC<PlayerControlsProps> = ({ play, onClick }) => {
  const { setTrackIndex } = useActions();
  const { tracks, trackIndex } = useAppSelector(state => state.player);

  const prevTrackHandler = () => {
    console.log();
    if (trackIndex - 1 < 0) {
      setTrackIndex(tracks.length - 1);
    } else {
      setTrackIndex(trackIndex - 1);
    }
  };

  const nextTrackHandler = () => {
    if (trackIndex < tracks.length - 1) {
      setTrackIndex(trackIndex + 1);
    } else {
      setTrackIndex(0);
    }
  };

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
        onClick={onClick}
      />

      <PlayerBtn
        src={`${svgIcon}#next`}
        name="next"
        onClick={nextTrackHandler}
      />
      <PlayerBtn src={`${svgIcon}#repeat`} name="repeat" />
      <PlayerBtn src={`${svgIcon}#shuffle`} name="shuffle" />
    </>
  );
};

export default PlayerControls;
