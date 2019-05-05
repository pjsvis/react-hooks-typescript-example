import * as React from "react";
import "./breadcrumb2.css";

// Ref: https://codepen.io/Stanssongs/pen/axvdg

interface Props {}

export const BreadCrumb2 = (props: Props) => {
  return (
    <div className="breadcrumb flat tc">
      <a href="#" >
        About You
        <i className="fa fa-fw fa-check  ml2" />
      </a>
      <a href="#" className="active">
         
          Who identified
        
          </a>
      <a href="#">What happened</a>
      <a href="#">Categorise</a>
      <a href="#">Remediation</a>
      <a href="#">Complete</a>
    </div>
  );
};


