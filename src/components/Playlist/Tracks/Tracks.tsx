import './Tracks.css';
import { FC } from 'react';
import block from 'bem-cn-lite';
import Track from './Track';
import { useActions } from '../../../store/actions';
import { TrackData } from '../../../models/types';
import { useAppSelector } from '../../../hooks/reduxHook';

const tracks = block('tracks');

type TracksProps = {
  trackList: TrackData[];
};

const Tracks: FC<TracksProps> = ({ trackList }) => {
  const { getTrackIndex, setPlay, addTracks } = useActions();
  const { trackIndex, tracks: songs } = useAppSelector(state => state.player);

  const clickHandler = (i: number) => {
    addTracks(trackList);
    getTrackIndex(i);
    setPlay(true);
  };

  return (
    <div className={tracks()}>
      {trackList.map((song, i) => (
        <Track
          key={song.id}
          {...song}
          onClick={() => clickHandler(i)}
          isActive={song === songs[trackIndex]}
        />
      ))}
    </div>
  );
};

export default Tracks;
