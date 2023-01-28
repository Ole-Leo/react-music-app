import { Outlet } from 'react-router-dom';
import { Sidebar } from '../Sidebar/Sidebar';
import { Navigation } from '../Navigation/Navigation';
import { AudioPlayer } from '../AudioPlayer/AudioPlayer';

export const Layout = () => {
  return (
    <>
      <main className="content">
        <Navigation />
        <div className="main-content">
          <Outlet />
        </div>
        <Sidebar />
      </main>
      <AudioPlayer />
    </>
  );
};
