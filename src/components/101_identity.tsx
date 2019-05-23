import * as React from 'react';
import { identity, loggingIdentity, loggingIdentity2 } from '../utils/101_identity';

export default class Identity extends React.Component<{}, {}> {
  render() {
    return (
      <React.Fragment>
        <h1>101_identity</h1>
        <p>Simplest Generic Example</p>
        <div>{identity('TTTT')}</div>
        <div>{identity<string>('string TTTT')}</div>
        <div>{loggingIdentity<number>([1, 2, 3])}</div>
        <div>{loggingIdentity2<number>([1, 2, 3])}</div>
      </React.Fragment>
    );
  }
}
