import { useState } from "react";
import { useCongress } from "../useCongress";
import Loader from "../components/Loader";
import CongressList from "../components/CongressList";

function FindReps() {
  {
    window.scrollTo(0, 0);
  }

  const [state, setState] = useState(null);
  const { congress, isLoading, error } = useCongress(state);

  function onPrintCongress() {
    console.log(congress);
  }
  return (
    <>
      <div className="w-full bg-[url(/src/images/danny_de_compass.jpg)] h-fit bg-cover bg-center">
        <div className="w-full h-60 bg-linear-to-b from-light-bg/40 to-light-democrat/50 border-b border-b-lines dark:border-b-dark-content"></div>
      </div>
      <div className="w-full p-4">
        <h1 className="text-sm sm:text-lg sm:justify-self-center sm:pt-4 sm:pb-8 pb-4 text-light-header dark:text-dark-header font-bold">
          Find Your Representatives
        </h1>
        <form className="max-w-sm mx-auto">
          <label
            htmlFor="countries"
            className="block mb-2 text-sm font-medium text-light-bodytext dark:text-dark-bodytext"
          >
            Select Your State
          </label>
          <select
            id="countries"
            className="bg-light-bg dark:bg-dark-content border border-lines text-light-bodytext dark:text-dark-bodytext text-sm rounded-lg focus:ring-light-democrat dark:focus:ring-dark-democrat focus:border-light-link dark:focus:border-dark-link block w-full p-2.5 dark:border-dark-link dark:placeholder-dark-bodytext"
            onChange={(e) => setState(e.target.value)}
          >
            <option defaultValue="">Choose a State</option>
            <option value="AL">AL - Alabama</option>
            <option value="AK">AK - Alaska</option>
            <option value="AZ">AZ - Arizona</option>
            <option value="AR">AR - Arkansas</option>
            <option value="CA">CA - California</option>
            <option value="CO">CO - Colorado</option>
            <option value="CT">CT - Connecticut</option>
            <option value="DE">DE - Delaware</option>
            <option value="FL">FL - Florida</option>
            <option value="GA">GA - Georgia</option>
            <option value="HI">HI - Hawaii</option>
            <option value="ID">ID - Idaho</option>
            <option value="IL">IL - Illinois</option>
            <option value="IN">IN - Indiana</option>
            <option value="IA">IA - Iowa</option>
            <option value="KS">KS - Kansas</option>
            <option value="KY">KY - Kentucky</option>
            <option value="LA">LA - Louisiana</option>
            <option value="ME">ME - Maine</option>
            <option value="MD">MD - Maryland</option>
            <option value="MA">MA - Massachusetts</option>
            <option value="MI">MI - Michigan</option>
            <option value="MN">MN - Minnesota</option>
            <option value="MS">MS - Mississippi</option>
            <option value="MO">MO - Missouri</option>
            <option value="MT">MT - Montana</option>
            <option value="NE">NE - Nebraska</option>
            <option value="NV">NV - Nevada</option>
            <option value="NH">NH - New Hampshire</option>
            <option value="NJ">NJ - New Jersey</option>
            <option value="NM">NM - New Mexico</option>
            <option value="NY">NY - New York</option>
            <option value="NC">NC - North Carolina</option>
            <option value="ND">ND - North Dakota</option>
            <option value="OH">OH - Ohio</option>
            <option value="OK">OK - Oklahoma</option>
            <option value="OR">OR - Oregon</option>
            <option value="PA">PA - Pennsylvania</option>
            <option value="RI">RI - Rhode Island</option>
            <option value="SC">SC - South Carolina</option>
            <option value="SD">SD - South Dakota</option>
            <option value="TN">TN - Tennessee</option>
            <option value="TX">TX - Texas</option>
            <option value="UT">UT - Utah</option>
            <option value="VT">VT - Vermont</option>
            <option value="VA">VA - Virginia</option>
            <option value="WA">WA - Washington</option>
            <option value="WV">WV - West Virginia</option>
            <option value="WI">WI - Wisconsin</option>
            <option value="WY">WY - Wyoming</option>
          </select>
        </form>
        {isLoading && <Loader className="justify-self-center" />}
        {!isLoading && !error && state && <CongressList congress={congress} />}
      </div>
    </>
  );
}
export default FindReps;
