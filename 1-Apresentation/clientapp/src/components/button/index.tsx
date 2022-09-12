import React from 'react';
import { ButtonStyled } from './styled';

interface Props {
  text?: string;
  height?: string;
  width?: string;
}

export default function ButtonComponent(props: Props): JSX.Element {
  const { width, height, text } = props;
  return <ButtonStyled loading />;
}

ButtonComponent.defaultProps = { text: '', height: '48px', width: '120px' };
