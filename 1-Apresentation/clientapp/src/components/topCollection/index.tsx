import React from 'react';
import { nft } from '../../assets/images';
import { Verify } from '../../assets/images/icons';
import * as G from '../styles';
import { Container } from './styled';

interface Props {
  position: number;
}

export default function TopCollection(props: Props): JSX.Element {
  const { position } = props;
  return (
    <Container>
      <G.TextCommon
        style={{
          fontSize: 24,
        }}
      >
        {position}
      </G.TextCommon>
      <div className="box-image">
        <img className="image-profile" src={nft} alt="" />
        <img className="image-verify" src={Verify} alt="" />
      </div>
      <div className="box-infos">
        <G.TextCommon
          style={{
            fontSize: 20,
            fontWeight: 600,
          }}
        >
          Savannah Nguyen
        </G.TextCommon>
        <G.TextCommon
          style={{
            color: '#747681',
          }}
        >
          $219.78
        </G.TextCommon>
      </div>
    </Container>
  );
}
