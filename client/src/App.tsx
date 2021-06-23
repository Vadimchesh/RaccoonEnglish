import React, { ReactElement } from 'react';
import logo from './logo.png';

interface Props {}
console.log(logo);
export default function App({}: Props): ReactElement {
  return (
    <div>
      {' '}
      <img src={logo} alt='Logo' /> Hellsso
    </div>
  );
}
