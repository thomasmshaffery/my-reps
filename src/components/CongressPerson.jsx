function CongressPerson({ person }) {
  const avatar = person.depiction.imageUrl;
  const congressChamber = person.terms.item[0].chamber;
  const {
    name: name,
    partyName: partyName,
    district: district,
    state: state,
  } = person;
  return (
    <div className="w-full max-w-sm sm:w-md bg-light-bg dark:bg-dark-bg border border-lines dark:border-dark-content rounded-lg shadow-sm">
      <div className="flex justify-end px-4 pt-4"></div>
      <div className="flex flex-col items-center pb-10">
        <img
          className="w-24 h-24 mb-3 rounded-full shadow-lg bg-cover bg-center"
          src={avatar}
          alt={name}
        />
        <h5 className="mb-1 text-xl font-medium text-light-header dark:text-dark-header">
          {name}
        </h5>
        <span className="text-xs text-light-bodytext dark:text-dark-bodytext">
          {partyName}
        </span>
        <div className="flex mt-4 md:mt-6">
          <span className="inline-flex items-center px-4 py-2 text-xs font-medium text-center text-light-bodytext dark:text-dark-bodytext">
            {state} {district}
          </span>
          <span className="inline-flex items-center px-4 py-2 text-xs font-medium text-center text-light-bodytext dark:text-dark-bodytext">
            {congressChamber}
          </span>
        </div>
      </div>
    </div>
  );
}
export default CongressPerson;
