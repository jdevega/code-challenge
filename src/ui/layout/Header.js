import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Container, Image } from 'semantic-ui-react';
import Logo from '../../../public/logo.png';

const Header = props => (
  <Menu fixed="top" inverted color="blue">
    <Container>
      <Menu.Item as="a" header>
        <Image size="mini" src={Logo} style={{ marginRight: '1.5em' }} />
        Code Challenge
      </Menu.Item>
      {props.menuItems}
    </Container>
  </Menu>
);

Header.propTypes = {
  menuItems: PropTypes.arrayOf(PropTypes.element),
};

export default Header;
