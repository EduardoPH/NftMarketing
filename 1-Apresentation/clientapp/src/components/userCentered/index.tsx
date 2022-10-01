import React from 'react';
import { Container } from './styled';
import * as G from '../styles/index';

interface Props {
  imageBanner: string;
  imageProfile: string;
  userName: string;
  price: string;
}

export default function UserCentered(props: Props): JSX.Element {
  const { imageBanner, imageProfile, userName, price } = props;
  return (
    <Container>
      <img src={imageBanner} alt="images" className="image-banner-user" />
      <div className="user-box">
        <div className="image-profile-user">
          <img src={imageProfile} alt="" />
        </div>
        <div className="user-infos">
          <G.TextCommon
            color="#04091E"
            style={{ fontWeight: 600, lineHeight: '28px', fontSize: '16px' }}
          >
            {userName}
          </G.TextCommon>
          <G.TextCommon
            color="rgba(4, 9, 30, 0.6)"
            style={{ fontWeight: 100, fontSize: '14px' }}
          >
            ${price}
          </G.TextCommon>
        </div>
      </div>
    </Container>
  );
}
