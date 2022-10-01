import React from 'react';
import * as G from '../styles';
import { Container } from './styled';
import { logo, backgroundGradient } from '../../assets/images';
import { userTag, googleTag } from '../../assets/images/icons';
import ButtonComponent from '../button';
import InputSearch from '../inputSearch';

interface Props {
  isBackground: boolean;
}

export default function Header(props: Props): JSX.Element {
  const { isBackground } = props;
  return (
    <Container
      style={
        isBackground
          ? { backgroundImage: backgroundGradient }
          : { backgroundImage: '' }
      }
    >
      <div className="box-one">
        <img className="box-one-logo" src={logo} alt="logo" />
        <InputSearch
          width="432px"
          height="20px"
          actionClick={(e) => alert(e)}
        />
      </div>
      <G.TextCommon color="#ffffff" style={{ fontWeight: 100 }}>
        Explore
      </G.TextCommon>
      <G.TextCommon color="#ffffff" style={{ fontWeight: 100 }}>
        Stats
      </G.TextCommon>
      <G.TextCommon color="#ffffff" style={{ fontWeight: 100 }}>
        Resources
      </G.TextCommon>
      <G.TextCommon color="#ffffff" style={{ fontWeight: 100 }}>
        Community
      </G.TextCommon>
      <div className="box-two">
        <ButtonComponent text="Create" onClickAction={() => alert('Create')} />
        <img src={userTag} alt="logo" />
        <img src={googleTag} alt="logo" />
      </div>
    </Container>
  );
}
