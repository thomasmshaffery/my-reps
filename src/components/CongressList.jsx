function CongressList(congress) {
  return (
    <div className="justify-self-center flex flex-col">
      <ul>
        {congress?.map((congressman) => () )}
      </ul>
    </div>
  );
}
export default CongressList;
