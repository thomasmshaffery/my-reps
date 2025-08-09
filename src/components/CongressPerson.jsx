function CongressPerson() {
  return (
    <div class="w-full max-w-sm bg-light-bg dark:bg-dark-bg border border-lines dark:border-dark-content rounded-lg shadow-sm">
      <div class="flex justify-end px-4 pt-4"></div>
      <div class="flex flex-col items-center pb-10">
        <img
          class="w-24 h-24 mb-3 rounded-full shadow-lg"
          src="https://images.unsplash.com/photo-1559311648-d46f5d8593d6?q=80&w=2050&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Bonnie image"
        />
        <h5 class="mb-1 text-xl font-medium text-light-header dark:text-dark-header">
          CONGRESS NAME
        </h5>
        <span class="text-sm text-light-bodytext dark:text-dark-bodytext">
          PARTY
        </span>
        <div class="flex mt-4 md:mt-6">
          <span class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-light-bodytext dark:text-dark-bodytext">
            State:
          </span>
          <span class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-light-bodytext dark:text-dark-bodytext">
            District:
          </span>
        </div>
      </div>
    </div>
  );
}
export default CongressPerson;
