import './App.css';

import { FC } from 'react';

import { AppRoutes } from './routes';
import { AudioPlayer } from './components/AudioPlayer/AudioPlayer';

const App: FC = () => {
  return (
    <div className="App">
      <AppRoutes />
      <div className="content">{/* <Navigation /> */}</div>
      <AudioPlayer />
    </div>
  );
};

export default App;
