import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constructor");
  }

  componentDidMount() {
    // console.log("Parent componentdidmount");
    //Api call
  }
  render() {
    // console.log("Parent Render");
    return (
      <div>
        <h1>About Class </h1>
        <h2>THis is About Page</h2>
        <div>
          LoggedIn User
          <UserContext.Consumer>
            {/* {(data)=> console.log(data)} */}
            {({ loggedInUser }) => (
              <h1 className="text-lg font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        {/* <User name={"Akshay saini funct"}/> */}
        <UserClass name={"Akshay saini Class"} location={"Dehradun"} />
        {/* <UserClass name={"Elon musk Class"} location={"Us"}/> */}
      </div>
    );
  }
}

// const About = () => {
//     return(
//         <div>
//             <h1>About</h1>
//             <h2>THis is About Page</h2>
//             {/* <User name={"Akshay saini funct"}/> */}
//             <UserClass name={"Akshay saini Class"} location={"Dehradun"}/>
//         </div>
//     )
// };

export default About;
