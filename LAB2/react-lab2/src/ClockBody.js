import React from "react";
import { Clock } from "./Clock";

 export class ClockBody extends React.Component {
    render(){
        return (
              <Clock format='12' timezone='5.01' />
          );
    }
}