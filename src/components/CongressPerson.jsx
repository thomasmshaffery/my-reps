function CongressPerson() {
  return (
    <div className="w-xs sm:w-sm h-sm sm:h-auto p-4 rounded-md border border-light-bodytext/20 bg-light-bg dark:bg-dark-content dark:text-dark-header">
      <div className="flex justify-start gap-4">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1642240277356-f76d7e85a695?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="inline-block size-15 rounded-full border-2 border-light-democrat dark:border-dark-democrat"
        />
        <h1 className="text-light-header dark:text-dark-header">
          Congressman Name
        </h1>
        <br />
        <h1>Test</h1>
      </div>
    </div>
  );
}
export default CongressPerson;
