import { FC } from 'react';
import block from 'bem-cn-lite';

import './Playlist.css';
import PlaylistHeader from './PlaylistHeader';
import Tracks from './Tracks/Tracks';

export const playlist = block('playlist');

const Playlist: FC = () => {
  return (
    <div className={playlist()}>
      <PlaylistHeader />
      <Tracks />
    </div>
  );
};

export default Playlist;
