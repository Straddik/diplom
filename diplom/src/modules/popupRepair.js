import { moveLeft, moveRight } from "./moveLeftAndRight";

const repair = document.querySelector('.popup-repair-types');
const buttons = document.querySelector('.nav-list-popup-repair');
const table = document.querySelector('.popup-repair-types-content-table');
const date = document.querySelector('.popup-repair-types-content__head-date');
const switchInner = document.getElementById('switch-inner');
let dataBase, mobileRaw, desctopRaw;

const createElements = (data) => {
    buttons.innerHTML = '';
    dataBase = data;
    date.innerHTML = data[0].date;
    data.filter(item => "title" in item).forEach((item, index) => {
        let button = document.createElement('button');
        button.className = 'button_o popup-repair-types-nav__item';
        button.innerHTML = item.title;
        if (index === 0) {
            button.classList.add('active');
            switchInner.innerHTML = button.innerHTML;
            item.priceList.forEach(i => {
                let copy = mobileRaw.cloneNode(true);
                copy.firstElementChild.innerHTML = i.typeService;
                copy.children[3].innerHTML = i.units;
                copy.children[4].innerHTML = i.cost;
                table.firstElementChild.firstElementChild.appendChild(copy);
            })
        }
        buttons.appendChild(button);
    });

};

export const prepairRepair = () => {
    buttons.innerHTML = '';
    mobileRaw = table.firstElementChild.firstElementChild.firstElementChild;
    desctopRaw = table.firstElementChild.firstElementChild.children[1];
    [...table.children].forEach((item, index) => {
        if (index === 0) {
            item.firstElementChild.innerHTML = '';
        } else {
            item.remove();
        }
    });
};

const postData = (url) => {
    return fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
};

const loadData = () => {
    postData('./db/db.json')
        .then((response) => {
            if (response.status !== 200) {
                throw new Error('status nerwork not 200');
            } else {
                return response.json();
            }
        })
        .then((data) => {
            createElements(data);
        }, )
        .catch((error) => {
            console.error(error);
        });
};

export const popupRepair = () => {
    repair.style.visibility = 'visible';
    loadData();

};

export const closePopupRepair = () => {
    repair.style.visibility = 'hidden';
};

export const changeActive = (button) => {
    [...buttons.children].forEach(item => {
        item.classList.remove('active');
    });
    if (!button.classList.contains('active')) {
        button.classList.add('active');
    };
    switchInner.innerHTML = button.innerHTML;
    [...table.children].forEach((item, index) => {
        item.firstElementChild.innerHTML = '';
    });
    dataBase.filter(item => "title" in item).forEach((item) => {
        if (item.title === button.innerHTML) {
            item.priceList.forEach(i => {
                let copy = mobileRaw.cloneNode(true);
                copy.firstElementChild.innerHTML = i.typeService;
                copy.children[3].innerHTML = i.units;
                copy.children[4].innerHTML = i.cost;
                table.firstElementChild.firstElementChild.appendChild(copy);
            });
        }
    });
};
export const moveNavRepairLeft = () => {
    moveLeft(buttons);
};

export const moveNavRepairRight = () => {
    moveRight(buttons);
};