import './Tracks.css';
import { FC, useEffect } from 'react';
import block from 'bem-cn-lite';
import Track from './Track';
import { useActions } from '../../../store/actions';
import { TrackData } from '../../../types/types';
import { useAppSelector } from '../../../hooks/reduxHook';

const tracks = block('tracks');

type TracksProps = {
  trackList: TrackData[];
};

const Tracks: FC<TracksProps> = ({ trackList }) => {
  const { setTrackIndex, setActive, setPlay, addTracks } = useActions();
  const { trackIndex, isActive } = useAppSelector(state => state.player);

  useEffect(() => {
    addTracks(trackList);
  }, [addTracks, trackList]);

  const clickHandler = (i: number) => {
    setTrackIndex(i);
    setPlay(true);
    setActive();
  };

  return (
    <div className={tracks()}>
      {trackList.map((song, i) => (
        <Track
          key={song.id}
          {...song}
          onClick={() => clickHandler(i)}
          isPlay={isActive && trackIndex === i}
        />
      ))}
    </div>
  );
};

export default Tracks;
