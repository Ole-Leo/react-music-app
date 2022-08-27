import './Tracks.css';
import { FC } from 'react';
import block from 'bem-cn-lite';
import Track from './Track';
import { useGetTracksQuery } from '../../../store/tracksAPI';
import { useActions } from '../../../hooks/actions';

const tracks = block('tracks');

const Tracks: FC = () => {
  const { data = [], isLoading } = useGetTracksQuery();
  const { getCurrentTrack } = useActions();

  return (
    <div className={tracks()}>
      {isLoading && <div>Тут будет скелетон</div>}
      {data.map(song => (
        <Track key={song.id} {...song} onClick={() => getCurrentTrack(song)} />
      ))}
    </div>
  );
};

export default Tracks;
