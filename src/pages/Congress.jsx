import { Link } from "react-router-dom";

function Congress() {
  return (
    <>
      {window.scrollTo(0, 0)}

      <div className="w-full bg-[url(/src/images/fan_yang_congress.jpg)] h-fit bg-cover bg-center">
        <div className="w-full h-60 bg-linear-to-b from-light-bg/40 to-light-democrat/50 border-b border-b-lines dark:border-b-dark-content"></div>
      </div>
      <div className="w-full p-4">
        <p className="w-2/3 pt-5 indent-4 justify-self-center text-xs/5 font-[Inter] font-light sm:text-sm/7 sm:line-clamp-none sm:indent-8 sm:w-1/2 text-light-bodytext dark:text-dark-bodytext text-justify">
          <span className="text-light-header dark:text-dark-header font-bold">
            Congress{" "}
          </span>
          enacts laws that influence the daily lives of all Americans and is
          intended to serve as the voice of the people. Congress is a bicameral
          legislature divided into two equal institutions: the House of
          Representatives and the Senate. Each state sends elected
          representatives and senators to Congress. Although the House and the
          Senate are structured differently and have their own roles and
          responsibilities, they work together to pass legislation. No bill can
          become a law without passing both houses of Congress.
        </p>
        <p className="w-2/3 pt-5 indent-4 justify-self-center text-xs/5 font-[Inter] font-light sm:text-sm/7 sm:line-clamp-none sm:indent-8 sm:w-1/2 text-light-bodytext dark:text-dark-bodytext text-justify">
          <span className="text-light-header dark:text-dark-header font-bold">
            Congress{" "}
          </span>
          has many responsibilities beyond lawmaking. Congress is responsibile
          for passing the federal budget, oversight of the Executive branch as
          well as being the only body in the U.S. government that can declare
          war. Congress has several means to establish meaningful oversight of
          the government including agencies and hearings. Our representatives
          are entrusted to act in the best interest of their constituents.
        </p>
        <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-light-bodytext to-transparent opacity-25 dark:via-dark-bodytext" />

        <p className="w-2/3 pb-12 indent-4 justify-self-center text-xs/5 font-[Inter] font-light sm:text-sm/7 sm:line-clamp-none sm:indent-8 sm:w-1/2 text-light-bodytext dark:text-dark-bodytext text-justify">
          <span className="text-light-header dark:text-dark-header font-bold">
            Passing{" "}
          </span>
          laws requires both chambers of Congress. There are several different
          ways to pass bills into law. In order for a bill to be passed into law
          both chambers of Congress and the President must agree. The following
          is a very basic explanation of the process.
        </p>

        <ol className="justify-self-center w-2/3 space-y-4 pb-4 sm:grid sm:grid-cols-2 sm:grid-rows-4 sm:gap-4 rtl:space-x-reverse">
          <li className="flex items-center text-light-header dark:text-dark-header space-x-2.5 rtl:space-x-reverse">
            <span className="flex items-center justify-center w-8 h-8 border border-light-header rounded-full shrink-0 dark:border-dark-democrat">
              1
            </span>
            <span>
              <h3 className="font-medium leading-tight">Bill Introduction</h3>
              <p className="text-xs text-justify text-light-bodytext dark:text-dark-bodytext">
                A member of Congress introduces a bill into his or her
                legislative chamber.
              </p>
            </span>
          </li>
          <li className="flex items-center text-light-header dark:text-dark-header space-x-2.5 rtl:space-x-reverse">
            <span className="flex items-center justify-center w-8 h-8 border border-light-header rounded-full shrink-0 dark:border-dark-democrat">
              2
            </span>
            <span>
              <h3 className="font-medium leading-tight">Bill Referal</h3>
              <p className="text-xs text-justify text-light-bodytext dark:text-dark-bodytext">
                The presiding officer of that chamber refers the proposed
                legislation to one or more committees, depending on its subject.
              </p>
            </span>
          </li>
          <li className="flex items-center text-light-header dark:text-dark-header space-x-2.5 rtl:space-x-reverse">
            <span className="flex items-center justify-center w-8 h-8 border border-light-header rounded-full shrink-0 dark:border-dark-democrat">
              3
            </span>
            <span>
              <h3 className="font-medium leading-tight">Bill Review</h3>
              <p className="text-xs text-justify text-light-bodytext dark:text-dark-bodytext">
                Committee members review the bill and decide whether to hold
                public hearings, to combine it with related draft legislation,
                to propose amendments, to recommend that the chamber in which it
                was introduced consider it favorably, or to set it aside for
                possible later review.
              </p>
            </span>
          </li>
          <li className="flex items-center text-light-header dark:text-dark-header space-x-2.5 rtl:space-x-reverse">
            <span className="flex items-center justify-center w-8 h-8 border border-light-header rounded-full shrink-0 dark:border-dark-democrat">
              4
            </span>
            <span>
              <h3 className="font-medium leading-tight">Bill Debate</h3>
              <p className="text-xs text-justify text-light-bodytext dark:text-dark-bodytext">
                If the committee, or committees, return the bill to the chamber
                of the body in which it was introduced, members debate the
                measure and may consider further amendments.
              </p>
            </span>
          </li>
          <li className="flex items-center text-light-header dark:text-dark-header space-x-2.5 rtl:space-x-reverse">
            <span className="flex items-center justify-center w-8 h-8 border border-light-header rounded-full shrink-0 dark:border-dark-democrat">
              5
            </span>
            <span>
              <h3 className="font-medium leading-tight">Passing Chambers</h3>
              <p className="text-xs text-justify text-light-bodytext dark:text-dark-bodytext">
                The bill is then considered by the full chamber. If it passes,
                the measure is referred to the other chamber, where this process
                begins anew.
              </p>
            </span>
          </li>
          <li className="flex items-center text-light-header dark:text-dark-header space-x-2.5 rtl:space-x-reverse">
            <span className="flex items-center justify-center w-8 h-8 border border-light-header rounded-full shrink-0 dark:border-dark-democrat">
              6
            </span>
            <span>
              <h3 className="font-medium leading-tight">
                Congressional Approval
              </h3>
              <p className="text-xs text-justify text-light-bodytext dark:text-dark-bodytext">
                When a majority in the House, and in the Senate, agree the bill
                should become law, it is signed and sent to the president.
              </p>
            </span>
          </li>
          <li className="flex items-center text-light-header dark:text-dark-header space-x-2.5 rtl:space-x-reverse">
            <span className="flex items-center justify-center w-8 h-8 border border-light-header rounded-full shrink-0 dark:border-dark-democrat">
              7
            </span>
            <span>
              <h3 className="font-medium leading-tight">Presidential Action</h3>
              <p className="text-xs text-justify text-light-bodytext dark:text-dark-bodytext">
                The president may sign the act of Congress into law, or he may
                veto it.
              </p>
            </span>
          </li>
          <li className="flex items-center text-light-header dark:text-dark-header space-x-2.5 rtl:space-x-reverse">
            <span className="flex items-center justify-center w-8 h-8 border border-light-header rounded-full shrink-0 dark:border-dark-democrat">
              8
            </span>
            <span>
              <h3 className="font-medium leading-tight">
                Congressional Override
              </h3>
              <p className="text-xs text-justify text-light-bodytext dark:text-dark-bodytext">
                Congress can then override the president's veto by a two-thirds
                vote of both the House and Senate thereby making the vetoed act
                a law.
              </p>
            </span>
          </li>
        </ol>
        <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-light-bodytext to-transparent opacity-25 dark:via-dark-bodytext" />

        <div className="w-auto flex justify-center pb-10">
          <Link
            to="/app/Senate"
            className="text-sm font-bold sm:text-lg bg-light-democrat hover:bg-light-bg dark:bg-dark-democrat dark:hover:bg-dark-content text-light-bg pt-2 px-2 rounded-sm mx-2"
          >
            Senate
          </Link>
          <Link
            to="/app/House"
            className="text-sm font-bold sm:text-lg bg-light-democrat hover:bg-light-bg dark:bg-dark-democrat dark:hover:bg-dark-content text-light-bg pt-2 px-2 rounded-sm mx-2"
          >
            House of Reps
          </Link>
        </div>
      </div>
    </>
  );
}
export default Congress;
