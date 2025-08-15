import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/navbar";
import CongressPhoto from "../images/ian_hutchinson_congress.jpg";

function Homepage() {
  return (
    <div>
      {window.scrollTo(0, 0)}
      <Navbar />
      <div className="h-auto min-h-dvh bg-light-bg dark:bg-dark-bg text-light-bodytext dark:text-dark-bodytext text-4xl">
        <div className="w-dvw bg-[url(/src/images/ian_hutchinson_congress.jpg)] h-fit bg-cover">
          <div className="w-dvw h-60 bg-linear-to-b from-light-bg/40 to-light-democrat/50 border-b border-b-lines dark:border-b-dark-content"></div>
        </div>
        <div className="w-dvw h-1/2 py-8 bg-lines dark:bg-dark-content border-b-1 border-b-lines dark:border-b-dark-content content-center">
          <h2 className="text-light-heading dark:text-dark-heading justify-self-center font-light sm:text-6xl">
            "We the People...
          </h2>
          <p className="w-2/3 pt-3 justify-self-center text-xs/5 font-[Inter] font-light line-clamp-5 sm:text-sm/7 sm:line-clamp-none sm:indent-8 sm:w-1/2 text-light-bodytext dark:text-dark-bodytext text-wrap">
            of the United States, in Order to form a more perfect Union,
            establish Justice, insure domestic Tranquility, provide for the
            common defense, promote the general Welfare, and secure the
            Blessings of Liberty to ourselves and our Posterity, do ordain and
            establish this Constitution for the United States of America."
          </p>
        </div>
        <div className="w-dvw py-3 h-2/4 bg-light-header dark:bg-linear-to-b dark:to-dark-bg dark:from-dark-content/70 content-center">
          <p className="w-2/3 pt-2 text-light-bg justify-self-center text-xs/5 font-[Inter] font-light sm:text-sm/8 sm:w-1/2 sm:pt-15 dark:text-dark-link text-wrap">
            Your elected officials enact laws that influence the daily lives of
            all Americans and are intended to serve as the voice of the people.
            There are over 500 members of the current U.S. Congress. MY REPS
            aims to make finding yours convenient and fast. You can filter by
            state, party and other metrics to find your representatives.
          </p>
        </div>
        <div className="flex bg-light-header dark:bg-dark-bg py-4 w-dvw h-auto justify-center justify-items-center">
          <Link
            to="app"
            className="text-sm font-bold sm:text-lg sm:mt-5 bg-light-democrat hover:bg-light-bg dark:bg-dark-democrat dark:hover:bg-dark-content text-light-bg pt-2 px-2 rounded-sm"
          >
            Find Out More
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Homepage;
