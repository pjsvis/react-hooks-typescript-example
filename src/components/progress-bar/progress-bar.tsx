import * as React from "react";
import { useState } from "react";
import "./progress-bar.css";
import Tippy from "@tippy.js/react";
import { Tooltip, Popover, FunkyTooltip } from "./tooltip";

interface Props {}

const complete = "btn btn-success btn-sm ba br2  hover-black f6";
const current = "btn btn-primary btn-sm ba  hover-white";
const todo = "btn btn-secondary btn-sm ba white  hover-black";


interface CompleteProps {
  caption: string;
}
const Complete = (props: CompleteProps) => {

  

  return (
    <button
      className={complete}
      title="Please enter your contact details incase we need to ask some follow up questions."
    >
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
  return <i className="fa fa-fw fa-check  ml2" />;
};

export const ProgressBar = (props: Props) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  return (
    <div className="bt pa3 bg-dark-gray">
      
      <div className="white tc f5 mb2">
        <Popover
          content={
            <div className="tl">
              <div className="f5 ">Breach Submission Forms</div>
              <p>
                The forms in this panel will allow you to record the details of
                the breach that you are reporting.
              </p>
              <p>
                Please fill out the forms with the appropriate details and avoid
                using technical jargon.
              </p>
              <p>
                Click anywhere outside of this message to dismiss the message.
              </p>
              <p>
                If the is anything you do not undestand then just
                <a href="http://www.google.com" target="_blank">
                  {" "}
                  google it!
                </a>
                . I'm not your mother!
              </p>
            </div>
          }
        >
          <span className="fr">
            <i
              className="fa fa-fw fa-lg fa-question-circle washed-blue pointer"
              title="Click here for help with. the breach submission process."
            />
          </span>
        </Popover>
        Breach Submission Progress (60% complete)
      </div>
      <Complete caption="About You" />
      <Arrow />
      <Tooltip content={<div>Please indicate who identified the breach.</div>}>
        <button className={complete} title="Who identified the breach?">
          2. Who identified
          <Check />
        </button>
      </Tooltip>
      <Arrow />
      <a
        href="#"
        className={complete}
        title="What happened to cause the breach?"
      >
        3. What happened
        <Check />
      </a>
      <Arrow />
      <a href="#" className={complete} title="Who was impacted by the breach?">
        4. To whom
        <Check />
      </a>
      <Arrow />
      <a
        href="#"
        className={current}
        title="How would you categorise the breach?"
      >
        5. Categorise
      </a>
      <Arrow />
      <a
        href="#"
        className={todo}
        title="What remediation actions have been taken?"
      >
        6. Remediation
      </a>
    </div>
  );
};
