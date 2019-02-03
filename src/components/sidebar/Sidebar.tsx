import React from "react";
import ReactDOM from "react-dom";
import posed from "react-pose";
import styled from "styled-components";
import "tachyons/css/tachyons.css";

import "./styles.css";

export const AppContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
`;

export const headerItems = [
  {
    name: "test"
  },
  {
    name: "test"
  },
  {
    name: "test"
  },
  {
    name: "test"
  }
];

const AnimatedSidebar = posed.ul({
  open: {
    x: "0%",
    delayChildren: 200,
    staggerChildren: 50,
    background: "rgba(120, 120, 120, 1)",
    transition: {
      x: "spring"
    }
  },
  closed: {
    x: "-260px",
    background: "rgba(120, 120, 120, 0)",
    transition: {
      x: "spring"
    }
  }
});

export const Sidebar = styled(AnimatedSidebar)`
  position: absolute;
  height: 100vh;
  width: 300px;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  margin: 0;
`;

export const ToggleButton = styled.button`
  background: none;
  cursor: pointer;
  border: none;
  width: 40px;
  height: 40px;
  align-self: flex-end;
`;

export const AnimatedItems = posed.li({
  open: {
    opacity: 1
  },
  closed: {
    opacity: 0
  }
});

export const Item = styled(AnimatedItems)`
  height: 30px;
  width: 80%;
  padding: 5px 0;
  margin: 10px 0;
  background: white;
  display: flex;
  align-items: center;
  padding-left: 30px;
  border-radius: 10px;
`;

export const Header = styled.div`
  height: 40px;
  width: 100%;
  background: grey;
`;

// function App() {
//   const [isOpen, toggleIsOpen] = React.useState(false);
//   // const toggleSidebar = currentIsOpen => {
//   //   console.log("currentIsOpen: ", currentIsOpen);
//   //   return toggleIsOpen(!currentIsOpen);
//   // };
//   return (
//     <AppContainer className="sans-serif">
//       <Header className="header">
//            <Sidebar pose={isOpen ? "open" : "closed"}>
//           <ToggleButton onClick={() => toggleIsOpen(!isOpen)}>X</ToggleButton>
//           {headerItems.map(item => (
//             <Item>{item.name}</Item>
//           ))}
//         </Sidebar>
//       </Header>

//       <div className="ma2">

//       <div>
//         <h1>Ayyyy other stuff on the page</h1>
//         <div>Icon here: <i className="fas fa-check green"></i></div>
//       </div>
//       <div className="footer">
//         <h2>footer stuff</h2>
//       </div>
//       </div>
//     </AppContainer>
//   );
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
