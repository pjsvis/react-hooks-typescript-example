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
    name: "Some text that explains in greater detail why it is that we need to fill out these forms."
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
    background: "rgba(0, 27, 68, 1)",
    transition: {
      x: "spring"
    }
  },
  closed: {
    x: "-260px",
    background: "rgba(0, 27, 68, 1)",
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
  color: white;
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
  height: auto;
  width: 80%;
  padding: 5px 0;
  margin: 10px 0;
  background: white;
  display: flex;
  align-items: center;
  padding-left: 10px;
  border-radius: 10px;
  font-size: 90%;
`;

export const Header = styled.div`
  height: 80px;
  width: 100%;
  background: rgba(0,27,68,1);
`;
