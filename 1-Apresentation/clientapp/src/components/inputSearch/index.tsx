import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { InputCommon } from './styled';
import { searchIcon } from '../../assets/images/icons';

interface Props {
  height?: string;
  width?: string;
  placeholder?: string;
  actionClick: (value: string) => void;
}

export default function InputSearch(props: Props): JSX.Element {
  const { width, height, placeholder, actionClick } = props;
  const [value, setValue] = useState('');
  return (
    <InputCommon style={{ width, height }}>
      <img
        role="presentation"
        src={searchIcon}
        alt=""
        onClick={() => actionClick(value)}
      />
      <input
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(event) => (event.key === 'Enter' ? actionClick(value) : '')}
      />
    </InputCommon>
  );
}

InputSearch.defaultProps = {
  height: '28px',
  width: '100px',
  placeholder: 'Search items, collections, accounts',
};

InputSearch.prototype = {
  actionClick: PropTypes.func.isRequired,
};
