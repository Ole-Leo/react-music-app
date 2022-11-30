import { FC } from 'react';
import { Track } from './Track/Track';
import { TrackData } from '../../models/types';
import { useActions } from '../../redux/actions';
import { useAppSelector } from '../../hooks/reduxHook';
import { PlaylistHeader } from './PlaylistHeader/PlaylistHeader';

import styles from './styles.module.css';

type TracksProps = {
  tracks: TrackData[];
  isLoading?: boolean;
};

export const Playlist: FC<TracksProps> = ({ tracks, isLoading }) => {
  const { getTrackIndex, setPlay, addTracks } = useActions();
  const { trackIndex, tracks: playlist } = useAppSelector(
    state => state.player
  );

  const clickHandler = (i: number) => {
    addTracks(tracks);
    getTrackIndex(i);
    setPlay(true);
  };

  return (
    <div className={styles.playlist}>
      <PlaylistHeader />
      <div className={styles.tracks}>
        {!isLoading &&
          tracks.map((track, i) => (
            <Track
              key={track.id}
              {...track}
              onClick={() => clickHandler(i)}
              isActive={track === playlist[trackIndex]}
            />
          ))}
      </div>
    </div>
  );
};
