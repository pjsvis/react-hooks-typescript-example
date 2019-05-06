import * as React from "react";
import "tachyons";
import "colors.css";
import { HackerNews } from "./components/get-data/hacker-news";
import {
  Header,
  Sidebar,
  ToggleButton,
  headerItems,
  Item
} from "./components/sidebar/Sidebar";
import { User } from "./components/user/user";
import { ProgressBar } from "./components/progress-bar/progress-bar";
import { FunkyTooltip, Popover } from "./components/progress-bar/tooltip";
import ReactMarkdown from "react-markdown";

const markdown = `

## Bobby Gibbes

<div class="tl">
<img
  class="fl mr2"
  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Bobby_Gibbes_1942_%28AWM_011962%29.jpg/120px-Bobby_Gibbes_1942_%28AWM_011962%29.jpg"
/>

Bobby Gibbes (6 May 1916 – 11
April 2007) was an Australian fighter ace of World War II, and
the longest-serving wartime commander of No. 3 Squadron RAAF. 

He
was officially credited with 10¼ aerial victories, although his
score is often reported as 12, including 2 shared; he commanded
No. 3 Squadron in North Africa during 1942–43. 

A jackaroo and
salesman before joining the Royal Australian Air Force in 1940,
Gibbes flew with No. 3 Squadron in the Middle East, and became
commanding officer during the Western Desert Campaign. 

Posted
to the South West Pacific in 1944, he served with No. 80 Wing of
the Australian First Tactical Air Force, and took part in the
"Morotai Mutiny" of April 1945. 

After the war he spent many years in New Guinea developing local industry, for which he was
awarded the Medal of the Order of Australia in 2004. 

He continued to fly until he was 85.

[Full article](https://www.wikiwand.com/en/Bobby_Gibbes)

</div>`;

const App = () => {
  const [isOpen, toggleIsOpen] = React.useState(false);

  return (
    <>
      <Header className="header pa3 pl4 white f5">
        <div className="fl mr3">
          <i className="fa fa-fw fa-home mr1" />
          Home
        </div>
        <div className="fl mr3">
          <i className="fa fa-fw fa-building-o mr1" />
          Breach Records
        </div>
        <div className="fl mr3">
          {" "}
          <i className="fa fa-fw fa-cogs mr1" />
          New Breach
        </div>
        <div className="fl mr3">
          {" "}
          <i className="fa fa-fw fa-info-circle mr1" />
          About
        </div>

        {/* <Sidebar pose={isOpen ? "open" : "closed"}>
          <ToggleButton onClick={() => toggleIsOpen(!isOpen)}>X</ToggleButton>
          {headerItems.map(item => (
            <Item>{item.name}</Item>
          ))}
        </Sidebar> */}
      </Header>
      <div className="container mt2">
        <ProgressBar />
        <div className="ba br3 b--black-10 pa2 w-100 vh-50 mt2 shadow-4">
          <Popover
            content={
              <ReactMarkdown
                className="tl black-90"
                escapeHtml={false}
                source={markdown}
                linkTarget="_blank"
              />
            }
          >
            <span className="fr">
              <i className="fa fa-fw fa-lg fa-question-circle blue pointer" />
            </span>
          </Popover>
          Form
        </div>
      </div>
    </>
  );
};

export default App;
