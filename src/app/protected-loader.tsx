import { enableMocking } from '@/shared/api/mocks';
import { ROUTES } from '@/shared/model/routes';
import { useSession } from '@/shared/model/session';
import { redirect } from 'react-router-dom';

export async function protectedLoader() {
  await enableMocking();
  const token = await useSession.getState().refreshToken();
  console.log('token', token);

  if (!token) {
    return redirect(ROUTES.LOGIN);
  }

  return null;
}
