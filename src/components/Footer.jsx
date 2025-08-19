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
                  <el-dialog-backdrop class="fixed inset-0 bg-light-bg/50 dark:bg-dark-content/50 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"></el-dialog-backdrop>

                  <div
                    tabindex="0"
                    class="flex min-h-full items-end justify-center p-4 text-center focus:outline-none sm:items-center sm:p-0"
                  >
                    <el-dialog-panel
                      command="close"
                      commandfor="dialog"
                      class="relative transform overflow-hidden rounded-lg bg-light-bg/30 dark:bg-dark-bg/30 backdrop-filter backdrop-blur-xs text-left shadow-xl outline -outline-offset-1 outline-lines dark:outline-dark-democrat/20 transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
                    >
                      <div class="bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div class="sm:flex sm:items-start">
                          <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                            <h3
                              id="dialog-title"
                              class="text-base font-semibold text-light-header dark:text-dark-header"
                            >
                              MY REPS - Additional Info
                            </h3>
                            <div class="mt-2">
                              <p class="text-sm text-light-bodytext dark:text-dark-bodytext">
                                MY REPS was developed in React with Vite. It is
                                deployed on Vercel. Images were found on
                                Unsplash and credits go to: Adam Michael
                                Szuscik, Danny De, Fan Yang, Ian Hutchinson and
                                Luca Nicoletti.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="bg-light-bg/30 dark:bg-dark-bg/30 px-4 py-3 sm:flex sm:justify-center sm:px-6">
                        <button
                          type="button"
                          command="close"
                          commandfor="dialog"
                          class="mt-3 inline-flex w-full cursor-pointer justify-center rounded-md px-3 py-2 text-sm font-semibold text-light-link dark:text-dark-link inset-ring inset-ring-white/5 hover:text-light-democrat sm:mt-0 sm:w-auto"
                        >
                          Close
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
