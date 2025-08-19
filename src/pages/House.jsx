import { Link } from "react-router-dom";

function House() {
  return (
    <>
      {window.scrollTo(0, 0)}
      <div className="w-full bg-[url(/src/images/adam_michael_szuscik_capitol.jpg)] h-fit bg-cover bg-center">
        <div className="w-full h-60 bg-linear-to-b from-light-bg/40 to-light-democrat/50 border-b border-b-lines dark:border-b-dark-content"></div>
      </div>
      <div className="w-full p-4">
        <p className="w-2/3 pt-5 indent-4 justify-self-center text-xs/5 font-[Inter] font-light sm:text-sm/7 sm:line-clamp-none sm:indent-8 sm:w-1/2 text-light-bodytext dark:text-dark-bodytext text-justify">
          <span className="text-light-header dark:text-dark-header font-bold">
            The House of Representatives{" "}
          </span>
          is the lower chamber of Congress and aims to provide representation
          based on state population. There are currently 435 voting members of
          the House of Representatives as well as non-voting members from the
          District of Columbia and U.S. territories. House members serve in
          two-year terms having a higher turnover rate than their colleagues in
          the Senate. Alongside their lawmaking role the House of
          Representatives also possess other responsibilities. The House is
          soley responsible for the impeachment of government officials. Should
          the Electoral College provide an inconclusive result in the
          presidential election the House is tasked with electing a winner. The
          House also drafts up spending bills with the Senate having the
          opportunity to add onto them.
        </p>
        <p className="w-2/3 pt-5 indent-4 justify-self-center text-xs/5 font-[Inter] font-light sm:text-sm/7 sm:line-clamp-none sm:indent-8 sm:w-1/2 text-light-bodytext dark:text-dark-bodytext text-justify">
          <span className="text-light-header dark:text-dark-header font-bold">
            Three{" "}
          </span>
          criteria must be met for someone to run for office in the House of
          Representatives. In order to successfully run you must be the
          following: you must be at least 25 years of age, a citizen for 7 years
          and reside in the state in which you are running for office.
        </p>
        <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-light-bodytext to-transparent opacity-25 dark:via-dark-bodytext" />
        <p className="w-2/3 indent-4 justify-self-center text-xs/5 font-[Inter] font-light sm:text-sm/7 sm:line-clamp-none sm:indent-8 sm:w-1/2 text-light-bodytext dark:text-dark-bodytext text-justify">
          <span className="text-light-header dark:text-dark-header font-bold">
            The House of Representatives{" "}
          </span>
          currently has a majority of representatives serving terms of 7 years
          or less. The age distribution in the current House of Representatives
          shows that over half are age 59 or below. Despite the intention of the
          House of Representatives aiming to reflect the population of America
          only 17% of its current members are women aged 59 or younger.
          Meanwhile, a third of the total members are men aged 59 or over.
        </p>
        <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-light-bodytext to-transparent opacity-25 dark:via-dark-bodytext" />

        <div className="w-auto flex justify-center pb-10">
          <Link
            to="/app/Senate"
            className="text-sm font-bold sm:text-lg bg-light-democrat hover:bg-light-bg dark:bg-dark-democrat dark:hover:bg-dark-content text-light-bg pt-2 px-2 rounded-sm mx-2"
          >
            Senate
          </Link>
          <Link
            to="/app/FindReps"
            className="text-sm font-bold sm:text-lg bg-light-democrat hover:bg-light-bg dark:bg-dark-democrat dark:hover:bg-dark-content text-light-bg pt-2 px-2 rounded-sm mx-2"
          >
            Find Your Reps
          </Link>
        </div>
      </div>
    </>
  );
}
export default House;
