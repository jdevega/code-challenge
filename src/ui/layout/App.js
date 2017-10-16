import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'semantic-ui-react';
import Header from './Header';
import Footer from './Footer';

const App = props => (
  <div>
    <Header menuItems={props.menuItems} />
    <Container style={{ marginTop: '7em' }}>{props.children}</Container>
    <Footer />
  </div>
);

App.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  menuItems: PropTypes.arrayOf(PropTypes.element),
};

export default App;
