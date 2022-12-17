import { useEffect } from 'react';
import { AppRoutes } from './routes';
import { useCheckAuth } from './hooks/useAuthHook';

import './App.css';

const App = () => {
  const { checkToken } = useCheckAuth();

  useEffect(() => {
    checkToken();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <AppRoutes />
    </div>
  );
};

export default App;
