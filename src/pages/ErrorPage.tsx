import { useRouteError } from "react-router-dom";

interface RouteError {
  data: string;
  error: {
    columnNumber: number;
    fileName: string;
    lineNumber: number;
    message: string;
    stack: string;
  };
  internal: boolean;
  status: number;
  statusText: string;
}

export default function ErrorPage() {
  const error = useRouteError() as RouteError;

  return (
    <div className="h-[100vh] flex flex-col space-y-6 items-center justify-center">
      <h1 className="text-3xl font-bold">Oops!</h1>
      <p className="text-destructive">
        Sorry, an unexpected error has occurred.
      </p>
      <p className="text-muted-foreground">
        <i>{error.statusText || error.error.message}</i>
      </p>
    </div>
  );
}
