import React from 'react';
import One from './partOne';
import Three from './partThree';
import Two from './partTwo';

export default function Home(): JSX.Element {
  return (
    <div>
      <One />
      <Two />
      <Three />
    </div>
  );
}
