import Logo from "./Logo";

function Footer() {
  return (
    <>
      <footer className="bg-light-bg dark:bg-dark-bg border border-lines dark:border-dark-content rounded-lg">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-xs text-light-bodytext dark:text-dark-link sm:text-center dark:text-gray-400">
            MY REPS
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-xs font-medium text-light-link dark:text-dark-link sm:mt-0">
            <li>
              <a href="#" className="me-4 md:me-6">
                GitHub
              </a>
            </li>
            <li>
              <a href="#" className="me-4 md:me-6">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="#" className="me-4 md:me-6">
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
export default Footer;
