import { Routes, Route } from 'react-router-dom';
import { LoginForm } from './pages/AuthForm/LoginForm';
import { SignUpForm } from './pages/AuthForm/SignUpForm';
import { CollectionPage } from './pages/CollectionPage';
import { FavoritesPage } from './pages/FavoritesPage';
import { MainPage } from './pages/MainPage';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/register" element={<SignUpForm />} />
      <Route path="/tracks" element={<MainPage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
      <Route path="/collection/:id" element={<CollectionPage />} />
    </Routes>
  );
};
