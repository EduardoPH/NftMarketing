import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { nft, nft2 } from '../../assets/images';
import CarouselButtonExternal from '../../components/carouselButtonExternal';
import UserCentered from '../../components/userCentered';
import BoxAuctions from '../../components/boxAuctions';

import { ContainerTwo } from './styled';

export default function Two(): JSX.Element {
  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1320,
      },
      items: 4,
      slidesToSlide: 4,
    },
    tablet: {
      breakpoint: {
        max: 1440,
        min: 800,
      },
      items: 3,
      partialVisibilityGutter: 100,
    },
    mobile: {
      breakpoint: {
        max: 1280,
        min: 0,
      },
      items: 1,
    },
  };

  return (
    <ContainerTwo style={{ display: 'flex', flexDirection: 'column-reverse' }}>
      <Carousel
        responsive={responsive}
        showDots={false}
        arrows={false}
        containerClass="carousel-container"
        renderButtonGroupOutside
        customButtonGroup={<CarouselButtonExternal title="Live auctions" />}
      >
        <BoxAuctions />

        <UserCentered
          imageBanner={nft2}
          imageProfile={nft2}
          price="2.0000000000"
          userName="EduPH"
        />

        <BoxAuctions />

        <UserCentered
          imageBanner={nft2}
          imageProfile={nft2}
          price="2.0000000000"
          userName="EduPH"
        />

        <BoxAuctions />

        <UserCentered
          imageBanner={nft2}
          imageProfile={nft2}
          price="2.0000000000"
          userName="EduPH"
        />

        <BoxAuctions />

        <UserCentered
          imageBanner={nft2}
          imageProfile={nft2}
          price="2.0000000000"
          userName="EduPH"
        />

        <BoxAuctions />
      </Carousel>
    </ContainerTwo>
  );
}
