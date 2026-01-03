import { Link, useRouteError } from "react-router-dom";
import { FaExclamationTriangle, FaHome } from "react-icons/fa";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="card w-full max-w-md bg-base-100 shadow-2xl">
        <div className="card-body text-center">
          
          {/* Icon */}
          <div className="flex justify-center mb-4">
            <div className="w-20 h-20 rounded-full bg-error/10 flex items-center justify-center">
              <FaExclamationTriangle className="text-error text-4xl" />
            </div>
          </div>

          {/* Error Code */}
          <h1 className="text-6xl font-extrabold text-error">
            {error?.status || 404}
          </h1>

          {/* Title */}
          <h2 className="text-2xl font-bold mt-2">
            Oops! Something went wrong
          </h2>

          {/* Message */}
          <p className="text-gray-500 mt-2">
            {error?.statusText ||
              error?.message ||
              "The page you are looking for does not exist."}
          </p>

          {/* Actions */}
          <div className="card-actions justify-center mt-6">
            <Link to="/" className="btn btn-primary gap-2">
              <FaHome />
              Go Back Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
