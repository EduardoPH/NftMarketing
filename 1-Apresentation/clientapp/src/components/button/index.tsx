import React from 'react';
import { ButtonBlue, ButtonRed, ButtonTrasparent, ButtonWhite } from './styled';
import { typesButtonEnum } from './types';

interface Props {
  text?: string;
  height?: string;
  width?: string;
  radius?: string;
  type?: typesButtonEnum;
  color?: string;
  borderColor?: string;
  onClickAction: () => void;
}

export default function ButtonComponent(props: Props): JSX.Element {
  const {
    width,
    height,
    text,
    type,
    radius,
    color,
    borderColor,
    onClickAction,
  } = props;
  switch (type) {
    case typesButtonEnum.blue:
      return (
        <ButtonBlue
          style={{ width, height, borderRadius: radius, color }}
          onClick={() => onClickAction()}
        >
          {text}
        </ButtonBlue>
      );
    case typesButtonEnum.red:
      return (
        <ButtonRed
          style={{ width, height, borderRadius: radius, color }}
          onClick={() => onClickAction()}
        >
          {text}
        </ButtonRed>
      );
    case typesButtonEnum.transparent:
      return (
        <ButtonTrasparent
          style={{ width, height, borderRadius: radius, color, borderColor }}
          onClick={() => onClickAction()}
        >
          {text}
        </ButtonTrasparent>
      );
    case typesButtonEnum.white:
      return (
        <ButtonWhite
          style={{ width, height, borderRadius: radius, color, borderColor }}
          onClick={() => onClickAction()}
        >
          {text}
        </ButtonWhite>
      );
    default:
      return (
        <ButtonBlue
          style={{ width, height, borderRadius: radius, color }}
          onClick={() => onClickAction()}
        >
          {text}
        </ButtonBlue>
      );
  }
}

ButtonComponent.defaultProps = {
  text: '',
  height: '48px',
  width: '120px',
  radius: '24px',
  type: 1,
  color: '#ffffff',
  borderColor: 'black',
};
