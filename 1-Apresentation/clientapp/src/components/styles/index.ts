import styled from 'styled-components';

const TextCommon = styled.p`
  align-items: center;
  justify-content: center;
  font-family: 'Urbanist', sans-serif;
  font-weight: ${(props) => props.style?.fontWeight};
  color: ${(props) => props.color};
  cursor: ${(props) => props.style?.cursor};
`;

const TextTittle = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-weight: ${(props) => props.style?.fontWeight};
  color: ${(props) => props.color};
  cursor: ${(props) => props.style?.cursor};
`;

export { TextCommon, TextTittle };
