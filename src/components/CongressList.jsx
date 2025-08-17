import CongressPerson from "./CongressPerson";

function CongressList({ congress }) {
  return (
    <div className="justify-self-center flex flex-col">
      <ul className="my-4">
        {congress?.map((congressman) => (
          <li className="my-4" key={congressman.bioguideID}>
            <CongressPerson person={congressman} />
          </li>
        ))}
      </ul>
    </div>
  );
}
export default CongressList;
