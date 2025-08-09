import { Outlet } from "react-router-dom";

function Container() {
  return (
    <div className="container justify-self-center w-11/12 h-auto min-h-dvh overflow-y-auto border-x-1 border-x-lines dark:border-x-dark-content bg-linear-to-b/srgb bg-light-bg dark:bg-dark-bg">
      <div className="grid w-auto mx-auto rounded-md h-auto">
        <Outlet />
      </div>
    </div>
  );
}
export default Container;
