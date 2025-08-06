import { Outlet } from "react-router-dom";

function Container() {
  return (
    <div className="container px-4 w-11/12 mx-auto border-x-1 border-x-lines dark:border-x-dark-content bg-linear-to-b/srgb from-lines via-light-bg to-lines dark:bg-linear-to-b dark:from-dark-bg dark:via-[#000000] dark:to-dark-bg">
      <div className="grid w-4/5 rounded-md h-dvh mx-auto">
        <Outlet />
      </div>
    </div>
  );
}
export default Container;
