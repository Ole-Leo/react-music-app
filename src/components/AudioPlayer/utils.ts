import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { TrackData } from '../../types/types';

const prevTrackHandler = (
  index: number,
  setState: ActionCreatorWithPayload<number, string>,
  array: TrackData[]
) => {
  if (index === 0) {
    setState(array.length - 1);
  } else {
    setState(index - 1);
  }
};

const nextTrackHandler = (
  index: number,
  setState: ActionCreatorWithPayload<number, string>,
  array: TrackData[]
) => {
  if (index === array.length - 1) {
    setState(0);
  } else {
    setState(index + 1);
  }
};

const toggleHandler = (
  setState: React.Dispatch<React.SetStateAction<boolean>>,
  state: boolean
) => {
  setState(!state);
};

function getRandomIndex(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export { toggleHandler, getRandomIndex, prevTrackHandler, nextTrackHandler };
