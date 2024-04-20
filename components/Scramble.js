

class Scramble extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `<div class="">
        <div class="tw-max-h-full tw-bg-transparent tw-mx-0 tw-px-0 tab-content">
            <div role="tabpanel" id="tabcontainer-tabpane-quiz" aria-labelledby="tabcontainer-tab-quiz"
                class="fade tab-pane active show">
                <div class="tw-flex tw-justify-center tw-items-center tw-w-full tw-h-auto ">
                    <div class="swiper swiper-initialized swiper-horizontal swiper-pointer-events !tw-pt-[2.8rem] sm:!tw-pt-16 sm:!tw-pb-0 !tw-pb-32 sm:tw-mb-28 tw-mb-0 tw-w-full tw-flex tw-justify-center swiper-backface-hidden"
                        callbacks="[object Object]">
                        <div class="swiper-wrapper tw-pt-[.4rem] sm:tw-pb-[5.5rem] tw-items-start tw-pointer-events-none"
                            style="transition-duration: 0ms; transform: translate3d(42.1625px, 0px, 0px);">
                            <div class="swiper-slide !tw-w-[85%] !tw-min-h-[32.3rem] sm:!tw-w-[550px] tw-mx-auto tw-pointer-events-auto swiper-slide-active"
                                style="margin-right: 50px;">
                                <div
                                    class="tw-border tw-border-solid !tw-border-[#00000020] tw-rounded-[20px] tw-overflow-hidden tw-h-full tw-relative tw-flex tw-flex-col tw-min-w-0 tw-break-word  tw-bg-clip-border tw-border tw-border-black tw-border-opacity-10">
                                    <div class=" tw-w-full !tw-border-[#00000020] md:tw-pb-7 tw-pb-1">
                                        <div
                                            class="before:tw-content-[&quot;&quot;] before:tw-absolute before:tw-top-0 before:tw-left-0 before:tw-w-full before:tw-h-full before:tw-z-[1] before:tw-bg-[#2979FF] before:tw-rounded-[0_0_50%_50%/0_0_100%_100%] before:tw-scale-x-[1.5] tw-relative tw-w-full tw-overflow-hidden tw-bg-transparent tw-z-[1] tw-h-[10rem] tw-rounded-[20px]">
                                        </div>
                                        <div
                                            class=" tw-h-[6rem] !tw-z-10 tw-absolute tw-top-0 tw-w-full tw-flex tw-flex-col tw-items-center tw-pt-4">
                                            <h6
                                                class="tw-mt-1 tw-text-base sm:tw-text-[1.2rem] tw-font-semibold !tw-text-black ">
                                                Sắp xếp lại từ sau: </h6>
                                            <div class="tw-flex tw-items-center tw-flex-grow">
                                                <h5
                                                    class="tw-text-base tw-leading-[1.4rem] sm:tw-text-[1.8rem] sm:tw-leading-[1.7rem] !tw-text-white tw-font-semibold sm:tw-px-6 tw-px-2 tw-text-center tw-self-center">
                                                    ${this.getAttribute('scramble')}</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="tw-mt-[60px] md:tw-mt-0 tw-z-[5] sm:tw-px-12 tw-px-2 tw-pt-4 tw-pb-0 tw-flex-auto tw-p-5">
                                        <div class="sm:tw-p-5 tw-p-0">
                                            <div
                                                class=" focus-visible:[&amp;_input]:!tw-outline-0 focus-visible:[&amp;_input]:!tw-outline-none ">
                                                <div><input id="input"
                                                        class="tw-bg-[#e9ecef] tw-rounded-[12px] tw-border-0 tw-p-[.4rem] tw-text-[#495057] tw-tracking-[.05rem] focus:!tw-outline-0 tw-text-center tw-font-text-medium tw-text-[1.1rem] tw-w-full"
                                                        placeholder=""></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class=" tw-text-right sm:tw-px-12 tw-px-4 tw-pt-2 tw-pb-6 tw-w-full"><button
                                            type="button"
                                            class=" tw-z-[3] tw-px-[.4rem] sm:tw-px-6 !tw-pt-[.2rem] !tw-pb-[.4rem] sm:tw-py-[.375rem] !tw-bg-[#2979FF] tw-rounded-2xl !tw-text-white  btn btn- swiper-slider-next "
                                            onclick="scrambleSubmit('${this.getAttribute('word')}', '${this.getAttribute('mean')}', '${this.getAttribute('desc')}')">Done</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>`
    }
}
customElements.define("scramble-word", Scramble)