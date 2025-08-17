import CongressPerson from "./CongressPerson";

function CongressList({ congress }) {
  return (
    <div className="justify-self-center flex flex-col">
      <ul className="my-4">
        {congress?.map((congressman) => (
          <CongressPerson person={congressman} key={congressman.bioguideId} />
        ))}
      </ul>
    </div>
  );
}
export default CongressList;
