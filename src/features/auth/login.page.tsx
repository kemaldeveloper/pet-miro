import { ROUTES } from '@/shared/model/routes';
import { Link } from 'react-router-dom';

import { AuthLayout } from './authLayout';
import { LoginForm } from './ui/login-form';

function LoginPage() {
  return (
    <AuthLayout
      title="Вход в систему"
      description="Введите ваш email и пароль для входа в систему"
      footerText={
        <>
          Нет аккаунта? <Link to={ROUTES.REGISTER}>Зарегестрироваться</Link>
        </>
      }
      form={<LoginForm />}
    ></AuthLayout>
  );
}

export const Component = LoginPage;
