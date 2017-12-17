/* @flow */

import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 24px;
  color: rgba(0, 0, 0, 0.4);
`;

const Copyright = styled.span`
  padding-right: 0.5em;
`;

const Separator = styled.span`
  padding-right: 0.5em;
  padding-left: 0.5em;
`;

const ExtLink = styled.a`
  &,
  &:hover,
  &:active,
  &:visited {
    color: rgba(0, 0, 0, 0.6);
    text-decoration: none;
  }

  &:hover {
    text-decoration: underline;
  }
`;

class Footer extends React.Component<{}> {
  render() {
    return (
      <Container>
        <Copyright css="padding-right: 0.5em">&copy; 1234-5678</Copyright>
        <ExtLink href="https://github.com/">&nbsp</ExtLink>
        <Separator>|</Separator>
        <ExtLink href="/">&nbsp</ExtLink>
      </Container>
    );
  }
}

export default Footer;
