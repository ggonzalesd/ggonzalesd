import { Route, Routes } from 'react-router-dom';
import { NotFound } from './pages/Not-Found';

export const Router = () => {
  return (
    <Routes>
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};
