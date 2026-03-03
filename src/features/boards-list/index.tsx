import { ROUTES } from '@/shared/model/routes';
import { href, Link } from 'react-router-dom';

export function BoardsListPage() {
  return (
    <div>
      BoardsListPage
      <Link to={href(ROUTES.BOARD, { boardId: '1' })}>Board 1</Link>
    </div>
  );
}
