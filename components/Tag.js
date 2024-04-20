class Tag extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `
			<div class="tw-w-full tw-relative tw-basis-full lg:tw-basis-1/2">
                <a class="hover:tw-no-underline" href="javascript:window.location.href='/learn.html?topic=${this.getAttribute('topicid')}'" >
                    <div class="tw-w-full !tw-bg-blue-light-3 [&_h1]:hover:tw-text-purple tw-flex tw-flex-col tw-gap-6 tw-flex-nowrap tw-shadow-none tw-border-none tw-p-4 lg:tw-p-6 tw-rounded-3xl">
                        <div class="tw-flex tw-justify-between tw-items-center">
                            <div class="tw-flex tw-gap-4 tw-flex-col">
                                <h3 class="tw-font-text-bold tw-text-black-1 tw-text-base tw-mb-0 tw-transition-all tw-duration-300">
                                    <span class="tw-font-text-large lg:tw-text-lg">
                                        ${this.getAttribute('topic')}
                                    </span>
                                </h3>
                                
                            </div>
                        </div>
                        <div class="tw-flex tw-justify-between tw-items-center">
                            <div class="tw-flex tw-gap-6 tw-w-full tw-relative">
                                <div class=" tw-bg-blue-light-1 tw-w-10 tw-h-10 tw-rounded-full tw-z-20 tw-flex tw-justify-center tw-items-center">
                                    <img width="20" height="20" src="./assets/icons/review-disable.svg" alt="review-disable">
                                </div>
                                <div class=" tw-bg-blue-light-1 tw-w-10 tw-h-10 tw-rounded-full tw-z-20 tw-flex tw-justify-center tw-items-center">
                                    <img width="20" height="20" src="./assets/icons/flashcard-disable.svg" alt="flashcard-disable">
                                </div>
                                <div class=" tw-bg-blue-light-1 tw-w-10 tw-h-10 tw-rounded-full tw-z-20 tw-flex tw-justify-center tw-items-center">
                                    <img width="20" height="20" src="./assets/icons/spelling-disable.svg" alt="spelling-disable">
                                </div>
                                <div class=" tw-bg-blue-light-1 tw-relative tw-w-10 tw-h-10 tw-rounded-full tw-z-20 tw-ml-[-1px] tw-flex tw-justify-center tw-items-center">
                                    <img width="20" height="20" src="./assets/icons/quiz-disable.svg" alt="quiz-disable">
                                    <div class="tw-absolute tw-right-[-9px] tw-top-[-11px]">
                                        <div class="tw-relative">
                                            <img width="24" height="24" src="./assets/icons/grade-star.svg" class="SubcategoryItem_gradeDisable__nglKX tw-w-6 tw-h-6 " alt="star">
                                            <span class="tw-absolute tw-text-white tw-text-xs tw-font-text-bold tw-w-fit tw-h-fit tw-m-auto tw-inset-0">?</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="tw-text-blue-1 tw-text-sm tw-font-text-medium hover:tw-no-underline hover:tw-text-blue-1 tw-px-4 tw-py-2 tw-rounded-3xl hover:tw-bg-blue-light-1 tw-transition-all tw-duration-300 ">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" class="svg-inline--fa fa-arrow-right " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path fill="currentColor" d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z">
                                    </path>
                                </svg>
                            </div>
                            
                        </div>
                        <div class="!tw-hidden lg:!tw-flex tw-w-full tw-items-center tw-gap-3">
                        <div class="tw-h-2 tw-rounded-full tw-w-full tw-bg-blue-light-1">
                            <div class="tw-h-full tw-rounded-[inherit] tw-bg-green" style="width: ${parseFloat(this.getAttribute('progress')).toFixed(2)}%;"></div>
                        </div>
                        <p class=" tw-text-gray-58 tw-text-sm tw-font-text-medium tw-mb-0 ">${parseFloat(this.getAttribute('progress')).toFixed(2)}%</p>
                    </div>
                    </div>
                </a>
            </div>
		`
    }

}
customElements.define("card-item", Tag)