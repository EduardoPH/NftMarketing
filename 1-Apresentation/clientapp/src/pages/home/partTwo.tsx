import React, { useRef, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { nft, nft2 } from '../../assets/images';
import { shuffle, auctions } from './response';
import CarouselButtonExternal from '../../components/carouselButtonExternal';
import BoxAuctions from '../../components/boxAuctions';

import { ContainerTwo } from './styled';
import ButtonComponent from '../../components/button';

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

  const [viewMore, setViewMore] = useState(false);
  const [response] = useState(shuffle(auctions));
  return (
    <ContainerTwo>
      {!viewMore ? (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column-reverse',
          }}
        >
          <Carousel
            responsive={responsive}
            showDots={false}
            arrows={false}
            containerClass="carousel-container"
            renderButtonGroupOutside
            customButtonGroup={<CarouselButtonExternal title="Live auctions" />}
          >
            {response.map((i, index) => (
              <BoxAuctions
                bid={i.bid}
                dataExpire="12 Days 7hrs"
                imageBanner={i.imageBanner}
                imageProfile={i.imageProfile}
                likes={i.likes}
                userName={i.userName}
              />
            ))}
          </Carousel>
        </div>
      ) : (
        <div
          className="auctions-container"
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            margin: 'auto',
            justifyContent: 'space-between',
          }}
        >
          {response.map((i, index) => (
            <BoxAuctions
              bid={i.bid}
              dataExpire="12 Days 7hrs"
              imageBanner={i.imageBanner}
              imageProfile={i.imageProfile}
              likes={i.likes}
              userName={i.userName}
            />
          ))}
        </div>
      )}
      <div
        style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'center',
          margin: '3em 0',
        }}
      >
        <ButtonComponent
          type={3}
          onClickAction={() => setViewMore(!viewMore)}
          color="#747681"
          borderColor="#747681"
          text={viewMore ? 'View Less' : 'View More'}
          width="185px"
          height="64px"
          radius="36px"
        />
      </div>
    </ContainerTwo>
  );
}
