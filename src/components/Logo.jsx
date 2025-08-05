import { Link } from "react-router-dom";

function Logo() {
  return (
    <div>
      <span className="text-light-header dark:text-dark-header text-lg font-bold">
        <Link to="/">MY REPS</Link>
      </span>
    </div>
  );
}
export default Logo;
