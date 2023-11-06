import { useRouteError } from "react-router-dom";
import '../../App.css';
import { Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>It seems like the page you are trying to reach does not exist.</p>
      <Link to="/">
        <button >Go to Home Page</button>
      </Link>
    </div>
  );
}