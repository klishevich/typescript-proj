import * as React from 'react';

import { greeter } from '../utils/greetings';
import { greeterTs, Student } from '../utils/greetingsTs';
import { printLabel, createSquare } from '../utils/interfaces';
import { intersectionJim } from '../utils/typescriptlang/intersection-types';
import {
    identity as genericsIdentity,
    loggingIdentity as genericsLoggingIdentity,
    myIdentity as genericsMyIdentity,
    myIdentity2 as genericsMyIdentity2,
    myIdentity3 as genericsMyIdentity3,
    myIdentity4 as genericsMyIdentity4,
    myIdentity5,
    myIdentity6
} from '../utils/typescriptlang/generics';

export interface HelloProps {
    compiler: string;
    framework: string;
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Hello extends React.Component<HelloProps, {}> {
    render() {
        let myObj = { size: 10, label: 'Size 10 Object' };
        let lll = printLabel(myObj);
        let mySquare = createSquare({ color: 'black' });

        intersectionJim.log(intersectionJim.name);
        return (
            <div>
                <h1>Test Typescript Yee..</h1>
                <h2>Generic Types (19 April)</h2>
                <div>{genericsMyIdentity(2)}</div>
                <div>{genericsMyIdentity2('asd2')}</div>
                <div>{genericsMyIdentity3('asd3')}</div>
                <div>{genericsMyIdentity4('asd4')}</div>
                <div>{myIdentity5('asd5')}</div>
                <div>{myIdentity6(666666)}</div>
                <h2>Generics</h2>
                <div>{genericsIdentity('TTTT')}</div>
                <div>{genericsIdentity<string>('string TTTT')}</div>
                <div>{genericsLoggingIdentity<number>([1, 2, 3])}</div>
                <h2>Intersection Types</h2>
                <div>{intersectionJim.name}</div>
                <hr />
                <h2>
                    Hello from {this.props.compiler} and {this.props.framework}!
                </h2>
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
            </div>
        );
    }
}
