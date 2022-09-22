import './App.css';

import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import AudioPlayer from './components/AudioPlayer/AudioPlayer';
import MainPage from './pages/MainPage';
import FavoritesPage from './pages/FavoritesPage';
import CollectionPage from './pages/CollectionPage';

const App: FC = () => {
  return (
    <div className="App">
      <div className="content">
        <Navigation />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/collection/:id" element={<CollectionPage />} />
        </Routes>
      </div>
      <AudioPlayer />
    </div>
  );
};

export default App;
