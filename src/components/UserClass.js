import React, { Children } from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);

    //create a state variable in class based componnent
    this.state = {
      // count: 0,
      // count2: 2,
      userInfo: {
        name: "Dummy Name",
        location: "Dummy LOcation",
        avatar_url: "http://dummy-photo",
      },
    };
    // console.log("Child constructor");
  }

  async componentDidMount() {
    //   this.timer = setInterval(()=> {
    //         console.log("Namaste op");
    //     },1000);
    // console.log("Child Componentdidm");

    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
    console.log(json);
  }

  componentDidUpdate() {
    console.log("ComponentdidUpdate");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("componentWillUnmount");
  }

  render() {
    // const {name, location} = this.props;
    // const { count} = this.state;
    // console.log("Child render");
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        {/* <h1> Count: {count}</h1>
                <button onClick={() => {
                    //Never update state variable directly
                    this.setState({
                        count: this.state.count + 1,
                        count2: this.state.count2 + 1,
                    });
                }}>Count Increase</button> */}

        {/* <h1> Count: {count2}</h1> */}
        {/* <h2>Name:{this.props.name}</h2> */}
        {/* <h2>Name:{name}</h2> */}
        <img src={avatar_url}></img>
        <h2>Name: {name}</h2>
        <h3>Loacation: {location}</h3>
        <h4>Contact:@akshaymarch7</h4>
      </div>
    );
  }
}

export default UserClass;
