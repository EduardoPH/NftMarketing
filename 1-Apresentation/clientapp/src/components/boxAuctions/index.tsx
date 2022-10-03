import React from 'react';
import * as G from '../styles/index';
import { nft, nft2 } from '../../assets/images';
import { Container } from './styled';
import ButtonComponent from '../button';
import HeartIcon from '../heartIcon';

interface Props {
  imageBanner: string;
  imageProfile: string;
  userName: string;
  bid: {
    price: number;
    codeCoin: string;
  };
  likes: number;
  dataExpire: string;
}

export default function BoxAuctions({
  imageBanner,
  bid,
  dataExpire,
  imageProfile,
  likes,
  userName,
}: Props): JSX.Element {
  return (
    <Container>
      <img src={imageBanner} alt="images" className="image-banner-user" />
      <div className="user-box">
        <div className="button-art">
          <ButtonComponent
            type={1}
            onClickAction={() => alert('')}
            text="Art"
            width="69px"
            height="32px"
          />
        </div>
        <div className="data-box">
          <div className="box-user">
            <div className="part-one">
              <div className="image-profile-user">
                <img src={imageProfile} alt="" />
                <G.TextCommon color="#04091E" style={{ fontWeight: 600 }}>
                  {userName}
                </G.TextCommon>
              </div>
            </div>
            <div className="part-two">
              <div className="data-left">
                <G.TextCommon
                  color="linear-gradient(95.49deg, #FCAD02 -36.87%, #FF0041 98.63%)"
                  style={{ fontSize: 12 }}
                >
                  {dataExpire}
                </G.TextCommon>
                <G.TextCommon
                  color="#000"
                  style={{ marginLeft: 4, fontSize: 12 }}
                >
                  Left
                </G.TextCommon>
              </div>
            </div>
          </div>
          <G.TextTittle
            color="#04091E"
            style={{ fontWeight: 700, fontSize: 20 }}
          >
            The Rusty Robots
          </G.TextTittle>

          <G.TextCommon
            color="#747681"
            style={{ fontWeight: 500, fontSize: 14, marginTop: 13 }}
          >
            Highest bid
          </G.TextCommon>
          <div className="box-infos">
            <G.TextCommon
              style={{ fontWeight: 500, fontSize: 14 }}
              className="price"
            >
              {bid.price} {bid.codeCoin}
            </G.TextCommon>
            <HeartIcon
              onClickAction={() => console.log(true)}
              onClickActionReverse={() => console.log(false)}
              state={false}
              likes={likes}
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
