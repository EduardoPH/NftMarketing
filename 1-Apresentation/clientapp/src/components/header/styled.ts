import styled from 'styled-components';

export const Container = styled.div`
  width: 84%;
  margin: auto;
  display: flex;
  background-image: url(${(props) => props.style?.backgroundImage});
  background-size: cover;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 1em 0em;

  .box-one {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

    .box-one-logo {
      margin-right: 2.5em;
    }
  }

  .box-two {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 16%;
  }
`;
