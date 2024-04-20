class RewardForm extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `<form>
            <table>
                <tr style="height:10px">
                    <td colspan="2"
                        style="text-align:center; font-weight:bold; font-size:40px; padding:20px; color:rgb(66, 108, 110)">
                        THÔNG
                        TIN ĐƠN HÀNG</td>
                </tr>
                <tr>
                    <td>
                        <i><strong>Tên sản phẩm: </strong></i>
                    </td>
                    <td>  ${this.getAttribute('pname')}</td>
                </tr>
                <tr>
                    <td>
                        <i><strong>Số lượng:</strong></i>
                    </td>
                    <td id="quantityBox">
                    <button class="plusLess" type="button" style="font-size: 35px;">-</button>
                    <input type="text" class="numQuantity" value="${this.getAttribute('pquantity')}" style="width:15px;" min=1 id="numQuantity">
                    <button class="plusLess" type="button" style="font-size: 20px;">+</button>
                    </td>
                </tr>
                <tr>
                    <td><i><strong>Giá/Sản phẩm: </strong></i></td>
                    <td>${this.getAttribute('price')} DATs</td>
                </tr>
                <tr>
        <td><i><strong>Số điện thoại</strong></i></td>
        <td><input type="text" class="txtPhone" id="txtPhone" name="txtPhone" placeholder="SDT" style="width:100%"></td>
    </tr>
                <tr>
                    <td><i><strong>Địa chỉ</strong></i></td>
                    <td><textarea name="txtAddress" class="txtAddress" id="txtAddress" style="width:100%" rows=1
                        placeholder="Địa chỉ"></textarea></td>
                </tr>
                <tr>
                <td colspan="2" style="text-align: center;">
                <button type="submit" class="submit">Xác Nhận</button>
                <button type="button" id="closeForm">Đóng</button>
            </td>
                </tr>
            </table>
        </form> `
    }
}
customElements.define("reward-form", RewardForm)