import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";

type Props = {
  error: FetchBaseQueryError ;
};

const ErrorPage: React.FC<Props> = ({ error }) => {
  return (
    <>
      <h1>Oops!</h1>
      <p>Sorry, {error.error}</p>
      <i>{error.status}</i>
    </>
  );
};

export default ErrorPage;
