import React from 'react';
import { Menu, Container, Image } from 'semantic-ui-react';
import Logo from '../../../public/logo.png';
import withHomeLink from '../../links/withHomeLink';

const MenuItemHome = withHomeLink(Menu.Item);
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
      <MenuItemHome as="a">Articles</MenuItemHome>
    </Container>
  </Menu>;

export default Header;
