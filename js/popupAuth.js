class PopupAuth{
    constructor(popupOpen, popupClose) {
        this.popupOpen = popupOpen
        this.popupClose = popupClose

        this.popupOpen
        document.querySelector('.main__button_auth')
            .addEventListener('click', this.open);

        this.popupClose
        document.querySelector('#close')
            .addEventListener('click', this.close);

    }
    open() {
        popupAuth.classList.add('popup_is-opened')

    }
    close() {
        popupAuth.classList.remove('popup_is-opened')

    }

}
const popupSecond = new PopupAuth(document.querySelector(".popup__auth"))