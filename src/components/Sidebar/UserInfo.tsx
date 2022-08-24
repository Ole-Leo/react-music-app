import { FC } from 'react';
import block from 'bem-cn-lite';

import './Sidebar.css';

const userInfo = block('user-info');

const UserInfo: FC = () => {
  return (
    <div className={userInfo()}>
      <p className={userInfo('name')}>User Login</p>
      <div className={userInfo('avatar')}></div>
    </div>
  );
};

export default UserInfo;
