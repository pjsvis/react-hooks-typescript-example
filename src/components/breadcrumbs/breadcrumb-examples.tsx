import * as React from "react";
import "./breadcrumbs.css";

// Ref: https://css-tricks.com/oh-the-many-ways-to-make-triangular-breadcrumb-ribbons/
// Ref: https://codepen.io/fontawesome/pen/GBQOvo
interface Props {}

export const BreadcrumbExamples = (props: Props) => {
  return (
    <div>
      <section>
        <h2>7 - Basic Multi-Steps with Custom Icons</h2>

        <nav>
          <ol className="cd-multi-steps text-center custom-icons">
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
