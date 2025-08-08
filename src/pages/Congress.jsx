import Navbar from "../components/navbar";
import { useCongress } from "../contexts/CongressContext";

function Congress() {
  const { congress } = useCongress();
  return (
    // <button
    //   className="w-10 h-10 bg-light-bg"
    //   onClick={() => console.log(congress)}
    // >
    //   Print Congress
    // </button>
    <>
      <div className="w-full bg-[url(/src/images/fan_yang_congress.jpg)] h-fit bg-cover bg-center">
        <div className="w-full h-60 bg-linear-to-b from-light-bg/40 to-light-warning/50 border-b border-b-lines dark:border-b-dark-content"></div>
      </div>
    </>
  );
}
export default Congress;
