import * as React from "react";
import "tachyons";
import "colors.css";
import { HackerNews } from "./components/get-data/hacker-news";
import {
  Header,
  Sidebar,
  ToggleButton,
  headerItems,
  Item
} from "./components/sidebar/Sidebar";
import { User } from "./components/user/user";
import { ProgressBar } from "./components/progress-bar/progress-bar";

const App = () => {
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
      <div className="container mt2">
      <ProgressBar />
        <div className="ba br3 b--black-10 pa2 w-100 vh-50 mt2 shadow-4">
         
          Form
        </div>
      </div>
    </>
  );
};

export default App;
