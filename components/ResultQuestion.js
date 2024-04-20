`<div>
<hr class="tw-block">
<div class="tw-ml-6 tw-mr-6 tw-mb-3 tw-flex tw-flex-col">
    <div class="tw-flex tw-flex-wrap -tw-mx-4 tw-flex-row tw-pt-2">
        <div class="tw-basis-full sm:tw-basis-6/12 tw-px-4">
            <div class="tw-flex tw-items-baseline"><span
                    class="tw-text-lg tw-text-black tw-my-0 tw-mr-2 tw-font-text-bold">3.</span><span
                    class="tw-text-sm tw-text-[#004D40] tw-my-0 tw-mr-2 tw-font-text-medium">Đáp án đúng:</span><span>
                    <div
                        class=" !tw-text-[#00BFA5] tw-text-[15px] tw-my-0 tw-font-text-medium">
                        sorry</div>
                </span></div>
        </div>
        <div class="tw-basis-full sm:tw-basis-6/12 tw-px-4">
            <div><span
                    class="tw-text-sm !tw-text-[#880E4F] tw-pt-1 tw-my-0 tw-mr-2 tw-font-text-medium">Đáp
                    án của bạn:</span><span
                    class="!tw-text-[#EC407A] tw-text-[15px] tw-line-through tw-my-0 tw-font-text-medium">hi</span>
            </div>
        </div>
    </div>
    <div class="tw-mt-2"><span class="tw-text-base tw-text-[#6c757d] ">a word we
            say to apologize for something or to say we are embarrassed</span>
    </div>
    <p
        class="tw-mt-2 tw-mb-1 tw-text-primary tw-inline-block tw-font-bold tw-leading-4 tw-whitespace-nowrap tw-text-center tw-align-baseline tw-transition-all tw-ease-in-out tw-duration-[.15s] tw-rounded-[10rem] tw-bg-[#e9ecef6e] tw-px-4 tw-py-2 tw-self-end">
        Câu hỏi trắc nghiệm</p>
</div>
</div>`



class ResultQuestion extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `<div>
        <hr class="tw-block">
        <div class="tw-ml-6 tw-mr-6 tw-mb-3 tw-flex tw-flex-col">
            <div class="tw-flex tw-flex-wrap -tw-mx-4 tw-flex-row tw-pt-2">
                <div class="tw-basis-full sm:tw-basis-6/12 tw-px-4">
                    <div class="tw-flex tw-items-baseline"><span
                            class="tw-text-lg tw-text-black tw-my-0 tw-mr-2 tw-font-text-bold">${this.getAttribute('quesNum')}.</span><span
                            class="tw-text-sm tw-text-[#004D40] tw-my-0 tw-mr-2 tw-font-text-medium">Đáp án đúng:</span><span>
                            <div
                                class=" !tw-text-[#00BFA5] tw-text-[15px] tw-my-0 tw-font-text-medium">
                                ${this.getAttribute('Ans')}</div>
                        </span></div>
                </div>
                <div class="tw-basis-full sm:tw-basis-6/12 tw-px-4">
                    <div><span
                            class="tw-text-sm !tw-text-[#880E4F] tw-pt-1 tw-my-0 tw-mr-2 tw-font-text-medium">Đáp
                            án của bạn:</span><span
                            class="!tw-text-[#EC407A] tw-text-[15px] ${this.getAttribute('isTrue') == 1 ? '' : 'tw-line-through'} tw-my-0 tw-font-text-medium">${this.getAttribute('yourAns')}</span>
                    </div>
                </div>
            </div>
            <div class="tw-mt-2"><span class="tw-text-base tw-text-[#6c757d] "><b><u>Câu hỏi:</u></b>${this.getAttribute('ques')}</span>
            </div>
            <p
                class="tw-mt-2 tw-mb-1 tw-text-primary tw-inline-block tw-font-bold tw-leading-4 tw-whitespace-nowrap tw-text-center tw-align-baseline tw-transition-all tw-ease-in-out tw-duration-[.15s] tw-rounded-[10rem] tw-bg-[#e9ecef6e] tw-px-4 tw-py-2 tw-self-end">
                Câu hỏi trắc nghiệm</p>
        </div>
        </div>`
    }
}
customElements.define("result-question", ResultQuestion)