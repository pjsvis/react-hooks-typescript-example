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
import { BreadcrumbExamples } from "./components/breadcrumbs/breadcrumb-examples";
import { Breadcrumbs } from "./components/breadcrumbs/breadcrumbs";
import { User } from "./components/user/user";
import {BreadCrumb2} from './components/breadcrumb2/breadcrumb2'

const App = () => {
  const [isOpen, toggleIsOpen] = React.useState(false);

  return (
    <>
      {/* <Header className="header">
        <Sidebar pose={isOpen ? "open" : "closed"}>
          <ToggleButton onClick={() => toggleIsOpen(!isOpen)}>X</ToggleButton>
          {headerItems.map(item => (
            <Item>{item.name}</Item>
          ))}
        </Sidebar>
      </Header> */}

      <div className="container">
        <BreadCrumb2 />
      <User
        name="Alena Sanders"
        username="@alenasanders"
        imageURL="https://randomuser.me/api/portraits/women/57.jpg"
      />
        <User className="w-20 mb4" name="Peter J Smith" username="pjsTarifa" imageURL="https://cdn-images-1.medium.com/fit/c/60/60/0*fl5__1m0sKZdF6Tx.jpg" />
        <Breadcrumbs />
        <BreadcrumbExamples />
        {/* <div><HackerNews /></div> */}
      </div>
    </>
  );
};

export default App;
