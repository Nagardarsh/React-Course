import { useEffect, useState } from "react";

const User = (props) => {
  const [count, setcount] = useState(0);
  const [count2] = useState(1);

  useEffect(() => {
    //Api call
    // this.timer = setInterval(()=> {
    //             console.log("Namaste op");
    //         },1000);
  }, []);

  // async function getUsrInfo() {
  //         // console.log("Child Componentdidm");
  //         const data = await fetch("https://api.github.com/users/akshaymarch07");
  //         const json = await data.json();
  //         console.log(json);

  //     }

  return (
    <div className="user-card m-4 p-4 bg-gray-50 rounded-lg">
      <h1>Count = {count}</h1>
      <h1>Count2 = {count2}</h1>
      <h2>Name:{props.name}</h2>
      <h3>Loacation: Ujjain</h3>
      <h4>Contact:@akshaymarch7</h4>
    </div>
  );
};

export default User;
