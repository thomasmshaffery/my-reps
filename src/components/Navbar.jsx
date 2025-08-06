import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";

function Navbar() {
  return (
    <div className="sticky top-0 w-dvw h-16 border-b-1 border-b-lines dark:border-b-dark-content bg-light-bg/50 dark:bg-dark-bg/50 backdrop-filter backdrop-blur-lg inset-shadow-lg inset-shadow-light-democrat">
      <div className="max-w-full mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Logo />
          <div className="flex justify-between gap-3 text-sm text-light-bodytext dark:text-dark-link sm:text-lg sm:font-light">
            <NavLink to="/Congress">Congress</NavLink>
            <NavLink to="/Senate">Senate</NavLink>
            <NavLink to="/House">House of Reps</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
