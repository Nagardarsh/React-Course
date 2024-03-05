// // import React from "react";
// // import { ReactDOM } from "react-dom/client"; 

// // const heading = React.createElement("h1", {
// //     id : "title",
// // }, "Heading 1 for parcel!");

// // const heading2 = React.createElement("h2", {
// //     id : "title",
// // }, "Heading 2!");

// //Jsx => React.creatElement =>object => html(Dom)
// // const heading3 = (
// //     <h1 id="title" key="h3">Namaste React</h1>
// // );

// // const container = React.createElement("div", {
// //     id : "container",
// //     hello: "world",
// // }, [heading, heading2]);

// // console.log(heading);
// // const root = ReactDOM.createRoot(document.getElementById("root")); //ReactDom is modify the dom
// // //passing the react element inside the root
// // // root.render(container);
// // root.render(heading);


// import React from "react";
// import { ReactDOM } from "react-dom/client"; 

// const heading = ( 
// <h1 id="title" key="h2">
//     Namaste React
// </h1>
// );

// //React Component
// //- functional Component
// //Name of the component starts with capital letters - not mandatory but good practise 
// const Header = () => {
//     return (
//     <div> <h1>Namste React functional Component</h1> 
//     <h2>This is h2 tag</h2>
//     </div>
// )
// };

// const root = ReactDOM.createRoot(document.getElementById("root")); //ReactDom is modify the dom
// //passing the react element inside the root

// root.render(<HeaderComponent/>);