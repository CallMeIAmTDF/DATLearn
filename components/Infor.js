class Infor extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `<div class="tw-ml-auto tw-mr-4">
        <div
            class="tw-whitespace-nowrap tw-inline-flex tw-cursor-pointer tw-text-primary-dark tw-ml-0 sm:tw-ml-auto tw-relative ">
            <div
                class="sm:!tw-pl-auto !tw-pl-0 after:!tw-content-[unset] !tw-leading-[unset] tw-relative sm:tw-mr-1 tw-ml-2 tw-flex tw-flex-nowrap tw-items-center md:tw-justify-end nav-item">
                <div class="tw-font-text-medium">
                    <div class=" tw-text-base tw-mr-[.3rem] tw-hidden lg:tw-block ">${this.getAttribute('username')}</div><script>console.log('${this.getAttribute('username')}')</script>
                    <div>
                        <div class="tw-flex tw-justify-between"><span
                                class="text-null tw-text-[.65rem]"></span><span
                                class="text-null tw-text-[.65rem]"></span></div>
                    </div>
                </div>
            </div>
            <div
                class=" after:tw-bg-[#D2DCE2] after:tw-absolute after:tw-content-[&quot;&quot;] after:tw-w-full after:tw-h-full after:tw-top-0 after:tw-bottom-0 after:tw-right-0 after:tw-left-0 after:tw-rounded-[50%] after:tw-m-auto tw-w-[3.8rem] tw-h-[3.8rem] !tw-bg-light tw-rounded-[50%] !tw-border !tw-border-solid !tw-border-transparent  position-relative d-flex align-items-center">
                <div
                    class="UserAvatar_body__1GXAo tw-rounded-[50%] tw-w-[92%] tw-h-[92%] tw-bg-white tw-z-[2] tw-m-auto tw-p-[0.15rem] ">
                    <img src="/assets/img/avatar/${this.getAttribute('username') ? this.getAttribute('username')[0] : ''}.svg" alt="profile" width="100%"
                        height="100%" class="tw-w-full tw-h-full tw-rounded-[50%] bg-light">
                </div>
            </div>
            <div style="z-index:500; position:asolute;"
                class=" tw-shadow-[0_1rem_3rem_rgba(0,0,0,0.175)]  tw-translate-y-[50%] tw-scale-0 tw-absolute tw-min-w-[12rem] tw-rounded-[10px] tw-bottom-0 tw-right-0 tw-opacity-0 tw-p-[0.3rem] tw-bg-white tw-ease-in-out tw-transition-all tw-duration-[0.25s]">
                <a
                    class=" hover:tw-bg-light hover:tw-no-underline tw-rounded-[5px] tw-flex tw-items-center tw-px-[0.4rem] tw-py-[0.3rem] tw-m-[0.1rem] tw-justify-between">
                    <div class="tw-flex tw-items-center"><span class="tw-flex tw-items-center tw-mr-2"><img
                                src="/assets/icons/token.svg" class="UserAvatar_icon__xdTd2"
                                width="19" alt=""></span><span id="token">${this.getAttribute('token')} DATs</span></div>
                </a>
                <a href="/history.html"
                    class=" hover:tw-bg-light hover:tw-no-underline tw-rounded-[5px] tw-flex tw-items-center tw-px-[0.4rem] tw-py-[0.3rem] tw-m-[0.1rem] tw-justify-between">
                    <div class="tw-flex tw-items-center"><span class="tw-flex tw-items-center tw-mr-2"><img
                                src="/assets/icons/history.svg" class="UserAvatar_icon__xdTd2"
                                width="19" alt=""></span><span>History</span></div>
                </a><a href="/profile.html"
                    class=" hover:tw-bg-light hover:tw-no-underline tw-rounded-[5px] tw-flex tw-items-center tw-px-[0.4rem] tw-py-[0.3rem] tw-m-[0.1rem] tw-justify-between">
                    <div class="tw-flex tw-items-center"><span class="tw-flex tw-items-center tw-mr-2"><svg
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="20"
                                height="20" fill="currentColor">
                                <path
                                    d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z">
                                </path>
                            </svg></span><span>Profile</span></div>
                </a>
                <hr class="tw-my-1"><a  onClick="logout()"
                    class=" hover:tw-bg-light hover:tw-no-underline tw-rounded-[5px] tw-flex tw-items-center tw-px-[0.4rem] tw-py-[0.3rem] tw-m-[0.1rem] tw-justify-between">
                    <div class="tw-flex tw-items-center tw-text-[#dc3545]" ><span
                            class="tw-flex tw-items-center tw-mr-2"><svg xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16" width="20" height="20" fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z">
                                </path>
                                <path fill-rule="evenodd"
                                    d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708z">
                                </path>
                            </svg></span><span >Sign out</span></div>
                </a>
            </div>
        </div>
        </div>`
    }
}
customElements.define("information-tag", Infor)