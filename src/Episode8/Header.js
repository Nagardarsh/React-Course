import { useState } from "react";
import { Link } from "react-router-dom";

const Title = () => (
  <a href="/">
    {/* <h1 id="title" key="h2">
      Food Villa
    </h1> */}
    <img
      className="logo"
      src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf"
      alt="logo"
    />
  </a>
);

//React Component
//- functional Component
//Name of the component starts with capital letters - not mandatory but good practise
const Header = () => {
  // let btnName = "Login";

  const [btnNameReact, setbtnNameReact] = useState("Login");
  console.log("Header render");

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            {" "}
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About us </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to={"/contact"}>Contact us</Link>
          </li>
          <li>Cart</li>
          <button
            onClick={() => {
              btnNameReact === "Login"
                ? setbtnNameReact("Logout")
                : setbtnNameReact("Login");
            }}
            className="login-btn"
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
