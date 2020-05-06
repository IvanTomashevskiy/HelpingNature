const popupOpenReg = document.querySelector('.main__button_reg')
const popupButtonClose = document.querySelector('.popup__close')
const popupReg = document.querySelector('.popup__reg')

const popupOpenAuth = document.querySelector('.main__button_auth')
const popupAuth = document.querySelector('.popup__auth')


const accItem = document.getElementsByClassName('accordion__item');
const accHD = document.getElementsByClassName('accordion__heading');
    for (i = 0; i < accHD.length; i++) {
        accHD[i].addEventListener('click', toggleItem, false);
    }
    function toggleItem() {
        const itemClass = this.parentNode.className;
        for (i = 0; i < accItem.length; i++) {
            accItem[i].className = 'accordion__item close';
        }
        if (itemClass == 'accordion__item close') {
            this.parentNode.className = 'accordion__item open';
        }
    }