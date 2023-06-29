import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { GeneralLayout } from 'components/Layout/GeneralLayout/GeneralLayout';
const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const StreamersPage = lazy(() => import('pages/StreamersPage/StreamersPage'));
const StreamerRecordPage = lazy(() =>
  import('pages/StreamerRecordPage/StreamerRecordPage')
);
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));

export const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<GeneralLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/streamers" element={<StreamersPage />} />
            <Route
              path="/streamers/:streamersId"
              element={<StreamerRecordPage />}
            />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
