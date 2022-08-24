import './Tracks.css';
import { FC } from 'react';
import block from 'bem-cn-lite';
import Track from './Track';
import { useGetSongsQuery } from '../../../store/songsAPI';
import { useDispatch } from 'react-redux';
import { playSong } from '../../../store/songSlice';

const tracks = block('tracks');

const Tracks: FC = () => {
  const { data: songs = [] } = useGetSongsQuery();
  const dispatch = useDispatch();

  return (
    <div className={tracks()}>
      {songs.map(song => (
        <Track
          key={song.id}
          {...song}
          onClick={() => dispatch(playSong(song))}
        />
      ))}
    </div>
  );
};

export default Tracks;
