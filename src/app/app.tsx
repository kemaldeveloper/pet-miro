import { AppHeader } from '@/features/header';
import { ROUTES } from '@/shared/model/routes';
import { Outlet, useLocation } from 'react-router-dom';

export function App() {
  const location = useLocation();
  const isAuth = location.pathname === ROUTES.LOGIN || location.pathname === ROUTES.REGISTER;
  return (
    <div className="min-h-screen flex flex-col">
      {!isAuth && <AppHeader />}
      <Outlet />
    </div>
  );
}
