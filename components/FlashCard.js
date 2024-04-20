
class FlashCard extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `
        <div style="background-color:white; width: 494px;margin:0 auto;height: 570px; border:1px solid white; border-radius:9px; box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); margin-top:5px;"
        class="">
        <div class="tw-max-h-full tw-px-0 tab-content" style="margin-left: 18px;">
            <div class="">
                <div class="tw-flex tw-justify-center tw-items-center tw-w-full !tw-h-auto">
                    <div
                        class="sm:!tw-pt-8 sm:tw-pb-0 !tw-pb-36 sm:tw-mb-28 tw-flex tw-justify-center tw-flex-row max-sm:!tw-pt-[2.8rem]">
                        <div class="tw-pt-[.4rem] sm:tw-pb-[5.5rem] sm:tw-items-start" style="cursor: grab; ">
                            <div class="tw-max-w-[450px] tw-min-h-[500px]" style="margin-right: 50px;">
                                <div class=" tw-relative tw-w-full sm:tw-w-[30.1rem] null">
                                    <div class="">
                                        <div
                                            class="  tw-box-border tw-mx-auto tw-text-center tw-pt-4 tw-relative tw-shadow-[0_.125rem_.25rem_rgba(0,0,0,.075)]">
                                            <img src="${this.getAttribute('img')}" width="100%"
                                                height="250px" alt="word photo" class="tw-object-contain">
                                        </div>
                                        <div class="tw-mt-[5px] tw-flex tw-flex-wrap tw-pb-0 tw-w-full tw-pt-0 ">
                                            <div class="tw-mb-6  tw-w-full">
                                                <div class="tw-w-full card-title h5">
                                                    <div class="tw-flex tw-flex-col md:tw-items-start tw-items-center">
                                                        <div
                                                            class="tw-flex tw-items-center tw-flex-wrap tw-justify-center tw-text-left">
                                                            <div
                                                                class=" tw-text-[1.75rem] sm:tw-text-[2rem] tw-font-text-bold">
                                                                ${this.getAttribute('word')} <i>/${this.getAttribute('mean')}/</i></div>
                                                            <div class="tw-ml-2">
                                                                <div title="Play" onClick="playSound('${this.getAttribute('voice')}')"><svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        viewBox="0 0 16 16" width="30" height="30"
                                                                        fill="currentColor" cursor="pointer">
                                                                        <path
                                                                            d="M11.536 14.01A8.47 8.47 0 0 0 14.026 8a8.47 8.47 0 0 0-2.49-6.01l-.708.707A7.48 7.48 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303z">
                                                                        </path>
                                                                        <path
                                                                            d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.48 5.48 0 0 1 11.025 8a5.48 5.48 0 0 1-1.61 3.89z">
                                                                        </path>
                                                                        <path
                                                                            d="M10.025 8a4.5 4.5 0 0 1-1.318 3.182L8 10.475A3.5 3.5 0 0 0 9.025 8c0-.966-.392-1.841-1.025-2.475l.707-.707A4.5 4.5 0 0 1 10.025 8M7 4a.5.5 0 0 0-.812-.39L3.825 5.5H1.5A.5.5 0 0 0 1 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 7 12zM4.312 6.39 6 5.04v5.92L4.312 9.61A.5.5 0 0 0 4 9.5H2v-3h2a.5.5 0 0 0 .312-.11">
                                                                        </path>
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                        <div class="tw-flex tw-flex-col tw-items-start">
                                                            <h6 class="tw-text-[#6c757d]">/${this.getAttribute('pronun')}/</h6><small
                                                                class=" tw-inline-block tw-px-2 tw-pt-0 tw-pb-[.15rem] tw-rounded-[.35rem] tw-text-white tw-bg-pos-${this.getAttribute('ENTYPE')} ">${this.getAttribute('ENTYPE')}</small>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    class="tw-text-justify tw-w-full tw-overflow-hidden tw-text-ellipsis tw-mt-[.3rem] ">
                                                    <i>${this.getAttribute('endesc')}</i>
                                                </div>
                                                <div
                                                    class="tw-text-justify tw-w-full tw-overflow-hidden tw-text-ellipsis tw-mt-[.3rem] ">
                                                    <i>${this.getAttribute('viedesc')}</i>
                                                </div>
                                                <div>
                                                    <div class="tw-mt-[.4rem] tw-flex tw-flex-grow tw-justify-center">
                                                        <button type="button"
                                                            class=" tw-rounded-3xl tw-px-[.7rem]  !tw-py-[.4rem] sm:tw-py-2 sm:tw-px-4 !tw-bg-[#00AAAE] tw-py-1 tw-border-0 btn btn-primary btn-lg" onClick="next()">Tiếp Theo</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        `
    }
}
customElements.define("flash-card", FlashCard)