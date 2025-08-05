import Footer from "../components/Footer";
import Navbar from "../components/navbar";

function Homepage() {
  return (
    <div>
      <Navbar />
      <div className="h-dvh bg-light-bg dark:bg-dark-bg text-light-bodytext dark:text-dark-bodytext text-4xl">
        This is our homepage.
        <p /> Test
      </div>
      <Footer />
    </div>
  );
}
export default Homepage;
