import React from 'react';
import * as G from '../styles/index';
import { nft, nft2 } from '../../assets/images';
import { Container } from './styled';
import ButtonComponent from '../button';

interface Props {
  imageBanner: string;
  imageProfile: string;
  userName: string;
  price: string;
}

export default function BoxAuctions(): JSX.Element {
  return (
    <Container>
      <img src={nft} alt="images" className="image-banner-user" />
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
                <img src={nft2} alt="" />
                <G.TextCommon color="#04091E" style={{ fontWeight: 600 }}>
                  User Artists
                </G.TextCommon>
              </div>
            </div>
            <div className="part-two">
              <div className="data-left">
                <G.TextCommon
                  color="linear-gradient(95.49deg, #FCAD02 -36.87%, #FF0041 98.63%)"
                  style={{ fontSize: 12 }}
                >
                  12 Days 7hrs
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
              style={{ fontWeight: 500, fontSize: 14, marginTop: 13 }}
              className="price"
            >
              1.05 ETH
            </G.TextCommon>
          </div>
        </div>
      </div>
    </Container>
  );
}
