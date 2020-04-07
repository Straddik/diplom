import { arrowRight, arrowLeft, arrowMobileLeft, arrowMobileRight } from "./portfolio";

const appearanceRightArrow = () => {
    if (!portfolio.firstElementChild.classList.contains('3') && !portfolio.firstElementChild.classList.contains('4') && !portfolio.firstElementChild.classList.contains('5') && (screen.width > 1024)) {
        arrowRight.style.display = 'flex';
    } else if (!portfolio.firstElementChild.classList.contains('4') && !portfolio.firstElementChild.classList.contains('5') && (screen.width > 575)) {
        arrowRight.style.display = 'flex';
    } else if (!portfolio.firstElementChild.classList.contains('5') && (screen.width > 575)) {
        arrowRight.style.display = 'flex';
    } else if (screen.width < 576) {
        arrowRight.style.display = 'none';
        arrowLeft.style.display = 'none';
    }
};
const portfolio = document.querySelector('.portfolio-slider');
const portfolioMobile = document.querySelector('.portfolio-slider-mobile');
const transparencyMobile = document.getElementById('transparency').children[0].children[3].children[0];
const menu = document.querySelector('.popup-dialog-menu');
const adaptMenu = () => {
    window.addEventListener('resize', () => {
        //В блоке портфолио показ или исчезновение стрелок при адаптации
        if (screen.width <= 575) {
            arrowLeft.style.display = 'none';
            arrowRight.style.display = 'none';
            if (!portfolioMobile.firstElementChild.classList.contains('1')) {
                arrowMobileLeft.style.display = 'block';
            };
            if (!portfolioMobile.firstElementChild.classList.contains('10')) {
                arrowMobileRight.style.display = 'block';
            };
        } else if (!portfolio.firstElementChild.classList.contains('1')) {
            arrowLeft.style.display = 'flex';
            arrowMobileLeft.style.display = 'none';
            arrowMobileRight.style.display = 'none';
            appearanceRightArrow();
        } else {
            arrowMobileLeft.style.display = 'none';
            arrowMobileRight.style.display = 'none';
            appearanceRightArrow();
        }
        //Проверка изменения матрицы состояния(преобразование из строки в массив)
        if (window.getComputedStyle(menu).hasAttribute('transform')) {
            if (window.getComputedStyle(menu).transform.split('matrix(')[1].split(', ').map(val => val = +val.split(')')[0])[4] !== 0 ||
                window.getComputedStyle(menu).transform.split('matrix(')[1].split(', ').map(val => val = +val.split(')')[0])[5] !== 0) {
                if (window.innerWidth <= 575) {
                    menu.style.transform = 'translate3d(0,-120vh,0)';
                    menu.parentNode.style.width = '100%';
                } else {
                    menu.style.transform = 'translate3d(645px,0,0)';
                }
            };
        };
        if (screen.width < 1091) {
            transparencyMobile.style.display = 'flex';
            transparencyMobile.style.flexWrap = 'nowrap';
            [...transparencyMobile.children].forEach((item, index) => {
                item.style.flex = "0 0 100%";
            });
        } else {
            transparencyMobile.style.flexWrap = 'wrap';
            [...transparencyMobile.children].forEach((item, index) => {
                item.style.flex = "auto";
            });
        }


    })
};

export default adaptMenu;