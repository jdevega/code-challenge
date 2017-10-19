import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import Logo from '../../../public/logo.png';

const Footer = () =>
  <Grid.Row centered color="blue" style={{ height: '40px' }}>
    <Image
      centered
      size="mini"
      src={Logo}
    />
  </Grid.Row>
;


export default Footer;
