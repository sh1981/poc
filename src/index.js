import React from "react";
import ReactDOM from "react-dom";
import { Accordion, Segment } from "semantic-ui-react";
import faker from "faker";
import _ from "lodash";

import "./styles.css";

const panels = _.times;

function App() {
  return (
    <div className="App">
      <Segment>
        <Accordion styled exclusive={false} />
      </Segment>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
