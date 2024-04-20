`
<div style="width: 40%;margin:0 auto; border:1px solid white; border-radius:9px; box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); margin-top:5px;"
        class="">
        <div class="tw-px-0 tab-content" style="margin-left: 18px;">
            <div class="">
                <div class="tw-flex tw-items-center tw-w-full">
                    <div class="tw-flex tw-justify-center tw-flex-row max-sm:!tw-pt-[2.8rem]">
                        <div class="sm:tw-items-start" style="cursor: grab; ">
                            <div class="tw-max-w-[450px] " style="margin-right: 50px;">
                                <div class=" tw-relative tw-w-full sm:tw-w-[30.1rem] null">
                                    <div class="">
                                        <div class="tw-mt-[5px] tw-flex tw-flex-wrap tw-pb-0 tw-w-full tw-pt-0 ">
                                            <div class="tw-mb-6  tw-w-full">
                                                <div class="tw-w-full card-title h5">
                                                    <div class="tw-flex tw-flex-col md:tw-items-start tw-items-center">
                                                        <div
                                                            class="tw-flex tw-items-center tw-flex-wrap tw-justify-center tw-text-left">
                                                            <div
                                                                class=" tw-text-[1.75rem] sm:tw-text-[2rem] tw-font-text-bold">
                                                                hello</div>
                                                            <div class="tw-ml-2">
                                                                <div title="Play"><svg
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
                                                            <h6 class="tw-text-[#6c757d]">/həˈɫoʊ/, /hɛˈɫoʊ/</h6><small
                                                                class=" tw-inline-block tw-px-2 tw-pt-0 tw-pb-[.15rem] tw-rounded-[.35rem] tw-text-white tw-bg-pos-interjection ">interjection</small>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    class="tw-text-justify tw-w-full tw-overflow-hidden tw-text-ellipsis tw-mt-[.3rem] ">
                                                    <i>a word we say when we see someone and want to greet them</i>
                                                </div>
                                                <div
                                                    class="tw-text-justify tw-w-full tw-overflow-hidden tw-text-ellipsis tw-mt-[.3rem] ">
                                                    <i></i>
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
    </div>`
class DictionaryCard extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `<div style="width: 560px; margin:0 auto; border:1px solid white; border-radius:9px; box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); margin-top:5px;"
            class="">
            <div class="tw-px-0 tab-content" style="margin-left: 18px;">
                <div class="">
                    <div class="tw-flex tw-items-center tw-w-full">
                        <div class="tw-flex tw-justify-center tw-flex-row max-sm:!tw-pt-[2.8rem]">
                            <div class="sm:tw-items-start" style="cursor: grab; ">
                                <div class="" style="margin-right: 50px;">
                                    <div class=" tw-relative tw-w-full sm:tw-w-[30.1rem] null">
                                        <div class="">
                                            <div class="tw-mt-[5px] tw-flex tw-flex-wrap tw-pb-0 tw-w-full tw-pt-0 ">
                                                <div class="tw-mb-6  tw-w-full">
                                                    <div class="tw-w-full card-title h5">
                                                        <div class="tw-flex tw-flex-col md:tw-items-start tw-items-center">
                                                            <div
                                                                class="tw-flex tw-items-center tw-flex-wrap tw-justify-center tw-text-left">
                                                                <div
                                                                    class=" tw-text-[1.75rem] sm:tw-text-[2rem] tw-font-text-bold">
                                                                    ${this.getAttribute('word').replace('\'', '')}</div>
                                                                <div class="tw-ml-2">
                                                                    <div title="Play" onClick='playSound("${this.getAttribute('word').replace('\'', '')}")'><svg
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
                                                                <h6 class="tw-text-[#6c757d]">${this.getAttribute('pronun')}</h6><small
                                                                    class=" tw-inline-block tw-px-2 tw-pt-0 tw-pb-[.15rem] tw-rounded-[.35rem] tw-text-white tw-bg-pos-interjection ">${this.getAttribute('type')}</small>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        class="tw-text-justify tw-w-full tw-overflow-hidden tw-text-ellipsis tw-mt-[.3rem] ">
                                                        <i>${this.getAttribute('mean1')}</i>
                                                    </div>
                                                    <div
                                                        class="tw-text-justify tw-w-full tw-overflow-hidden tw-text-ellipsis tw-mt-[.3rem] ">
                                                        <i>${this.getAttribute('mean2')}</i>
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
        </div>`
    }
}
customElements.define("dictionary-card", DictionaryCard)