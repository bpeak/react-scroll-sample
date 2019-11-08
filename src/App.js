import React from "react";
import { Link, Element } from "react-scroll";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <Link
            activeClass="active"
            to="test1"
            spy={true}
            smooth={true}
            duration={500}
          >
            <button>test1</button>
          </Link>
          <Link
            activeClass="active"
            to="test2"
            spy={true}
            smooth={true}
            duration={500}
          >
            <button>test2</button>
          </Link>
        </header>
        <Element name="test1" className="element">
          test 1<div className="con">test1</div>
        </Element>

        <Element name="test2" className="element">
          test 2<div className="con">test2</div>
        </Element>
      </div>
    );
  }
}

export default App;
