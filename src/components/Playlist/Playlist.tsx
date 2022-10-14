import { FC } from 'react';
import { PlaylistHeader } from './PlaylistHeader';
import { Tracks } from './Tracks/Tracks';
import { TrackData } from '../../models/types';

import styles from './styles.module.css';

type PlaylistProps = {
  tracks: TrackData[];
  loading: boolean;
};

export const Playlist: FC<PlaylistProps> = ({ tracks, loading }) => {
  return (
    <div className={styles.playlist}>
      <PlaylistHeader />
      <Tracks trackList={tracks} />
    </div>
  );
};
