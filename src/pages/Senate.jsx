import CongressPerson from "../components/CongressPerson";

function Senate() {
  {
    window.scrollTo(0, 0);
  }
  return (
    <>
      <div className="w-full bg-[url(/src/images/luca_nicoletti_columns.jpg)] h-fit bg-cover bg-center">
        <div className="w-full h-60 bg-linear-to-b from-light-bg/40 to-light-democrat/50 border-b border-b-lines dark:border-b-dark-content"></div>
      </div>

      <div className="w-full p-4">
        <p className="w-2/3 pt-5 indent-4 justify-self-center text-xs/5 font-[Inter] font-light sm:text-sm/7 sm:line-clamp-none sm:indent-8 sm:w-1/2 text-light-bodytext dark:text-dark-bodytext text-justify">
          <span className="text-light-header dark:text-dark-header font-bold">
            The Senate{" "}
          </span>
        </p>
      </div>
    </>
  );
}
export default Senate;
