import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err.status);
  console.log(err.statusText);
  return (
    <div>
      <h1>OOpss!!!!</h1>
      <h2>Something Went wrong.</h2>
      {/* {console.log(err)} */}
      <h3>
        {err.status}: {err.statusText}
      </h3>
    </div>
  );
};

export default Error;
