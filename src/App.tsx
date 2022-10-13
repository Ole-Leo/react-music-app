import './App.css';

import { FC } from 'react';

import { AppRoutes } from './routes';
import { Navigation } from './components/Navigation/Navigation';
import { AudioPlayer } from './components/AudioPlayer/AudioPlayer';

const App: FC = () => {
  return (
    <div className="App">
      <div className="content">
        <Navigation />
        <AppRoutes />
      </div>
      <AudioPlayer />
    </div>
  );
};

export default App;
