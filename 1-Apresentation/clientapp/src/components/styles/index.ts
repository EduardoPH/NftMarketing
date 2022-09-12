import styled from 'styled-components';
import logo from '../../assets/images/logo.svg';

const TextCommon = styled.p`
  font-family: 'Urbanist', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  color: ${(props) => props.color};
`;

const InputCommon = styled.div`
  input {
    background-image: url('https://via.placeholder.com/500');
    background: linear-gradient(
      90.28deg,
      rgba(255, 255, 255, 0.09) -5.54%,
      rgba(255, 255, 255, 0.16) 112.42%
    );
    border: solid 0px;
    color: white;
    outline: none;
    padding: 1em;

    ::placeholder {
      color: '#F4F8F7';
    }
  }
`;

export { TextCommon, InputCommon };
