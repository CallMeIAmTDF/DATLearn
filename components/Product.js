class Product extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `<div class="con-image " pid="${this.getAttribute('pid')}">
        <img class="img" src="${this.getAttribute('img')}" alt="">
        <img class="bg" src="${this.getAttribute('img')}" alt="">
        </div>
        <div class="con-text">
        <h3>
        ${this.getAttribute('pname')}
        </h3>
        <p>
            DATLearn Shop
        </p>
        </div>
        <div class="con-price">
        ${this.getAttribute('price')} DATs
        </div>
        <div class="con-btn">
        <div class="con-input-btns ">
            <Button onclick="plusLess(event, 'less')" class="less">
                <i class='bx bx-minus' ></i>
            </Button>
            <input value="1" type="text">
            <Button onclick="plusLess(event, 'plus')" class="plus">
                <i class='bx bx-plus'></i>
            </Button>
        </div>
        
        </div>
        <Button onclick="handleAdd(event)" class="add">
            Đổi Sản Phẩm Này
        </Button>
        `
    }
}
customElements.define("product-card", Product)