import Logo from "./Logo";

function Footer() {
  return (
    <>
      <footer className="bg-light-bg dark:bg-dark-bg border border-lines dark:border-dark-content rounded-lg">
        <div className="w-full flex mx-auto max-w-screen-xl py-4 px-3 sm:items-center justify-between">
          <span className="text-xs mt-3 justify-self-center text-light-bodytext/50 dark:text-dark-bodytext/50 sm:text-center">
            MY REPS{" "}
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-xs font-medium text-light-link dark:text-dark-link sm:mt-0">
            <li>
              <a
                target="_blank"
                href="https://github.com/thomasmshaffery/my-reps"
                className="me-4 sm:me-6"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/thomas-shaffery/"
                className="me-4 sm:me-6"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <button
                command="show-modal"
                commandfor="dialog"
                class="cursor-pointer hover:text-light-democrat me-4 sm:me-6"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                  />
                </svg>
              </button>
              <el-dialog>
                <dialog
                  id="dialog"
                  aria-labelledby="dialog-title"
                  class="fixed inset-0 size-auto max-h-none max-w-none overflow-y-auto bg-transparent backdrop:bg-transparent"
                >
                  <el-dialog-backdrop class="fixed inset-0 bg-gray-900/50 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"></el-dialog-backdrop>

                  <div
                    tabindex="0"
                    class="flex min-h-full items-end justify-center p-4 text-center focus:outline-none sm:items-center sm:p-0"
                  >
                    <el-dialog-panel class="relative transform overflow-hidden rounded-lg bg-gray-800 text-left shadow-xl outline -outline-offset-1 outline-white/10 transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95">
                      <div class="bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div class="sm:flex sm:items-start">
                          <div class="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-500/10 sm:mx-0 sm:size-10">
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="1.5"
                              data-slot="icon"
                              aria-hidden="true"
                              class="size-6 text-red-400"
                            >
                              <path
                                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </div>
                          <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                            <h3
                              id="dialog-title"
                              class="text-base font-semibold text-white"
                            >
                              Deactivate account
                            </h3>
                            <div class="mt-2">
                              <p class="text-sm text-gray-400">
                                Are you sure you want to deactivate your
                                account? All of your data will be permanently
                                removed. This action cannot be undone.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="bg-gray-700/25 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                        <button
                          type="button"
                          command="close"
                          commandfor="dialog"
                          class="inline-flex w-full justify-center rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white hover:bg-red-400 sm:ml-3 sm:w-auto"
                        >
                          Deactivate
                        </button>
                        <button
                          type="button"
                          command="close"
                          commandfor="dialog"
                          class="mt-3 inline-flex w-full justify-center rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white inset-ring inset-ring-white/5 hover:bg-white/20 sm:mt-0 sm:w-auto"
                        >
                          Cancel
                        </button>
                      </div>
                    </el-dialog-panel>
                  </div>
                </dialog>
              </el-dialog>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
export default Footer;
