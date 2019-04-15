import * as React from "react";

import {greeter} from "../utils/greetings";
import {greeterTs, Student} from "../utils/greetingsTs";
import {printLabel, createSquare} from "../utils/interfaces";
import {intersectionJim} from "../utils/typescriptlang/intersection-types";

export interface HelloProps {
    compiler: string;
    framework: string;
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Hello extends React.Component<HelloProps, {}> {
    render() {
        let myObj = {size: 10, label: "Size 10 Object"};
        let lll = printLabel(myObj);
        let mySquare = createSquare({color: "black"});

        intersectionJim.log(intersectionJim.name);
        return (
            <div>
                <h1>Test Typescript Yee..</h1>
                <h2>Intersection Types</h2>
                <div>{intersectionJim.name}</div>
                <hr/>
                <h2>
                    Hello from {this.props.compiler} and {this.props.framework}!
                </h2>
                <div>
                    <b>Greeter</b>
                </div>
                <div>{greeter("Michael")}</div>
                <div>
                    <b>Greeter TS</b>
                </div>
                <div>{greeterTs(new Student("Michael", "Alexandr", "Student"))}</div>
                <div>{greeterTs({firstName: "Michael", lastName: "Klishevich"}, 27)}</div>
                <div>Interfaces</div>
                <div>{lll}</div>
                <div>{mySquare.area}</div>
                <div>{mySquare.color}</div>
            </div>
        );
    }
}
