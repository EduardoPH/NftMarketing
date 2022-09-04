import React from 'react';
import { Button } from './styled';

interface Props {
  text?: string;
  height?: string;
  width?: string;
}

export default function ButtonComponent(props: Props): JSX.Element {
  const { width, height, text } = props;
  return <Button> {text} </Button>;
}

ButtonComponent.defaultProps = { text: '', height: '48px', width: '120px' };
