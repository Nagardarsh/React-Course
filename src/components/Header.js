import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
import useOnlineStatus from "../utils/Hooks/useOnlineStatus";
import { useSelector } from "react-redux";

// const Title = () => (
//   <a href="/">
//     {/* <h1 id="title" key="h2">
//       Food Villa
//     </h1> */}
//     <img
//       className="logo"
//       src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf"
//       alt="logo"
//     />
//   </a>
// );

//React Component
//- functional Component
//Name of the component starts with capital letters - not mandatory but good practise
const Header = () => {
  // let btnName = "Login";

  const [btnNameReact, setbtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  // console.log(loggedInUser);

  // console.log("Header render");

  //subscribing to the store using a Selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="flex justify-between bg-purple-500 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
      <div className="logo-container">
        <img className="w-56" src={LOGO_URL} />
      </div>
      {/* <Title /> */}
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li>Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            {" "}
            <Link to={"/"}>Home</Link>
          </li>
          <li className="px-4">
            <Link to={"/about"}>About us </Link>{" "}
          </li>
          <li className="px-4">
            {" "}
            <Link to={"/contact"}>Contact us</Link>
          </li>
          <li className="px-4">
            {" "}
            <Link to={"/grocery"}>Grocery</Link>
          </li>
          <li className="px-4 font-bold text-xl">
            <Link to={"/cart"}>Cart - ({cartItems.length} items) </Link>
          </li>
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
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
