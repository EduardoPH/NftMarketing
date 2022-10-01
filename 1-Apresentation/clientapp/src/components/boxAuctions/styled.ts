import styled from 'styled-components';

const Container = styled.div`
  width: 320px;
  height: 425px;
  border: solid 1px #cdd6d7;
  img {
    max-width: 100%;
    height: 230px;
    object-fit: cover;
  }

  .button-art {
    margin: -1.6em 2em;
    position: absolute;
  }

  .data-box {
    padding: 1.5em;
  }
  .part-one {
    width: 43%;
    .image-profile-user {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      img {
        width: 32px;
        height: 32px;
        border-radius: 24px;
      }
    }
  }

  .part-two {
    color: red;
    width: 36%;

    .data-left {
      display: flex;
      justify-content: left;
      span {
        color: #000;
        margin-left: 4px;
      }
    }
  }

  .box-user {
    margin: 1em 0 1.7em;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
`;

export { Container };
