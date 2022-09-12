import React from 'react';
import * as G from '../styles';
import { Container } from './styled';
import { logo } from '../../assets/images';
import ButtonComponent from '../button';

export default function Header(): JSX.Element {
  return (
    <Container>
      <img src={logo} alt="logo" />
      <G.InputCommon style={{ backgroundImage: logo.toString() }} />
      <G.TextCommon color="#ffffff"> Opaaaaaaaa </G.TextCommon>
      <ButtonComponent />
    </Container>
  );
}
