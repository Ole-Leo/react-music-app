import { FC } from 'react';
import { User } from '../User/User';
import { PlaylistOffers } from './PlaylistOffers';

import styles from './styles.module.css';

type SidebarProps = {
  isOffersShown?: boolean;
};

export const Sidebar: FC<SidebarProps> = ({ isOffersShown = true }) => {
  return (
    <div className={styles.sidebar}>
      <User />
      {isOffersShown && <PlaylistOffers />}
    </div>
  );
};
