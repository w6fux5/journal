import { Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '../auth/routes/AuthRouter';
import { JournalRoutes } from '../journal/routes/JournalRouter';

export const AppRouter = () => (
  <Routes>
    <Route path='/auth/*' element={<AuthRoutes />} />
    <Route path='/*' element={<JournalRoutes />} />
  </Routes>
);
