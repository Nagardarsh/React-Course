import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
//Default Import
import Header from "./components/Header";
//Named Import
// import { Title } from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/Redux/appStore";
import Cart from "./components/Cart";

//Config driven Ui
// const config = [
//   {
//     type: "carousel",
//     cards: [
//       {
//         offerName: "50% off",
//       },
//       {
//         offerName: " No Delivery Charge",
//       },
//     ],
//   },
//   {
//     type: "restraunt",
//     cards: [
//       {
//         name: "Burger King",
//         image:
//           "https://www.google.com/imgres?imgurl=https%3A%2F%2Flh3.googleusercontent.com%2Fp%2FAF1QipO_6cTc3QdC9L2vAOyCkUPG-G-9YeFxo3YiDu3R%3Dw1080-h608-p-no-v0&tbnid=jYnCxRXXSJETCM&vet=12ahUKEwiitLPJxpuEAxXOm2MGHTpUB24QMygbegUIARCsAQ..i&imgrefurl=https%3A%2F%2Ffoodvilla-cafe.business.site%2F&docid=IyxwGFc9HBcZHM&w=1080&h=608&q=food%20villa&ved=2ahUKEwiitLPJxpuEAxXOm2MGHTpUB24QMygbegUIARCsAQ",
//         cuisines: ["burger", "American"],
//         rating: "4.2",
//       },
//       {
//         name: "KFC",
//         image: "",
//         cuisines: ["burger", "American"],
//         rating: "4.2",
//       },
//     ],
//   },
// ];
// const restrautList = [
//   {
//     name: "Burger King",
//     image:
//       "https://www.google.com/imgres?imgurl=https%3A%2F%2Flh3.googleusercontent.com%2Fp%2FAF1QipO_6cTc3QdC9L2vAOyCkUPG-G-9YeFxo3YiDu3R%3Dw1080-h608-p-no-v0&tbnid=jYnCxRXXSJETCM&vet=12ahUKEwiitLPJxpuEAxXOm2MGHTpUB24QMygbegUIARCsAQ..i&imgrefurl=https%3A%2F%2Ffoodvilla-cafe.business.site%2F&docid=IyxwGFc9HBcZHM&w=1080&h=608&q=food%20villa&ved=2ahUKEwiitLPJxpuEAxXOm2MGHTpUB24QMygbegUIARCsAQ",
//     cusines: ["burger", "American"],
//     rating: "4.2",
//   },
//   {
//     name: "Burger King",
//     image: "",
//     cusines: ["burger", "American"],
//     rating: "4.2",
//   },
//   {
//     name: "KFC",
//     image: "",
//     cusines: ["burger", "American"],
//     rating: "4.2",
//   },
//   {
//     name: "Tealogy",
//     image: "",
//     cusines: ["burger", "American"],
//     rating: "4.2",
//   },
//   {
//     name: "Pizza",
//     image: "",
//     cusines: ["burger", "American"],
//     rating: "4.2",
//   },
// ];

// const burgerking = {
//   name: "Burger King",
//   image:
//     "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf",

//   cuisines: ["Burger", "American"],
//   rating: "4.2",
// };

// const RestrauntCard = (props) => {
//   // console.log(props);
//   return (
//     <div className="card">
//       <img src={burgerking.image} />
//       <h2>{burgerking.name}</h2>
//       {/* <h2>{restrautList[0]?.data.name}</h2> */}
//       <h3>{burgerking.cusines.join(", ")}</h3>
//       <h4>{burgerking.rating}</h4>
//     </div>
//   );
// };

//lazy loading on demand
const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  //authentication
  const [userName, setUserName] = useState();

  useEffect(() => {
    const data = {
      name: "Darshana",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

//Developing a roter and passing inside this createBR
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading.......</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      ,
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
//ReactDom is modify the dom
//passing the react element inside the root

root.render(<RouterProvider router={appRouter} />);
// export default AppLayout;
