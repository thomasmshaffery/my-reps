import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="h-dvh">
      <main className="grid min-h-full place-items-center bg-light-bg dark:bg-dark-bg px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-light-democrat dark:text-dark-democrat">
            404
          </p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-[#000000] dark:text-dark-header sm:text-7xl">
            Page not found
          </h1>
          <p className="mt-6 text-lg font-medium text-pretty text-light-bodytext dark:text-dark-bodytext sm:text-xl/8">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/"
              className="text-xl font-bold text-light-link dark:text-dark-link"
            >
              Return Home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
export default PageNotFound;
