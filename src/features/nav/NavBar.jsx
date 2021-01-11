import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { Button, Container, Menu } from 'semantic-ui-react';
import SignedInMenu from './SignedInMenu';
import SignedOutMenu from './SignedOutMenu';

const NavBar = () => {
  const history = useHistory();
  const [isAuthenticated, setAuthenticated] = useState(false);

  const handleSignOut = () => {
    setAuthenticated(false);
    history.push('/');
  };
  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item as={NavLink} exact to="/" header>
          <img
            src="/assets/logo.png"
            alt="logo"
            style={{ marginRight: '15px' }}
          />
          Re-vents
        </Menu.Item>
        <Menu.Item as={NavLink} to="/events" name="Events" />
        <Menu.Item as={NavLink} to="/sandbox" name="Sanbox" />
        {isAuthenticated && (
          <Menu.Item as={NavLink} to="/createEvent">
            <Button positive inverted content="Create Event" />
          </Menu.Item>
        )}
        {isAuthenticated ? (
          <SignedInMenu signOut={handleSignOut} />
        ) : (
          <SignedOutMenu setAuthenticated={setAuthenticated} />
        )}
      </Container>
    </Menu>
  );
};

export default NavBar;
