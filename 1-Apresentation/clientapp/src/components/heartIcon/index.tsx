import React, { useState } from 'react';
import { heartOff, heartOn } from '../../assets/images/icons';
import * as G from '../styles';

interface Props {
  state: boolean;
  onClickAction: () => void;
  onClickActionReverse: () => void;
  likes?: number;
}

export default function HeartIcon({
  state,
  onClickAction,
  onClickActionReverse,
  likes,
}: Props): JSX.Element {
  const [stateComponent, setStateComponent] = useState(state);
  const [stateLikes] = useState(likes ?? 0);

  const ActionUser = (): void => {
    if (stateComponent) {
      onClickAction();
      setStateComponent(!stateComponent);
    } else {
      onClickActionReverse();
      setStateComponent(!stateComponent);
    }
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      {stateComponent ? (
        // eslint-disable-next-line
        <img src={heartOn} style={{width: 20.9, height: 18.23, marginRight: 5}} alt="heartOn" onClick={() => ActionUser()} />
      ) : (
        // eslint-disable-next-line
        <img src={heartOff} style={{width: 20.9, height: 18.23, marginRight: 5 }} alt="heartOff" onClick={() => ActionUser()} />
      )}
      <G.TextCommon>
        {stateComponent ? stateLikes + 1 : stateLikes}
      </G.TextCommon>
    </div>
  );
}

HeartIcon.defaultProps = {
  likes: 0,
};
