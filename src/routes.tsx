import { Routes, Route } from 'react-router-dom';
import { MainPage } from './pages/MainPage';
import { FavoritesPage } from './pages/FavoritesPage';
import { CollectionPage } from './pages/CollectionPage';
import { LoginForm } from './pages/AuthForm/LoginForm';
import { SignUpForm } from './pages/AuthForm/SignUpForm';

import { Navigate, Outlet } from 'react-router-dom';
import { checkTokensInCookies } from './utils/utils';

export const RequireAuth = () => {
  const isAllowed = checkTokensInCookies();

  return isAllowed ? <Outlet /> : <Navigate to="/" replace />;
};

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/register" element={<SignUpForm />} />
      <Route element={<RequireAuth />}>
        <Route path="/tracks" element={<MainPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/collection/:id" element={<CollectionPage />} />
      </Route>
    </Routes>
  );
};
