import React from 'react';
import { Segment, Container, Image } from 'semantic-ui-react';
import Logo from '../../../public/logo.png';

const Footer = () => <Segment
  color="blue"
  inverted
  vertical
  style={{ margin: '1em 0em 0em', padding: '1em 0em' }}
>
  <Container textAlign="center">
    <Image
      centered
      size="mini"
      src={Logo}
    />
  </Container>
</Segment>;


export default Footer;
