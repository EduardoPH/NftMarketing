import React from 'react';
import { nft, nft2, backgroundGradient } from '../../assets/images';
import Header from '../../components/header';
import { ContainerOne } from './styled';
import UserCentered from '../../components/userCentered';
import * as G from '../../components/styles/index';
import Button from '../../components/button';

export default function Home(): JSX.Element {
  return (
    <ContainerOne style={{ backgroundImage: backgroundGradient }}>
      <Header isBackground={false} />
      <div className="home-part-two">
        <div className="box tittle-home">
          <G.TextTittle
            color="#FFF"
            style={{ fontWeight: 600, lineHeight: '93px', fontSize: '72px' }}
          >
            Explore, Collect, and Sell NFTs
          </G.TextTittle>
          <G.TextCommon
            color="#ffffff"
            style={{ fontWeight: 100, fontSize: '20px' }}
          >
            {`On the world's Best largest NFT marketplace`}
          </G.TextCommon>
          <div className="home-buttons">
            <div className="buttons-home-content">
              <Button
                text="Explore"
                type={4}
                width="164px"
                height="64px"
                radius="36px"
                color="#747681"
                onClickAction={() => alert('Olaaaa')}
              />
              <Button
                text="Create"
                type={3}
                width="164px"
                height="64px"
                radius="36px"
                borderColor="#FFF"
                onClickAction={() => alert('Olaaaa')}
              />
            </div>
          </div>
        </div>
        <div className="box centered-box">
          <UserCentered
            imageBanner={nft}
            imageProfile={nft}
            userName="Eduardo Mendes"
            price="2.235.345,93"
          />

          <UserCentered
            imageBanner={nft2}
            imageProfile={nft2}
            userName="Yeach Club"
            price="4.156.972,13"
          />
        </div>
      </div>
    </ContainerOne>
  );
}
