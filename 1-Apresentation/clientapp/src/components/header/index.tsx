import React from 'react';
import * as Global from '../styles';
import { Container } from './styled';
import Button from '../button';

export default function Header(): JSX.Element {
  return (
    <Container>
      <Global.TextCommon> Opaaaaaaaa </Global.TextCommon>
      <Button height="12px" width="150px" />
    </Container>
  );
}
