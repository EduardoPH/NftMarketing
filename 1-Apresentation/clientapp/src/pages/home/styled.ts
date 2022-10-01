import styled from 'styled-components';

const ContainerOne = styled.div`
  background-image: url(${(props) => props.style?.backgroundImage});
  background-size: cover;
  height: 100vh;
  align-items: center;

  .box {
    width: 47%;
    margin: auto;
    align-items: center;
  }

  .home-part-two {
    width: 84%;
    margin: auto;
    margin-top: 15vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    .tittle-home {
      width: 40%;
      p {
        margin: 2.3em 0 3.2em;
      }
    }
    .centered-box {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    .home-buttons {
      width: 58%;
      .buttons-home-content {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }
    }
  }
`;

const ContainerTwo = styled.div`
  width: 79%;
  margin: auto;
`;

export { ContainerOne, ContainerTwo };
