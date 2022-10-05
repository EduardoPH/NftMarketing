import styled from 'styled-components';

const Main = styled.div`
  font-family: sans-serif;
  position: absolute;
`;

const DropDownContainer = styled.div`
  width: 300px;
`;

const DropDownHeader = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;

  span {
    font-family: 'Poppins', sans-serif;
    font-size: 36px;
    font-weight: 600;
  }

  img {
    margin: 0.47em 0 0 1em;
    transition: all 0.7s;
  }

  .Animate-arrow {
    transform: rotate(-180deg);
    transition: all 0.7s;
  }

  transition: all 1s;
  padding: 0.4em 1em 0em 0em;
  cursor: pointer;
  background: -webkit-linear-gradient(
    95.49deg,
    #1448ff -10.87%,
    #02fccf 98.63%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const DropDownListContainer = styled.div`
  @keyframes go-back {
    0% {
      transform: translateY(-20px);
    }
    100% {
      transform: translateY(0);
    }
  }
  animation: go-back 0.6s;
`;

const DropDownList = styled.ul`
  padding-left: 1em;
  font-size: 1.3rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
  position: absolute;
`;

const ListItem = styled.li`
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
  font-weight: 600;
  list-style: none;
  margin-bottom: 0.4em;
  cursor: pointer;
  :hover {
    transition: all 0.4s;
    transform: scale(1.3);
  }
`;

export {
  DropDownContainer,
  DropDownHeader,
  DropDownList,
  DropDownListContainer,
  ListItem,
  Main,
};
