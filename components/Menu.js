

class Menu extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `<div style="background-color:beige"
        class="tw-sticky tw-top-0 tw-z-[1020] !tw-w-full tw-bg-white tw-backdrop-blur tw-bg-opacity-80 tw-transition-all tw-duration-300 tw-ease-in-out !tw-top-0">
        <div class="tw-max-w-[var(--container-max)] sm:tw-px-3 tw-mx-auto">
            <nav class="tw-flex tw-flex-nowrap tw-items-center tw-px-4 tw-py-2 tw-justify-between"><a
                    class="tw-font-text-bold tw-z-10 tw-p-0 tw-gap-3 tw-mr-8 xl:tw-mr-14 tw-flex tw-items-center hover:tw-no-underline"
                    href="/">
                    <div class="tw-flex tw-items-center"><img src="./assets/logo/DAT3.png" alt="langeek" width="35"
                            height="35"></div>
                    <p class="tw-mb-0 tw-text-lg tw-font-text-bold tw-text-black-1">DATLearn</p>
                </a>
                <div
                    class="tw-z-[13] tw-flex-grow tw-relative tw-r-0 tw-hidden lg:tw-flex tw-text-right tw-w-full lg:tw-mt-0 tw-mt-3">
                    <div
                        class="tw-z-20 tw-gap-6 xl:tw-gap-9 tw-bg-transparent tw-flex tw-w-1/2 tw-float-right lg:tw-float-none lg:tw-w-full tw-flex-wrap sm:tw-flex-nowrap">
                        <a class="tw-text-base hover:tw-no-underline tw-text-primary-dark hover:tw-text-primary-dark tw-font-text-medium tw-relative after:tw-transition-all after:tw-duration-300 after:tw-ease-in-out after:tw-content-[''] after:tw-absolute after:tw-left-0 after:tw-right-0 after:tw-mx-auto after:tw-bg-primary-dark after:tw-bottom-0 after:tw-w-[70%] after:tw-h-[2px] after:tw-scale-x-0 after:hover:tw-scale-x-110 ${this.getAttribute('select') === 'home' ? "after:tw-scale-x-110" : ""}"
                            href="/">Học từ vựng</a>
                        <a class="tw-text-base hover:tw-no-underline tw-text-primary-dark hover:tw-text-primary-dark tw-font-text-medium tw-relative after:tw-transition-all after:tw-duration-300 after:tw-ease-in-out after:tw-content-[''] after:tw-absolute after:tw-left-0 after:tw-right-0 after:tw-mx-auto after:tw-bg-primary-dark after:tw-bottom-0 after:tw-w-[70%] after:tw-h-[2px] after:tw-scale-x-0 after:hover:tw-scale-x-110 ${this.getAttribute('select') === 'test' ? "after:tw-scale-x-110" : ""}"
                            href="/test.html">Kiểm tra</a>
                        <a class="tw-text-base hover:tw-no-underline tw-text-primary-dark hover:tw-text-primary-dark tw-font-text-medium tw-relative after:tw-transition-all after:tw-duration-300 after:tw-ease-in-out after:tw-content-[''] after:tw-absolute after:tw-left-0 after:tw-right-0 after:tw-mx-auto after:tw-bg-primary-dark after:tw-bottom-0 after:tw-w-[70%] after:tw-h-[2px] after:tw-scale-x-0 after:hover:tw-scale-x-110 ${this.getAttribute('select') === 'dict' ? "after:tw-scale-x-110" : ""}"
                            href="/dictionary.html">Từ điển</a>
                        <a class="tw-text-base hover:tw-no-underline tw-text-primary-dark hover:tw-text-primary-dark tw-font-text-medium tw-relative after:tw-transition-all after:tw-duration-300 after:tw-ease-in-out after:tw-content-[''] after:tw-absolute after:tw-left-0 after:tw-right-0 after:tw-mx-auto after:tw-bg-primary-dark after:tw-bottom-0 after:tw-w-[70%] after:tw-h-[2px] after:tw-scale-x-0 after:hover:tw-scale-x-110 ${this.getAttribute('select') === 'game' ? "after:tw-scale-x-110" : ""}"
                            href="/game.html">Trò chơi</a>
                        <a class="tw-text-base hover:tw-no-underline tw-text-primary-dark hover:tw-text-primary-dark tw-font-text-medium tw-relative after:tw-transition-all after:tw-duration-300 after:tw-ease-in-out after:tw-content-[''] after:tw-absolute after:tw-left-0 after:tw-right-0 after:tw-mx-auto after:tw-bg-primary-dark after:tw-bottom-0 after:tw-w-[70%] after:tw-h-[2px] after:tw-scale-x-0 after:hover:tw-scale-x-110 ${this.getAttribute('select') === 'rewards' ? "after:tw-scale-x-110" : ""}"
                            href="/rewards.html">Đổi thưởng</a>
                        <a class="tw-text-base hover:tw-no-underline tw-text-primary-dark hover:tw-text-primary-dark tw-font-text-medium tw-relative after:tw-transition-all after:tw-duration-300 after:tw-ease-in-out after:tw-content-[''] after:tw-absolute after:tw-left-0 after:tw-right-0 after:tw-mx-auto after:tw-bg-primary-dark after:tw-bottom-0 after:tw-w-[70%] after:tw-h-[2px] after:tw-scale-x-0 after:hover:tw-scale-x-110 ${this.getAttribute('select') === 'app' ? "after:tw-scale-x-110" : ""}"
                            href="/mobile-app">App</a>
                    </div>
                </div>
                <a class=" tw-self-start tw-py-2 tw-hidden lg:tw-flex tw-px-6 tw-mr-4 tw-my-auto tw-items-center tw-bg-blue-1 tw-ml-auto lg:tw-px-5 tw-font-text-bold tw-rounded-full hover:tw-no-underline tw-text-white hover:tw-text-white hover:tw-bg-purple tw-transition-all tw-duration-300"
                    href="/sign-in.html" id="sign-in">
                    <span
                        class="tw-whitespace-nowrap tw-text-base tw-items-center tw-flex tw-gap-2 tw-font-text-medium"><img
                            src="./assets/icons/profile.svg" alt="profile" class="tw-brightness-100 tw-invert"
                            width="24" height="24">Sign in</span>
                </a>
                <information-tag id="infor" username="" style="display: none;"></information-tag>
            </nav>
        </div>
    </div>`
    }
}
customElements.define("menu-card", Menu)