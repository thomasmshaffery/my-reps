import { Outlet } from "react-router-dom";

function Container() {
  return (
    <div className="container justify-self-center w-11/12 h-auto min-h-dvh overflow-y-auto border-x-1 border-x-lines dark:border-x-dark-content bg-linear-to-b/srgb from-lines via-light-bg to-lines dark:bg-linear-to-b dark:from-dark-bg dark:via-[#000000] dark:to-dark-bg">
      <div className="grid w-auto mx-auto rounded-md h-auto">
        <Outlet />
      </div>
    </div>
  );
}
export default Container;
