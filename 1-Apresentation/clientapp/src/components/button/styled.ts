import styled from 'styled-components';
import { Button, ButtonProps } from 'semantic-ui-react';
import React from 'react';

export const ButtonStyled: React.FC<ButtonProps> = styled(Button)`
  && {
    background: linear-gradient(95.49deg, #fcad02 -36.87%, #ff0041 98.63%);
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px 35px;
    border-radius: 24px;
    border: solid 0;
  }
`;
