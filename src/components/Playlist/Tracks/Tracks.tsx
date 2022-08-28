import './Tracks.css';
import { FC } from 'react';
import block from 'bem-cn-lite';
import Track from './Track';
import { useActions } from '../../../store/actions';
import { TrackData } from '../../../types/types';

const tracks = block('tracks');

type TracksProps = {
  trackList: TrackData[];
};

const Tracks: FC<TracksProps> = ({ trackList }) => {
  const { getCurrentTrack, getCurrentTrackIndex, setPlay } = useActions();

  const clickHandler = (data: TrackData, i: number) => {
    getCurrentTrack(data);
    getCurrentTrackIndex(i);
    setPlay(true);
  };

  return (
    <div className={tracks()}>
      {trackList.map((song, i) => (
        <Track key={song.id} {...song} onClick={() => clickHandler(song, i)} />
      ))}
    </div>
  );
};

export default Tracks;
