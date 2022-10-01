import styled from 'styled-components';

export const ButtonBlue = styled.button`
  background: linear-gradient(95.49deg, #02fccf -36.87%, #1448ff 98.63%);
  display: flex;
  font-weight: 100;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: ${(props) => props.style?.borderRadius};
  border: solid 0;
  width: ${(props) => props.style?.width};
  height: ${(props) => props.style?.height};
  text-align: center;
  color: white;
  font-size: 15px;
  cursor: pointer;
`;

export const ButtonRed = styled.button`
  background: linear-gradient(95.49deg, #fcad02 -36.87%, #ff0041 98.63%);
  display: flex;
  font-weight: 100;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: ${(props) => props.style?.borderRadius};
  border: solid 0;
  width: ${(props) => props.style?.width};
  height: ${(props) => props.style?.height};
  text-align: center;
  color: white;
  font-size: 15px;
  cursor: pointer;
`;

export const ButtonTrasparent = styled.button`
  background: transparent;
  display: flex;
  font-weight: 100;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: ${(props) => props.style?.borderRadius};
  border: solid 1px white;
  width: ${(props) => props.style?.width};
  height: ${(props) => props.style?.height};
  text-align: center;
  color: white;
  font-size: 15px;
  cursor: pointer;
`;

export const ButtonWhite = styled.button`
  background: #fff;
  display: flex;
  font-weight: 100;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: ${(props) => props.style?.borderRadius};
  border: solid 0;
  width: ${(props) => props.style?.width};
  height: ${(props) => props.style?.height};
  text-align: center;
  color: #747681;
  font-size: 15px;
  cursor: pointer;
`;
