// We can use hook useRouteError to get more info about the error occurs
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>Opps Page Not found</h1>
      <h2>
        {err.status}:{err.statusText}
      </h2>
    </div>
  );
};

export default Error;
