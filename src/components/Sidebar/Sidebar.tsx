import { User } from '../User/User';
import { PlaylistOffers } from './PlaylistOffers';

import styles from './styles.module.css';

type Props = {
  isOffersShown?: boolean;
  isLoading?: boolean;
};

export const Sidebar = ({ isOffersShown = true, isLoading }: Props) => {
  return (
    <div className={styles.sidebar}>
      <User />
      {isOffersShown && <PlaylistOffers isLoading={isLoading} />}
    </div>
  );
};
