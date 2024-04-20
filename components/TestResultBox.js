class TestResultBox extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `<main class="tw-flex tw-flex-grow">
        <div class="tw-flex tw-flex-col tw-mx-auto tw-px-0 tw-overflow-hidden" style="width: 60%;">
            <div class="">
                <div class="tw-max-h-full tw-bg-transparent tw-mx-0 tw-px-0 tab-content">
                    <div role="tabpanel" id="tabcontainer-tabpane-result" aria-labelledby="tabcontainer-tab-result"
                        class="fade tab-pane active show">
                        <div
                            class="old-container tw-w-full [&amp;_p]:tw-text-[11px] [&amp;_p]:xl:tw-text-[.7rme] [&amp;_p]:min-[1485px]:tw-text-[.8rem] [&amp;_h3]:tw-text-[#133d7c] [&amp;_h4]:tw-text-[#133d7c] [&amp;_h5]:tw-text-[#133d7c] [&amp;_h6]:tw-text-[#2962ff] tw-p-0 sm:tw-px-[15px] tw-m-0 tw-mb-28 sm:tw-mx-auto sm:tw-mt-8 ">
                            <input class=" tw-peer tw-absolute tw-bottom-0 tw-opacity-0 tw-z-[-1] tw-bg-[rgb(255,0,0)]"
                                type="checkbox" id="result">
                            <div
                                class=" peer-checked:[&amp;_.chevronRight]:!tw-rotate-90 tw-w-full tw-border tw-border-solid !tw-border-[rgba(0,0,0,.125)] tw-rounded-[18px] tw-bg-white md:tw-mt-0 md:tw-pt-0 tw-pt-16 tw-relative tw-flex tw-flex-col tw-min-w-0 tw-break-word  tw-bg-clip-border tw-border tw-border-black tw-border-opacity-10">
                                <h6
                                    class="tw-text-sm !tw-text-[#426cacd0] tw-px-0 tw-pt-2 tw-pb-0 tw-mt-4 md:tw-ml-8 tw-ml-6 tw-mr-6 tw-font-text-medium md:tw-text-left tw-text-center">
                                </h6>
                                <div class="tw-flex tw-flex-wrap -tw-mx-4">
                                    <div
                                        class="tw-basis-full md:tw-basis-12/12 tw-items-center md:tw-items-start md:tw-order-1 tw-order-2 tw-flex tw-flex-col tw-pr-0">
                                        <h3 class=" tw-text-[#133d7c] tw-mt-4 md:tw-ml-8 tw-ml-0 tw-p-0">Kết quả bài
                                            kiểm tra</h3>
                                        <h5
                                            class="tw-text-center md:tw-text-start tw-p-0 tw-mt-1 md:tw-ml-8 !tw-text-[#6c757d]">
                                            Cảm ơn vì đã sử dụng!</h5>
                                        <div class="old-container">
                                            <div
                                                class="tw-flex tw-flex-wrap -tw-mx-4 tw- tw-mt-6 md:tw-ml-8  tw-flex-col tw-justify-between md:tw-justify-start tw-w-full sm:tw-px-0 tw-pl-6">
                                                <div class="tw-basis-full sm:tw-basis-6/12 md:tw-basis-3/12 tw-p-0">
                                                    <div
                                                        class=" tw-justify-center md:tw-justify-start tw-flex tw-flex-row">
                                                        <div
                                                            class=" tw-w-[2.8em] tw-h-[2.8em] lg:tw-w-[2.3em] lg:tw-h-[2.3em] xl:tw-w-[2.5em] xl:tw-h-[2.5em] 2xl:tw-w-[3em] 2xl:tw-h-[3em] tw-rounded-[10px] tw-mt-2 tw-border-0 tw-shadow-md tw-flex tw-flex-row tw-justify-center tw-items-center tw-relative tw-flex tw-flex-col tw-min-w-0 tw-break-word  tw-bg-clip-border tw-border tw-border-black tw-border-opacity-10">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
                                                                width="1.6rem" height="1.6rem" fill="currentColor">
                                                                <path
                                                                    d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0">
                                                                </path>
                                                                <path
                                                                    d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z">
                                                                </path>
                                                            </svg>
                                                        </div>
                                                        <div class="tw-ml-3">
                                                            <h4 class="tw-font-text-bold tw-p-0 tw-my-2">${this.getAttribute('numCorrectAns')}</h4>
                                                            <p class="tw-font-text-bold -tw-mt-2 tw-text-[#6c757d]">
                                                                Câu trả lời đúng</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="tw-basis-full sm:tw-basis-6/12 md:tw-basis-3/12 tw-p-0">
                                                    <div
                                                        class="tw-justify-center md:tw-justify-start tw-flex tw-flex-row">
                                                        <div
                                                            class="tw-w-[2.8em] tw-h-[2.8em] lg:tw-w-[2.3em] lg:tw-h-[2.3em] xl:tw-w-[2.5em] xl:tw-h-[2.5em] 2xl:tw-w-[3em] 2xl:tw-h-[3em] tw-rounded-[10px] tw-mt-2 tw-border-0 tw-shadow-md tw-flex tw-flex-row tw-justify-center tw-items-center tw-relative tw-flex tw-flex-col tw-min-w-0 tw-break-word  tw-bg-clip-border tw-border tw-border-black tw-border-opacity-10">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
                                                                width="1.6rem" height="1.6rem" fill="currentColor">
                                                                <path
                                                                    d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16">
                                                                </path>
                                                                <path
                                                                    d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708">
                                                                </path>
                                                            </svg>
                                                        </div>
                                                        <div class="tw-ml-3">
                                                            <h4 class="tw-font-text-bold tw-p-0 tw-mt-2 tw-mb-0"
                                                                style="color: #FF0000;">
                                                                ${this.getAttribute('numInCorrectAns')}</h4>
                                                            <p class="tw-font-text-bold tw-mt--2 tw-text-[#6c757d]"
                                                                style="color: #FF0000;">
                                                                Câu trả lời sai</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="tw-flex tw-justify-between tw-w-[90%] ">
                                            <div
                                                class="tw-flex tw-flex-row tw-items-center tw-cursor-pointer tw-mb-8 tw-mt-6 tw-relative">
                                                <h6 class="tw-p-0 sm:tw-ml-8 tw-ml-4 tw-self-center">Xem lời giải</h6>
                                                <button
                                                    class="tw-self-center tw-mb-1 tw-p-1 tw-bg-transparent tw-border-0"
                                                    id="btnGroupDrop1" data-toggle="dropdown" aria-haspopup="true"
                                                    aria-expanded="false"><img src="/assets/icons/chevron-right.png"
                                                        alt="" class="tw-chevronRight"></button><label for="result"
                                                    class=" tw-top-0 tw-left-0 !tw-p-0 tw-z-[5] tw-cursor-pointer tw-w-full tw-h-full tw-inline-block tw-text-[#212529] tw-text-center tw-align-middle tw-font-normal tw-text-base tw-leading-6 tw-rounded-[.25rem] tw-transition-all tw-duration-[.15s] tw-ease-in-out tw-absolute"></label>
                                            </div><button
                                                class="tw-rounded-[.25rem] tw-bg-primary tw-text-white hover:tw-bg-[#0a377e] tw-border-0 tw-py-[.375rem] tw-px-3 tw-h-12 tw-mt-5" onclick="JAVASCRIPT:window.location.href='/'">Tiếp tục</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                class=" tw-hidden peer-checked:tw-block tw-mx-3 tw-mt--2 tw-rounded-b-[15px] !tw-bg-white tw-border tw-border-solid tw-border-[#849adb2f] peer-checked:tw-max-h-[500vh] ">
                                <div class="tw-w-full tw-bg-[#ffd67f15] tw-py-6 tw-px-2" id="listResultQuestion">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </main>`
    }
}
customElements.define("result-box", TestResultBox)