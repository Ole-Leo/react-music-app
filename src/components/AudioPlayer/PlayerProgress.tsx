import React from 'react';
import { audioPlayer } from './AudioPlayer';

const PlayerProgress = () => {
  return (
    <div className={audioPlayer('progress')}>
      <input className={audioPlayer('progress-input')} type="range" />
    </div>
  );
};

export default PlayerProgress;
