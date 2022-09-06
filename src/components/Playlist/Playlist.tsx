import './Playlist.css';

import { FC } from 'react';
import block from 'bem-cn-lite';
import PlaylistHeader from './PlaylistHeader';
import Tracks from './Tracks/Tracks';
import { TrackData } from '../../models/types';

export const playlist = block('playlist');

type PlaylistProps = {
  tracks: TrackData[];
  loading: boolean;
};

const Playlist: FC<PlaylistProps> = ({ tracks, loading }) => {
  return (
    <div className={playlist()}>
      <PlaylistHeader />
      <Tracks trackList={tracks} />
    </div>
  );
};

export default Playlist;
