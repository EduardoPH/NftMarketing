import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 270px;
  margin: 1em;

  .box-image {
    display: flex;
    align-items: center;
  }

  .image-profile {
    width: 56px;
    height: 56px;
    object-fit: cover;
    border-radius: 50%;
  }

  .image-verify {
    position: relative;
    right: 18px;
    top: 19px;
  }
`;
