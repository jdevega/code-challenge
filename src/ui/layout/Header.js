import React from 'react';
import { Menu, Container, Image } from 'semantic-ui-react';
import Logo from '../../../public/logo.png';

const Header = () =>
  <Menu fixed="top" inverted color="blue">
    <Container>
      <Menu.Item as="a" header>
        <Image
          size="mini"
          src={Logo}
          style={{ marginRight: '1.5em' }}
        />
    Code Challenge
  </Menu.Item>
      <Menu.Item as="a">Home</Menu.Item>
      <Menu.Item as="a">New Card</Menu.Item>

    </Container>
  </Menu>;

export default Header;
