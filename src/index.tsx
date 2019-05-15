import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import { Hello } from "./components/Hello";
import { Overlay } from "./components/Overlay";

// ReactDOM.render(
//     <Hello compiler="TypeScript" framework="React" />,
//     document.getElementById("example")
// );

ReactDOM.render(
    <Overlay />, 
    document.getElementById("example")
);
