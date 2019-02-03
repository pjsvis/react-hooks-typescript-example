import * as React from "react";
import "./App.css";

import GitHubLogo from "./GitHubLogo";
import Title from "./Title";
import {Counter} from './components/counter/Counter';
import {CounterTitle} from './components/counter/CounterTitle';
import {CounterReducer} from './components/counter/CounterReducer';
import { HackerNews } from './components/get-data/hacker-news';
import { Header, Sidebar, ToggleButton, headerItems, Item } from './components/sidebar/Sidebar';

// An object of all possible example components that can be rendered
const EXAMPLES = {
  Counter,
  CounterTitle,
  CounterReducer
};

type Examples = keyof typeof EXAMPLES;

const EXAMPLE_NAMES = Object.keys(EXAMPLES) as Examples[];

const App = () => {
  // Use state to keep track of the current displayed example component
  const [example, setExample] = React.useState<Examples>("Counter");

  // The currently selected example component that should be rendered
  const ExampleComponent = EXAMPLES[example];

  // A list of buttons for all examples to render
  const exampleButtons = EXAMPLE_NAMES.map(name => (
    <button
      key={name}
      onClick={() => setExample(name)}
      className={name === example ? "active" : ""}
    >
      &lt;
      {name} /&gt;
    </button>
  ));
  const [isOpen, toggleIsOpen] = React.useState(false);

  return (
    <>
      <Header className="header">
           <Sidebar pose={isOpen ? "open" : "closed"}>
          <ToggleButton onClick={() => toggleIsOpen(!isOpen)}>X</ToggleButton>
          {headerItems.map(item => (
            <Item>{item.name}</Item>
          ))}
        </Sidebar>
      </Header>
      {/* <Title /> */}
      {/* <GitHubLogo /> */}
      <div className="container">
        {/* <div className="app">
          {exampleButtons}
          <div className="separator" />
          <ExampleComponent />

        </div> */}
        <div><HackerNews /></div>
      </div>
    </>
  );
};

export default App;
