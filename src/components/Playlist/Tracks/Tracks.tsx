import './Tracks.css';
import { FC, useEffect } from 'react';
import block from 'bem-cn-lite';
import Track from './Track';
import { useActions } from '../../../store/actions';
import { TrackData } from '../../../types/types';

const tracks = block('tracks');

type TracksProps = {
  trackList: TrackData[];
};

const Tracks: FC<TracksProps> = ({ trackList }) => {
  const { setTrackIndex, setPlay, setTracks } = useActions();

  useEffect(() => {
    setTracks(trackList);
  }, [setTracks, trackList]);

  const clickHandler = (i: number) => {
    setTrackIndex(i);
    setPlay(true);
  };

  return (
    <div className={tracks()}>
      {trackList.map((song, i) => (
        <Track key={song.id} {...song} onClick={() => clickHandler(i)} />
      ))}
    </div>
  );
};

export default Tracks;
