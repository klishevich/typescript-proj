import * as React from 'react';
import { greeter } from '../utils/100_basics/greetings';
import { greeterTs, Student } from '../utils/100_basics/greetingsTs';
import { printLabel, createSquare } from '../utils/100_basics/interfaces';

export default class Identity extends React.Component<{}, {}> {
  render() {
    let myObj = { size: 10, label: 'Size 10 Object' };
    let lll = printLabel(myObj);
    let mySquare = createSquare({ color: 'black' });
    return (
      <React.Fragment>
        <h1>100_basics</h1>
        <p>Where do I begin</p>
        <div>
          <b>Greeter</b>
        </div>
        <div>{greeter('Michael')}</div>
        <div>
          <b>Greeter TS</b>
        </div>
        <div>{greeterTs(new Student('Michael', 'Alexandr', 'Student'))}</div>
        <div>{greeterTs({ firstName: 'Michael', lastName: 'Klishevich' }, 27)}</div>
        <div>Interfaces</div>
        <div>{lll}</div>
        <div>{mySquare.area}</div>
        <div>{mySquare.color}</div>
      </React.Fragment>
    );
  }
}
