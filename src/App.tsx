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
import { FunkyTooltip, Popover } from "./components/progress-bar/tooltip";
import ReactMarkdown from "react-markdown";
import { Image } from "./components/user/user-styles";
import { imageURL } from "./imageURL";
import { markdown } from "./markdown";
import { SwitchForm } from "./components/switch-form/switch-form";
import { CheckboxForm } from "./components/switch-form/checkbox-form";

const App = () => {
  const [isOpen, toggleIsOpen] = React.useState(false);

  return (
    <>
      <Header className="header pa3 pl4 white f5">
        <div className="pt3">
          <div className="fl">
            <Image src={imageURL} className="relative mr3" />
          </div>
          <div className="fl mr3">
            <i className="fa fa-fw fa-home mr1" />
            Home
          </div>
          <div className="fl mr3 pointer">
            <i className="fa fa-fw fa-building-o mr1" />
            Breach Records
          </div>
          <div className="fl mr3 pointer">
            {" "}
            <i className="fa fa-fw fa-cogs mr1" />
            New Breach
          </div>
          <div className="fl mr3 pointer">
            {" "}
            <i className="fa fa-fw fa-info-circle mr1" />
            About
          </div>
        </div>

        {/* <Sidebar pose={isOpen ? "open" : "closed"}>
          <ToggleButton onClick={() => toggleIsOpen(!isOpen)}>X</ToggleButton>
          {headerItems.map(item => (
            <Item>{item.name}</Item>
          ))}
        </Sidebar> */}
      </Header>

      <div className="container mt2">
        <div className="ba b--black-10 w-100 vh-75 mt2 shadow-4">
          <div className="ba br3 b--black-10 pa2 shadow-4">
            {/* <SwitchForm /> */}
            <CheckboxForm />
            <CheckboxForm />
            <CheckboxForm />
            <CheckboxForm />
          </div>

          {/* <ProgressBar /> */}
          <div className="pa3">
            <Popover
              content={
                <ReactMarkdown
                  className="pa1 tl black-90 white"
                  escapeHtml={false}
                  source={markdown}
                  linkTarget="_blank"
                />
              }
            >
              <span className="fr">
                <i
                  className="fa fa-fw fa-lg fa-question-circle blue pointer"
                  title="Click here for help with the Categorise Form"
                />
              </span>
            </Popover>
            Form
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
