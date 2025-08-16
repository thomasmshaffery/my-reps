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
          is comprised of two elected officials from each state. As members of
          Congress the Senate is a fundamental part of creating laws. However
          they have powers beyond lawmaking such as filibustering legislation,
          voting to close debate on legislation known as cloture, acting as the
          judge and jury of impeachment trials and the power to approve
          executive treaties by a two-thirds vote.
        </p>
        <p className="w-2/3 pt-5 indent-4 justify-self-center text-xs/5 font-[Inter] font-light sm:text-sm/7 sm:line-clamp-none sm:indent-8 sm:w-1/2 text-light-bodytext dark:text-dark-bodytext text-justify">
          <span className="text-light-header dark:text-dark-header font-bold">
            Senators{" "}
          </span>
          serve in six-year terms with staggered elections. Each election for
          the Senate will fill one-third of its seats aiming to ensure there are
          always new and experienced members present. In the current Senate the
          majority of senators have served for 17 years and below in their
          terms. Despite terms being relatively shorter, 69% of the current
          Senate is aged 60 or older. In the Senate men outnumber women
          approximately 3:1 making it a male dominanted space.
        </p>
        <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-light-bodytext to-transparent opacity-25 dark:via-dark-bodytext" />
        <p className="w-2/3 indent-4 justify-self-center text-xs/5 font-[Inter] font-light sm:text-sm/7 sm:line-clamp-none sm:indent-8 sm:w-1/2 text-light-bodytext dark:text-dark-bodytext text-justify">
          <span className="text-light-header dark:text-dark-header font-bold">
            There{" "}
          </span>
          are three requirements to run for Senate. The following must all apply
          for you to be eligible: you must be at least 30 years of age, you must
          be a citizen for at least 9 years and you must currently reside in the
          state in which you are running for office. Despite the minimum age
          requirement almost two-thirds of the active Senate are at least double
          the minimum age. Only one third of the current Senate has been serving
          for longer than 17 years; therefore that despite the founders
          intentions of there being turnover, a majority are still double the
          minimum age requirement.
        </p>
      </div>
    </>
  );
}
export default Senate;
