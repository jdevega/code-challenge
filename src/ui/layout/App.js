import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';
import Header from './Header';
import Footer from './Footer';

const App = props => (
  <Grid divided="vertically">
    <Grid.Row>
      <Header menuItems={props.menuItems} />
    </Grid.Row>
    <Grid.Row>
      <div
        style={{
          width: '90%',
          marginTop: '3em',
          marginLeft: '5%',
        }}
      >
        {props.children}
      </div>
    </Grid.Row>
    <Footer />
  </Grid>
);

App.propTypes = {
  children: PropTypes.node,
  menuItems: PropTypes.arrayOf(PropTypes.element),
};

export default App;
