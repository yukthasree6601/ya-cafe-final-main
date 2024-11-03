import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>Oooops!!!!</h1>
    </div>
  );
};
export default Error;
