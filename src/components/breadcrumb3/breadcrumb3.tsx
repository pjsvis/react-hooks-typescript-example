import * as React from "react";

interface Props {}



export const BreadCrumb3 = (props: Props) => {
  return (
    <div className="btn-group f5 mt2">
      <a href="#" className="btn btn-primary">
        About You
        <i className="fa fa-fw fa-check  ml2" />
        <i className="fa fa-fw fa-angle-double-right ml2" />
      </a>
      <a href="#" className="btn btn-primary">
        Who identified
        <i className="fa fa-fw fa-check  ml2" />
        <i className="fa fa-fw fa-angle-double-right ml2" />
      </a>
      <a href="#" className="btn btn-primary">
        What happened
        <i className="fa fa-fw fa-check  ml2" />
        <i className="fa fa-fw fa-angle-double-right ml2" />
      </a>
      <a href="#" className="btn btn-primary">
        Categorise
        <i className="fa fa-fw fa-check  ml2" />
        <i className="fa fa-fw fa-angle-double-right ml2" />
      </a>
      <a href="#" className="btn btn-primary">
        Remediation
        <i className="fa fa-fw fa-angle-double-right ml2" />
      </a>
      <a href="#" className="btn btn-primary">
        Complete
      </a>
    </div>
  );
};
