import * as React from "react";

interface Props {}

export const TachyonsBootstrap = () => {
  return (
    <>
      <div className="sans-serif">
        <div className="f3">tachyons bootstrap components</div>
        <ol>
          <li>           
            <a href="https://tachyons-bootstrap.dwyl.com/?#form" target="_blank" rel="noopener noreferrer">
              tachyons bootstrap library
            </a>
          </li>
          <li>
            {" "}
            <a href="https://tachyons-tldr.now.sh/#/tools" target="_blank" rel="noopener noreferrer">tachyons tl;dr</a>
          </li>
          <li><a href="https://github.com/tachyons-css/generator" target="_blank" rel="noopener noreferrer">tachyons-css-generator</a></li>
          <li><a href="https://blog.dnsimple.com/2017/01/CSS-journey/" target="_blank" rel="noopener noreferrer">simple dns tachyons story</a></li>
          <li><a href="https://github.com/daneden/animate.css" target="_blank" rel="noopener noreferrer">animate.css</a></li>
        </ol>
      </div>
      <div className="cf w-30 center ba br3 b--black-10 pa2 mb4">
        <form className="db">
          <div className="mv3">
            <label className="fw7 f6" htmlFor="exampleInputEmail1">
              Email address
            </label>
            <input
              type="email"
              className="db w-100 pa2 mt2 br2 b--black-20 ba f6"
              id="exampleInputEmail1"
              placeholder="Email"
            />
          </div>
          <div className="mv3">
            <label className="fw7 f6" htmlFor="exampleInputPassword1">
              Password
            </label>
            <input
              type="password"
              className="db w-100 pa2 mt2 br2 b--black-20 ba f6"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <div className="mv3">
            <label className="fw7 f6" htmlFor="exampleInputFile">
              File input
            </label>
            <input className="mt2 f7 w-100" type="file" id="exampleInputFile" />
            <p className="gray f6 mt2">Example block-level help text here.</p>
          </div>
          <div className="mv3">
            <label className="f6 pointer">
              <input type="checkbox" /> Check me out
            </label>
          </div>
          <div className="">
            <div className="orange f6">
              Need to get the styling of the compound input right
            </div>
            <div className="mv3 dib">
              <label
                className="absolute pa0 ma0 o-0"
                htmlFor="exampleInputAmount"
              >
                Amount (in dollars)
              </label>
              <div className="relative mv3 dt dib">
                <div className="bg-light-gray b--black-10 bb bt bl pa2 br2 br--left dtc dib">
                  $
                </div>
                <input
                  type="text"
                  className="dtc pa2 b--black-20 dib bt bb bw1 w-100"
                  id="exampleInputAmount"
                  placeholder="Amount"
                />
                <div className="bg-light-gray b--black-10 ba bl-0 pa2 br2 br--right dtc dib">
                  .00
                </div>
              </div>
            </div>
            <button
              type="submit"
              className=" dib pointer br2 ba b--navy bg-dark-blue white pa2 ml1 mt4 bg-animate hover-bg-navy v-top"
            >
              Transfer cash
            </button>
          </div>
          <button
            type="submit"
            className="pointer br2 ba b--black-20 bg-white pa2 ml1 mv1 bg-animate hover-bg-light-gray f6 fr"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};
