import * as React from "react";
import "./progress-bar.css";

interface Props {}

const complete = "btn btn-success btn-sm ba br2  hover-black f6";
const current = "btn btn-primary btn-sm ba  hover-black";
const todo = "btn btn-secondary btn-sm ba hover-black";

interface CompleteProps {
  caption: string;
}
const Complete = (props: CompleteProps) => {
  return (
    <button className={complete} title="Please enter your contact details incase we need to ask some follow up questions.">
      1. {props.caption}
      <i className="fa fa-fw fa-check ml2" />
    </button>
  );
};

const Arrow = () => {
  return (
    <i className="fa fa-fw fa-lg fa-arrow-circle-right washed-blue mr1 ml1" />
  );
};

const Check = () => {
  return ( <i className="fa fa-fw fa-check  ml2" />)
}

export const ProgressBar = (props: Props) => {
  return (
    <div className="ba br3 b--black-10 pa3 mt2 mb2 bg-dark-gray  shadow-1">
      <div className="white tc f5 mb2">Breach Submission Progress (60% complete)</div>
      <Complete caption="About You" />
      <Arrow />
      <button className={complete} title="Who identified the breach?">
        2. Who identified
        <Check />
      </button>
     <Arrow />
      <a href="#" className={complete} title="What happened to cause the breach?">
        3. What happened
        <Check />
      </a>
      <Arrow />
      <a href="#" className={complete} title="Who was impacted by the breach?">
        4. To whom
        <Check />
      </a>
      <Arrow />
      <a href="#" className={complete} title="How would you categorise the breach?">
        5. Categorise
        <Check />
      </a>
      <Arrow />
      <a href="#" className={current} title="What remediation actions have been taken?">
        6. Remediation
      </a>

      
    </div>
  );
};
