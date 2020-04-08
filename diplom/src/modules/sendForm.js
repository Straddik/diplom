const checkbox = document.querySelectorAll('.checkbox__label');
const popupThank = document.querySelector('.popup-thank');
const reg = new RegExp('^\\+7\\s\\(\\d\\d\\d\\)\\d\\d\\d-\\d\\d-\\d\\d');

const postData = (data, url) => {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    })
};

const applyStyle = () => {
    const style = document.createElement('style');
    style.textContent = `
    input.error {
        border: 2px solid red;
    }
    input {
        border: none;
    }
    `
    document.head.appendChild(style);
};

export const prepairButtonSend = () => {
    applyStyle();
    checkbox.forEach(item => {
        item.parentNode.previousElementSibling.disabled = true;
    })
};

export const changeCheckbox = (elem) => {
    if (!elem.previousElementSibling.getAttribute('checked')) {
        elem.previousElementSibling.setAttribute('checked', `${!Boolean(elem.previousElementSibling.getAttribute('checked'))}`);
        elem.parentNode.previousElementSibling.disabled = false;
    } else {
        elem.previousElementSibling.removeAttribute('checked');
        elem.parentNode.previousElementSibling.disabled = true;
    };
};
export const activateRecall = (elem) => {
    if (!elem.hasAttribute('disabled')) {
        const formData = new FormData(elem.closest('form'));
        let body = {};
        formData.forEach((val, key) => {
            body[key] = val;
        });
        [...elem.closest('form').elements].forEach(item => {
            if (item.name === "phone") {
                if (reg.test(item.value)) {
                    item.classList.remove('error');
                    postData(body, './server.php')
                        .then((response) => {
                            if (response.status !== 200) {
                                throw new Error('status nerwork not 200');
                            }
                        })
                        .then(() => {
                            //Очистка inputов
                            [...elem.closest('form').elements].forEach(item => {
                                item.value = '';
                            });
                            popupThank.style.visibility = 'visible';
                            elem.nextElementSibling.firstElementChild.setAttribute('checked', `${!Boolean(elem.nextElementSibling.firstElementChild.getAttribute('checked'))}`);
                        }, )
                        .catch((error) => {
                            console.error(error);
                        });
                } else {
                    item.classList.add('error');
                }
            };
        });


    };
};

export const closePopupThank = () => {
    popupThank.style.visibility = 'hidden';
}