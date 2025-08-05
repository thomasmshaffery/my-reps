import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";

function Navbar() {
  return (
    <div className="sticky top-0 w-dvw h-16 border-b-1 border-b-lines dark:border-b-light-bodytext bg-light-bg/20 dark:bg-dark-bg backdrop-filter backdrop-blur-lg">
      <div className="max-w-full mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Logo />
          <div className="flex justify-between mx-5">
            <NavLink to="Congress">Congress</NavLink>
            <NavLink to="Senate">Senate</NavLink>
            <NavLink to="House">House of Reps</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
