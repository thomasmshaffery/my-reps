import Navbar from "../components/navbar";

function Homepage() {
  return (
    <div>
      <Navbar />
      <div className="h-dvh bg-light-bg dark:bg-dark-bg text-light-bodytext dark:text-dark-bodytext text-4xl">
        This is our homepage.
        <p /> Test
      </div>
    </div>
  );
}
export default Homepage;
