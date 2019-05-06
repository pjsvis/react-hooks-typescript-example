import * as React from "react";
import Tippy, { TippyProps } from "@tippy.js/react";

export const Tooltip = (props: TippyProps) => <Tippy {...props} />;
Tooltip.defaultProps = {
  animation: "scale",
  arrow: true,
  arrowType: "round",
  delay: 150,
  theme: "tomato"
};

export const Popover = (props: TippyProps) => <Tippy {...props} />;
Popover.defaultProps = {
  animateFill: false,
  animation: "scale",
  interactive: true,
  interactiveBorder: 10,
  arrow: true,
  arrowType: "round",
  theme: "tomato",
  trigger: "click"
};

interface FunkyProps extends TippyProps {
  title: string;
  content: JSX.Element;
}
export const FunkyTooltip = (props: FunkyProps) => {
  const { title, content, children } = props;
  return (
    <Tippy
      animateFill={false}
      animation="scale"
      interactive={true}
      interactiveBorder={10}
      arrow={true}
      arrowType="round"
      theme="tomato"
      trigger="click"
      content={
        <div>
          <h2>{title}</h2>
          <p>{content}</p>
        </div>
      }     
    >
      {children}
    </Tippy>
  );
};
