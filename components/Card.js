class Card extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `
        <a class="hover:tw-no-underline" href="./category.html?lid=${this.getAttribute('lid')}">
        <div
            class="CategoryItem_bookItem__eh0Fx tw-gap-4 [&amp;_h3]:hover:tw-text-purple lg:tw-gap-6 !tw-p-4 lg:!tw-p-6 tw-bg-blue-light-3 tw-relative tw-transition-all tw-blur-0 tw-border-0 tw-duration-[250ms] tw-flex tw-rounded-3xl tw-flex-col tw-flex-nowrap ">
            <div class="tw-flex tw-gap-6"><img
                    class="tw-shadow-[0_.125rem_.25rem_rgba(0,0,0,.075)] tw-rounded-[5px] tw-w-[110px] tw-h-[165px] "
                    width="110" height="165" src="https://i.imgur.com/${this.getAttribute('level').split('thaidang')[1]}" alt="${this.getAttribute('level').split('thaidang')[0]}">
                <div class=" tw-text-left tw-flex tw-flex-col tw-gap-4 lg:tw-gap-0 lg:tw-justify-between">
                    <h3 class="tw-font-text-bold tw-text-black-1 tw-m-0 tw-text-lg tw-transition-all tw-duration-300">
                    ${this.getAttribute('level').split('thaidang')[0]}</h3>
                    <p
                        class="tw-text-[#6c757d] tw-mb-0 tw-mt-[-9px] tw-overflow-hidden tw-font-text-medium tw-text-sm tw-font-normal CategoryItem_description__byxhk">
                        Tại đây bạn sẽ tìm thấy ${this.getAttribute('topic')} bài học được phân loại theo chủ đề, độ khó và cách sử dụng theo CEFR. Đây là bước thứ ${this.getAttribute('step')} trong hành trình học từ vựng của bạn.</p>
                    <div class="!tw-hidden lg:!tw-flex tw-w-full tw-items-center tw-gap-3">
                        <div class="tw-h-2 tw-rounded-full tw-w-full tw-bg-blue-light-1">
                            <div class="tw-h-full tw-rounded-[inherit] tw-bg-green" style="width: ${parseFloat(this.getAttribute('progress')).toFixed(2)}%;"></div>
                        </div>
                        <p class=" tw-text-gray-58 tw-text-sm tw-font-text-medium tw-mb-0 ">${parseFloat(this.getAttribute('progress')).toFixed(2)}%</p>
                    </div>
                </div>
            </div>
            <div class="tw-flex lg:tw-gap-0 tw-justify-between">
                <div class="tw-flex tw-gap-3 tw-items-center">
                    <div class="tw-flex tw-items-center tw-gap-1"><img width="20" height="20"
                            src="./assets/icons/book-disable.svg" alt="book">
                        <p class=" tw-flex tw-gap-1 tw-m-0 tw-text-black-2 tw-text-xs sm:tw-text-sm tw-font-text-reqular">
                            <span class="tw-font-text-medium">${this.getAttribute('topic')}</span> <span class="xs:tw-hidden"> l </span> <span
                                class="tw-hidden xs:tw-block"> lessons</span>
                        </p>
                    </div>
                    <div class="tw-flex tw-items-center tw-gap-1"><img width="20" height="20"
                            src="/assets/icons/note-2-disable.svg" alt="note">
                        <p class="tw-flex tw-gap-1 tw-m-0 tw-text-black-2 tw-text-xs sm:tw-text-sm tw-font-text-reqular">
                            <span class="tw-font-text-medium">${this.getAttribute('word')}</span> <span class="xs:tw-hidden"> w </span> <span
                                class="tw-hidden xs:tw-block"> words</span>
                        </p>
                    </div>
                </div>
                <div
                    class="tw-text-blue-1 tw-text-sm tw-font-text-medium hover:tw-no-underline hover:tw-text-blue-1 tw-px-4 tw-py-2 tw-rounded-3xl hover:tw-bg-blue-light-1 tw-transition-all tw-duration-300 ">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right"
                        class="svg-inline--fa fa-arrow-right " role="img" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512">
                        <path fill="currentColor"
                            d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z">
                        </path>
                    </svg>
                </div>
            </div>
        </div>
    </a>
		`
    }

}
customElements.define("level-card", Card)