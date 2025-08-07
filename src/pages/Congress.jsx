import Navbar from "../components/navbar";
import { useCongress } from "../contexts/CongressContext";

function Congress() {
  const { congress } = useCongress();
  return (
    <button
      className="w-10 h-10 bg-light-bg"
      onClick={() => console.log(congress)}
    >
      Print Congress
    </button>
  );
}
export default Congress;
