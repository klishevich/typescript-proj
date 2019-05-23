import * as React from 'react';
import { intersectionJim } from '../utils/102_intersection_types';

export default class Identity extends React.Component<{}, {}> {
  render() {
    intersectionJim.log(intersectionJim.name);
    return (
      <React.Fragment>
        <h1>102_intersection_types.tsx</h1>
        <div>{intersectionJim.name}</div>
      </React.Fragment>
    );
  }
}
