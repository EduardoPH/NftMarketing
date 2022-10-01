import styled from 'styled-components';

const Container = styled.div`
  width: 320px;
  height: 425px;
  img {
    width: 100%;
    height: 352px;
    object-fit: cover;
  }

  .user-box {
    background-color: white;
    display: flex;
    align-items: center;
    height: 19%;
    margin: 0;
    margin-top: -4px;
    .image-profile-user {
      padding: 1em;
      img {
        width: 40px;
        height: 40px;
        border-radius: 24px;
      }
    }

    .user-infos {
      text-align: left;
      align-items: center;
    }
  }
`;

export { Container };
