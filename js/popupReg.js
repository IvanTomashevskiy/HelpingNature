class Popup {
    constructor(popupOpen, popupClose) {
        this.popupOpen = popupOpen
        this.popupClose = popupClose

        this.popupOpen
        document.querySelector('.main__button_reg')
            .addEventListener('click', this.open);

        this.popupClose
        document.querySelector('.popup__close')
            .addEventListener('click', this.close);

    }
    open() {
        popupReg.classList.add('popup_is-opened')

    }
    close() {
        popupReg.classList.remove('popup_is-opened')

    }

}
const popupFirst = new Popup(document.querySelector(".popup__reg"))