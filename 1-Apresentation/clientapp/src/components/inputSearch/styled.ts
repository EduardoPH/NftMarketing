import styled from 'styled-components';

const InputCommon = styled.div`
  height: ${(props) => props.style?.height};
  width: ${(props) => props.style?.width};
  display: flex;
  background: linear-gradient(
    90.28deg,
    rgba(255, 255, 255, 0.09) -5.54%,
    rgba(255, 255, 255, 0.16) 112.42%
  );
  border: solid 0px;
  color: white;
  outline: none;
  padding: 1em;
  align-items: center;
  input {
    height: ${(props) => props.style?.height};
    width: ${(props) => props.style?.width};
    outline: none;
    color: white;
    border: solid 0px;
    background: transparent;
    padding-left: 1em;
    font-size: 16px;
    ::placeholder {
      font-size: 16px;
      color: lightgrey;
      opacity: 1;
    }
  }

  img {
    cursor: pointer;
  }
`;

export { InputCommon };
