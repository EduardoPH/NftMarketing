import React from 'react';
import { ButtonGroupProps } from 'react-multi-carousel/lib/types';
import { Container } from './styled';
import * as G from '../styles/index';
import ButtonComponent from '../button';

interface CarouselButtonGroupProps extends ButtonGroupProps {
  title?: string;
}

export default function CarouselButtonExternal({
  previous,
  next,
  title,
  carouselState,
}: CarouselButtonGroupProps): JSX.Element {
  const totalItems = carouselState?.totalItems ?? 0;
  return (
    <Container>
      <G.TextTittle style={{ fontSize: '48px' }}> {title} </G.TextTittle>
      <div className="btn-actions">
        {carouselState?.currentSlide === 0 ? (
          <ButtonComponent
            height="64px"
            width="64px"
            radius="40px"
            text="<"
            color="#000"
            borderColor="#CDD6D7"
            type={3}
            onClickAction={() => previous?.()}
          />
        ) : (
          <ButtonComponent
            height="64px"
            width="64px"
            radius="40px"
            text="<"
            type={1}
            onClickAction={() => previous?.()}
          />
        )}

        {carouselState?.currentSlide === totalItems - 4 ? (
          <ButtonComponent
            height="64px"
            width="64px"
            radius="40px"
            text=">"
            color="#000"
            borderColor="#CDD6D7"
            type={3}
            onClickAction={() => next?.()}
          />
        ) : (
          <ButtonComponent
            height="64px"
            width="64px"
            radius="40px"
            text=">"
            type={1}
            onClickAction={() => next?.()}
          />
        )}
      </div>
    </Container>
  );
}

CarouselButtonExternal.defaultProps = {
  title: '',
};
