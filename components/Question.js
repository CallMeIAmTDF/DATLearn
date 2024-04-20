
class Question extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `
                <div class="question ${this.getAttribute('hide')}">
                <flash-card
                    endesc="${this.getAttribute('endesc')}"
                    viedesc="${this.getAttribute('viedesc')}"
                    pronun="${this.getAttribute('pronun')}" 
                    word="${this.getAttribute('word')}"
                    entype="${this.getAttribute('entype')}"
                    img="${this.getAttribute('photo')}" mean="${this.getAttribute('meaning')}" class="hide" voice="${this.getAttribute('voice')}"  wid="${this.getAttribute('wid')}">
                </flash-card>
                <multiple-choice class="${this.getAttribute('random') !== '1' ? 'hide' : ''}"
                    A="${this.getAttribute('A')}" 
                    B="${this.getAttribute('B')}" 
                    C="${this.getAttribute('C')}" 
                    D="${this.getAttribute('D')}"
                    question="${this.getAttribute('endesc')}"
                    answer="${this.getAttribute('word')}"  wid="${this.getAttribute('wid')}">
                </multiple-choice>
                <pronun-mean answer="${this.getAttribute('word')}" pronun="${this.getAttribute('pronun')}" mean="${this.getAttribute('meaning')}" class="${this.getAttribute('random') !== '2' ? 'hide' : ''}"  wid="${this.getAttribute('wid')}"></pronun-mean>
                <voice-mean answer="${this.getAttribute('word')}" pronun="${this.getAttribute('pronun')}" mean="${this.getAttribute('meaning')}"  class="${this.getAttribute('random') !== '3' ? 'hide' : ''}"  wid="${this.getAttribute('wid')}"
                voice="${this.getAttribute('voice')}"></voice-mean>
                <multiple-choice class="${this.getAttribute('random') !== '4' ? 'hide' : ''}"
                    A="${this.getAttribute('A')}" 
                    B="${this.getAttribute('B')}" 
                    C="${this.getAttribute('C')}" 
                    D="${this.getAttribute('D')}"
                    question="${this.getAttribute('viedesc')}"
                    answer="${this.getAttribute('word')}" wid="${this.getAttribute('wid')}">
                </multiple-choice>
                </div>
        `
    }
}
customElements.define("question-card", Question)