import { useRef } from "react";
import { links, social } from "./data";
import { FaBars } from "react-icons/fa";
import "./App.css";

function App() {
  const innerRef = useRef(null);
  const outerRef = useRef(null);
  const socialLinkref = useRef(null);

  function toggleMenu() {
    const innerHeight = innerRef.current.getBoundingClientRect().height;

    if (outerRef.current.getBoundingClientRect().height === 0) {
      outerRef.current.style.height = `${innerHeight}px`;
      socialLinkref.current.style.height = `65px`;
    } else {
      outerRef.current.style.height = `0px`;
      socialLinkref.current.style.height = `0px`;
    }
  }

  return (
    <div>
      <nav className="card ">
        <div className="container flex">
          <div className="logo flex">
            <img src="logo.svg" alt="as" />
            <span>Navbar</span>
          </div>
          <div className="outer" ref={outerRef}>
            <ul className="inner flex" ref={innerRef}>
              {links.map((item) => (
                <li key={item.id}>
                  <a href="#">{item.text}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="social-links" ref={socialLinkref}>
            {social.map((item) => {
              return (
                <a href={item.url} key={item.id}>
                  {item.icon}
                </a>
              );
            })}
          </div>
          <div className="menu" onClick={toggleMenu}>
            <FaBars />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default App;
