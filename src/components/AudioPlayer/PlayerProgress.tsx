import styles from './styles.module.css';

export const PlayerProgress = () => {
  return (
    <div className={styles.progress}>
      <input className={styles.progressInput} type="range" />
    </div>
  );
};
