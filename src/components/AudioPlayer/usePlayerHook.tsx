import { useState } from 'react';
import { useAppSelector } from '../../hooks/reduxHook';
import { useActions } from '../../store/actions';
import { getRandomIndex } from './utils';

const usePlayerHook = () => {
  const [shuffled, setShuffled] = useState(false);
  const { getTrackIndex } = useActions();
  const { tracks, trackIndex } = useAppSelector(state => state.player);

  const currentTrack = tracks[trackIndex];
  const nextTrackHandler = () => {
    if (shuffled) {
      getTrackIndex(getRandomIndex(0, tracks.length - 1));
    } else {
      trackIndex === tracks.length - 1
        ? getTrackIndex(0)
        : getTrackIndex(trackIndex + 1);
    }
  };

  const prevTrackHandler = () => {
    if (shuffled) {
      getTrackIndex(getRandomIndex(0, tracks.length - 1));
    } else {
      trackIndex === 0
        ? getTrackIndex(tracks.length - 1)
        : getTrackIndex(trackIndex - 1);
    }
  };
  return {
    shuffled,
    setShuffled,
    currentTrack,
    nextTrackHandler,
    prevTrackHandler,
  };
};

export default usePlayerHook;
