import { FC } from 'react';
import block from 'bem-cn-lite';
import PlaylistOffers from './PlaylistOffers';
import UserInfo from './UserInfo';

const sidebar = block('sidebar');

type SidebarProps = {
  isOffersShown?: boolean;
};

const Sidebar: FC<SidebarProps> = ({ isOffersShown = true }) => {
  return (
    <div className={sidebar()}>
      <UserInfo />
      {isOffersShown && <PlaylistOffers />}
    </div>
  );
};

export default Sidebar;
