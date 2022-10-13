import { Routes, Route } from 'react-router-dom';
import { CollectionPage } from './pages/CollectionPage';
import { FavoritesPage } from './pages/FavoritesPage';
import { MainPage } from './pages/MainPage';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
      <Route path="/collection/:id" element={<CollectionPage />} />
    </Routes>
  );
};
