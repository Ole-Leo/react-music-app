import { Track } from './Track/Track';
import { TrackData } from '../../models/types';
import { useActions } from '../../redux/actions';
import { useAppSelector } from '../../hooks/reduxHook';
import { PlaylistHeader } from './PlaylistHeader/PlaylistHeader';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import styles from './styles.module.css';

type Props = {
  tracks: TrackData[];
  isLoading?: boolean;
};

export const Playlist = ({ tracks, isLoading }: Props) => {
  const { getTrackIndex, setPlay, addTracks } = useActions();
  const { trackIndex, tracks: playlist } = useAppSelector(
    state => state.player
  );

  const clickHandler = (i: number) => {
    addTracks(tracks);
    getTrackIndex(i);
    setPlay(true);
  };

  const tracksData = tracks.map((track, i) => (
    <Track
      key={track.id}
      track={track}
      onClick={() => clickHandler(i)}
      isActive={track === playlist[trackIndex]}
    />
  ));

  return (
    <div className={styles.playlist}>
      <PlaylistHeader />
      <div className={styles.tracks}>
        {!isLoading ? (
          tracksData.length > 0 ? (
            tracksData
          ) : (
            <p className={styles.warning}>Доступных треков пока нет🎵</p>
          )
        ) : (
          <Skeleton
            count={15}
            baseColor="#202020"
            highlightColor="#444"
            className={styles.skeleton}
          />
        )}
      </div>
    </div>
  );
};
