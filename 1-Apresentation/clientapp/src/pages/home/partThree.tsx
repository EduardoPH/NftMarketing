import React from 'react';
import SelectCustom from '../../components/selectCustom';
import * as G from '../../components/styles';
import { ContainerThree } from './styled';

export default function Three(): JSX.Element {
  return (
    <ContainerThree>
      <div className="header-topcollection">
        <G.TextTittle
          style={{
            fontSize: '48px',
            color: '#04091e',
          }}
        >
          Top collection
        </G.TextTittle>
        <SelectCustom />
      </div>
    </ContainerThree>
  );
}
