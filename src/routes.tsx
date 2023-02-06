import { MainPage } from './pages/MainPage';
import { FavoritesPage } from './pages/FavoritesPage';
import { CollectionPage } from './pages/CollectionPage';
import { LoginForm } from './pages/AuthForm/LoginForm';
import { SignUpForm } from './pages/AuthForm/SignUpForm';
import { Routes, Route } from 'react-router-dom';
import { Navigate, Outlet } from 'react-router-dom';
import { checkTokensInCookies } from './utils/utils';
import { Layout } from './components/Layout/Layout';

export const RequireAuth = () => {
  const isAllowed = checkTokensInCookies();

  return isAllowed ? <Outlet /> : <Navigate to="/login" replace />;
};

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginForm />} />
      <Route path="/register" element={<SignUpForm />} />
      <Route element={<RequireAuth />}>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="favorites" element={<FavoritesPage />} />
          <Route path="collection/:id" element={<CollectionPage />} />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
