import * as React from "react";
import "./breadcrumbs.css";

// Ref: https://css-tricks.com/oh-the-many-ways-to-make-triangular-breadcrumb-ribbons/
interface Props {}

type NavType = "multi" | "dot";

const navType: NavType = "multi";

interface Spec {
  caption: string;
  icon?: string;
  visited: boolean;
  current: boolean;
}

const spec: Spec[] = [
  { caption: "Cart", visited: true, current: false, icon: "fa-shower" },
  { caption: "Billing", visited: true, current: false, icon: "fa-user" },
  { caption: "Delivery", visited: false, current: true, icon: "fa-user" },
  { caption: "Review", visited: false, current: false, icon: "ra-user" },
  { caption: "Complete", visited: false, current: false, icon: "ra-user" }
];

const getLiStyle = (spec: Spec) => {
  return spec.caption ? "current" : spec.visited ? "visited" : "";
}

const getIcon = (spec: Spec) => {
  if (spec.current || !spec.visited) {
    return <i className={"fa fa-fw mr2 " + spec.icon} />;
  }
  return <i className="fa fa-fw fa-check mr2" />;
};

const getCrumb = (spec: Spec) => {
  if (spec.current) {
    return (
   
        <a href="#0">
          {getIcon(spec)}
          {spec.caption}
        </a>
    
    );
  }
  if (spec.visited) {
    return (
    
        <a href="#0">
          {getIcon(spec)}
          {spec.caption}
        </a>
    
    );
  }
  if (!spec.visited || !spec.current) {
    return (
      <li>
        <em>
          {getIcon(spec)}
          {spec.caption}
        </em>
      </li>
    );
  }
};

const getCrumbStyle = (crumbType: NavType) => {
  if (crumbType === "multi") {
    return "cd-multi-steps text-center";
  }
  if (crumbType === "dot") {
    return "cd-multi-steps text-top count";
  }
};

export const Breadcrumbs = (props: Props) => {
  return (
    <div>
      <section>
        <nav>
          <div>React Component</div>
          <ol className={getCrumbStyle(navType)}>
            {spec.map((x: Spec) => {
              return (
                <li key={x.caption} className={getCrumbStyle(navType)}>
                  {getCrumb(x)}
                </li>
              );
            })}
          </ol>
        </nav>
      </section>
      <section>
        <h2>7 - Basic Multi-Steps with Custom Icons</h2>

        <nav>
          <ol className="cd-multi-steps text-center ">
            <li className="visited">
              <a href="#0">Cart</a>
            </li>
            <li className="visited">
              <a href="#0">Billing</a>
            </li>
            <li className="current">
              <em>Delivery</em>
            </li>
            <li>
              <em>Review</em>
            </li>
          </ol>
        </nav>

        <section>
          <h2>9 - Dot Indicators with Steps Counter</h2>

          <nav>
            <ol className="cd-multi-steps text-bottom count">
              <li className="visited">
                <a href="#0">Cart</a>
              </li>
              <li className="visited">
                <a href="#0">Billing</a>
              </li>
              <li className="current">
                <em>Delivery</em>
              </li>
              <li>
                <em>Review</em>
              </li>
            </ol>
          </nav>
        </section>
      </section>
    </div>
  );
};
