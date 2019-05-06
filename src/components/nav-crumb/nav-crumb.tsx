import * as React from "react";
import "./nav-crumb.css";

interface Props {}
const handleClick = (username: string) => {
  console.log(username);
};


// TODO: fix sizing
export function NavCrumbs(props: Props) {
  return (
    <div>
      <h1>Nav Crumbs</h1>
      <nav>
        <ol className="cd-multi-steps text-top count">
          <li className="visited"><a href="#">Who</a></li>
          <li className="visited"><a href="#">What</a></li>
          <li className="current"><a href="#">When</a></li>
          <li><a href="#">Where</a></li>
        </ol>
      </nav>
      <h1>Nav Crumbs</h1>
      <nav>
        <ol className="cd-multi-steps text-center count">
          <li className="visited"><a href="#">Who<i className="fa fa-fw fa-check ml2" /></a></li>
          <li className="visited"><a href="#">What<i className="fa fa-fw fa-check ml2" /></a></li>
          <li className="current"><a href="#">When</a></li>
          <li><a href="#">Where</a></li>
        </ol>
      </nav>
    
    </div>
  );
}
