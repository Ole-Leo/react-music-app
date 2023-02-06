import { forwardRef, useEffect, useState } from 'react';

import styles from './styles.module.css';

export const PlayerProgress = forwardRef<HTMLAudioElement>((_, ref) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (ref !== null && typeof ref !== 'function') {
      ref.current!.ontimeupdate = () => {
        const curTime =
          (ref.current!.currentTime / ref.current!.duration) * 100;
        setProgress(curTime);
      };
    }
  }, [ref]);

  return (
    <div className={styles.progress}>
      <div
        className={styles.progressBar}
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
});
