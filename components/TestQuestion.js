`
<div class="question">
                        <p>1. What is the capital of France?</p>
                        <div class="answers">
                            <label>
                                <input type="radio" name="q1" value="a">
                                Paris
                            </label>
                            <label>
                                <input type="radio" name="q1" value="b">
                                Madrid
                            </label>
                            <label>
                                <input type="radio" name="q1" value="c">
                                London
                            </label>
                            <label>
                                <input type="radio" name="q1" value="d">
                                Rome
                            </label>
                        </div>
                    </div>
`
class TestQuestion extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `
                            <div class="question">
                                <p>${this.getAttribute('question')}</p>
                                <div class="answers">
                                    <label>
                                        <input type="radio" name="${this.getAttribute('name')}" value="${this.getAttribute('A')}">
                                        ${this.getAttribute('A')}
                                    </label>
                                    <label>
                                        <input type="radio" name="${this.getAttribute('name')}" value="${this.getAttribute('B')}">
                                        ${this.getAttribute('B')}
                                    </label>
                                    <label>
                                        <input type="radio" name="${this.getAttribute('name')}" value="${this.getAttribute('C')}">
                                        ${this.getAttribute('C')}
                                    </label>
                                    <label>
                                        <input type="radio" name="${this.getAttribute('name')}" value="${this.getAttribute('D')}">
                                        ${this.getAttribute('D')}
                                    </label>
                                </div>
                            </div>
        `
    }

}
customElements.define("test-question", TestQuestion)