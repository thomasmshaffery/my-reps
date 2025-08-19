function CongressPerson({ person }) {
  const getPartyBgColor = (partyName) => {
    const party = partyName.toLowerCase();
    switch (party) {
      case "republican":
        return "border-l-light-republican dark:border-l-dark-republican";
      case "democratic":
        return "border-l-light-democratic dark:border-l-dark-democratic";
      case "independent":
        return "border-l-light-independent dark:border-l-dark-independent";
      default:
        return "bg-gray-100/50 dark:bg-gray-800/50";
    }
  };

  function returnChamber() {
    if (congressChamber !== "Senate")
      return `https://${lastName}.house.gov/contact/`;
    return `https://www.${lastName}.senate.gov/?p=contact`;
  }

  const avatar = person.depiction.imageUrl;
  const state = person.state;
  const district = person.district + "";
  const pos = person.name.search(",");
  const lastName = person.name.substr(0, pos);
  const firstName = person.name.substr(pos + 1);
  const congressChamber =
    person.terms.item[person.terms.item.length - 1].chamber;
  const partyBgColor = getPartyBgColor(person.partyName);

  const contact = returnChamber();

  return (
    <div
      className={`w-full my-4 max-w-sm sm:w-md border border-l-4 ${partyBgColor} dark:${partyBgColor} border-lines dark:border-dark-content rounded-lg shadow-sm`}
    >
      <div className="flex justify-end px-4 pt-4"></div>
      <div className="flex flex-col items-center pb-10">
        <img
          className="w-24 h-24 mb-3 rounded-full shadow-lg bg-cover bg-center"
          src={avatar}
          alt={name}
        />
        <h5 className="mb-1 text-xl font-medium text-light-header dark:text-dark-header">
          {firstName} {lastName}
        </h5>
        <span className="text-xs text-light-bodytext dark:text-dark-bodytext">
          {person.partyName}
        </span>
        <span className="inline-flex items-center px-4 py-2 text-xs font-medium text-center text-light-bodytext dark:text-dark-bodytext">
          <a href={contact} target="_blank">
            Contact
          </a>
        </span>
        <div className="flex mt-4 md:mt-6">
          <span className="inline-flex items-center px-4 py-2 text-xs font-medium text-center text-light-bodytext dark:text-dark-bodytext">
            {state}
          </span>
          <span className="inline-flex items-center px-4 py-2 text-xs font-medium text-center text-light-bodytext dark:text-dark-bodytext">
            {congressChamber}
          </span>
          {district != "undefined" && (
            <span className="inline-flex items-center px-4 py-2 text-xs font-medium text-center text-light-bodytext dark:text-dark-bodytext">
              District: {district}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
export default CongressPerson;
