import { useRouteError } from 'react-router-dom';

interface IError {
  statusText: string;
  message: string;
}

export default function ErrorPage() {
  const error = useRouteError() as IError;
  console.error(error);

  return (
    <div className="container py-4">
      <h1 className="h1 text-danger">Oops!</h1>
      <p className="h2 text-danger">Sorry, an unexpected error has occurred.</p>
      <p className="h3 text-danger">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
