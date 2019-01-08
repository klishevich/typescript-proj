import * as React from "react";

import { greeter } from "../utils/greetings";
import { greeterTs, Student } from "../utils/greetingsTs";

export interface HelloProps { compiler: string; framework: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Hello extends React.Component<HelloProps, {}> {
    render() {
        return (
            <div>
                <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>
                <div><b>Greeter</b></div>
                <div>{ greeter("Michael") }</div>
                <div><b>Greeter TS</b></div>
                <div>{ greeterTs(new Student('Michael', 'Alexandr', 'Student')) }</div>
                <div>{ greeterTs({ firstName: 'Michael', lastName: 'Klishevich' }, 27) }</div>
            </div>
        );
    }
}
