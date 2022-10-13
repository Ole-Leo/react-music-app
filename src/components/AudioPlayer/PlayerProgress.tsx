import { audioPlayer } from './AudioPlayer';

export const PlayerProgress = () => {
  return (
    <div className={audioPlayer('progress')}>
      <input className={audioPlayer('progress-input')} type="range" />
    </div>
  );
};
