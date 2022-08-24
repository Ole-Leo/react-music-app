import { FC } from 'react';
import block from 'bem-cn-lite';
import PlaylistOffers from './PlaylistOffers';
import UserInfo from './UserInfo';

const sidebar = block('sidebar');

const Sidebar: FC = () => {
  return (
    <div className={sidebar()}>
      <UserInfo />
      <PlaylistOffers />
    </div>
  );
};

export default Sidebar;
