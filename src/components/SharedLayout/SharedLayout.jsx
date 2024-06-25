import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { LinkList, StyledNavLink } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <header>
        <nav>
          <LinkList>
            <li>
              <StyledNavLink to="/">Home</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="movies">Movies</StyledNavLink>
            </li>
          </LinkList>
        </nav>
      </header>
      <main>
        <Suspense fallback={<div>LOADING... SUSPENSE PAGE...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default SharedLayout;
