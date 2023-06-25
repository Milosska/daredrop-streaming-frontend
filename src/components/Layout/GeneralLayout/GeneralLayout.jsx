import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { NavBar } from 'components/Layout/Navigation/NavBar/NavBar';
import { Footer } from '../Footer/Footer';
import { Container, Main } from './GeneralLayout.styled';

export const GeneralLayout = () => {
  return (
    <Container>
      <header>
        <NavBar />
      </header>
      <Main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Main>
      <Footer />
    </Container>
  );
};
