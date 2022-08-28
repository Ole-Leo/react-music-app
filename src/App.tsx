import './App.css';

import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import AudioPlayer from './components/AudioPlayer/AudioPlayer';
import MainPage from './pages/MainPage';
import FavoritesPage from './pages/FavoritesPage';

const App: FC = () => {
  return (
    <div className="App">
      <div className="content">
        <Navigation />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </div>
      <AudioPlayer />
    </div>
  );
};

export default App;
