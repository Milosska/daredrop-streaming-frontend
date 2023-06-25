import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { NavBar } from 'components/Navigation/NavBar/NavBar';
import { Container } from './GeneralLayout.styled';

export const GeneralLayout = () => {
  return (
    <Container>
      <header>
        <NavBar />
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <footer>Footer</footer>
    </Container>
  );
};
