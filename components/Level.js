class Level extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `
                <div>
                    <div class="container">
                        <div class="tw-flex tw-leading-6 !tw-block"><img src="./assets/svgs/pattern.svg"
                                class="tw-absolute tw-left-0 tw-hidden 2xl:tw-block" alt="pattern">
                            <div
                                class="tw-flex tw-justify-between tw-gap-6 tw-flex-col-reverse lg:tw-flex-row  tw-items-center tw-mb-14 sm:tw-mb-16 lg:tw-mb-20">
                                <div
                                    class="lg:tw-w-[60%] tw-items-center lg:tw-items-start tw-flex tw-flex-col tw-gap-4 lg:tw-gap-6">
                                    <h1
                                        class="tw-text-center tw-text-black-1 tw-text-lg sm:tw-text-2xl lg:tw-text-4xl sm:tw-text-left tw-my-0 tw-font-text-semibold">
                                        ${this.getAttribute('level').split('thaidang')[0]}</h1>
                                    <div class="tw-text-sm sm:tw-text-base tw-text-black-2 tw-font-text-medium tw-self-start ">
                                    Danh sách từ vựng ${this.getAttribute('level').split('thaidang')[0]} bao gồm ${this.getAttribute('topic')} bài học được phân loại theo chủ đề, độ khó và cách sử dụng theo CEFR. Đây là bước thứ ${this.getAttribute('step')} trong việc học từ vựng của bạn.</div>
                                    <div class="tw-flex tw-gap-4 tw-items-center">
                                        <div class="tw-flex tw-items-center tw-gap-[6px]"><img width="20" height="20"
                                                src="./assets/icons/book-disable.svg" alt="book">
                                            <p class="tw-m-0 tw-text-black-2 tw-text-xs sm:tw-text-sm tw-font-text-regular">
                                                <span class="tw-font-text-medium">${this.getAttribute('topic')}</span> lessons </p>
                                        </div>
                                        <div class="tw-flex tw-items-center tw-gap-[6px]"><img width="20" height="20"
                                                src="./assets/icons/note-2-disable.svg" alt="note">
                                            <p class="tw-m-0 tw-text-black-2 tw-text-xs sm:tw-text-sm tw-font-text-regular">
                                                <span class="tw-font-text-medium">${this.getAttribute('word')}</span> words</p>
                                        </div>
                                    </div>
                                </div>
                                <div class=" tw-w-[150px] sm:tw-w-[200px] tw-text-center sm:tw-text-start tw-mr-14"><img
                                        class="tw-shadow-[0_0.25rem_0.5rem_rgba(0,0,0,0.1)] tw-mt-6 tw-w-full tw-h-auto "
                                        src="https://i.imgur.com/${this.getAttribute('level').split('thaidang')[1]}" width="200" height="300"
                                        alt="${this.getAttribute('level').split('thaidang')[0]}"></div>
                            </div>
                        </div>
                    </div>
                </div>
        `
    }
}
customElements.define("level-header", Level)