'use strict';

import "@babel/polyfill";
import elementClosest from 'element-closest';
import 'nodelist-foreach-polyfill';
import 'classlist-polyfill';
import 'promise-polyfill';
import 'whatwg-fetch';
import 'formdata-polyfill';


//полифил для remove
if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function() {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
};
//полифил для prepend
(function(arr) {
    arr.forEach(function(item) {
        if (item.hasOwnProperty('prepend')) {
            return;
        }
        Object.defineProperty(item, 'prepend', {
            configurable: true,
            enumerable: true,
            writable: true,
            value: function prepend() {
                var argArr = Array.prototype.slice.call(arguments),
                    docFrag = document.createDocumentFragment();

                argArr.forEach(function(argItem) {
                    var isNode = argItem instanceof Node;
                    docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
                });

                this.insertBefore(docFrag, this.firstChild);
            }
        });
    });
})([Element.prototype, Document.prototype, DocumentFragment.prototype]);
//Полифил для append
(function(arr) {
    arr.forEach(function(item) {
        if (item.hasOwnProperty('append')) {
            return;
        }
        Object.defineProperty(item, 'append', {
            configurable: true,
            enumerable: true,
            writable: true,
            value: function append() {
                var argArr = Array.prototype.slice.call(arguments),
                    docFrag = document.createDocumentFragment();

                argArr.forEach(function(argItem) {
                    var isNode = argItem instanceof Node;
                    docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
                });

                this.appendChild(docFrag);
            }
        });
    });
})([Element.prototype, Document.prototype, DocumentFragment.prototype]);
//полифил для forEach
if ('NodeList' in window && !NodeList.prototype.forEach) {
    console.info('polyfill for IE11');
    NodeList.prototype.forEach = function(callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}
//полифил для getBoundingClientRect
Element.prototype._getBoundingClientRect = Element.prototype.getBoundingClientRect
Element.prototype.getBoundingClientRect = function() {
    const rect = Element.prototype._getBoundingClientRect.call(this)
    rect.x = rect.left
    rect.y = rect.top
    return rect
}
elementClosest(window);
import clickEventListener from './modules/click';
import adaptMenu from './modules/adaptMenu';
import { inputPhone } from './modules/input';
import mouseListener from "./modules/mouse";
import { mobileFormula } from "./modules/mobileFormula";
import { changeRepairType } from "./modules/repairType";
import { portfolioLoad } from "./modules/portfolio";
import { prepairPopupPortfolio } from "./modules/popupPortfolio";
import { prepairTransparency } from "./modules/transparency";
import { prepairProblem } from "./modules/problems";
import { prepairDesign } from "./modules/design";
import { prepairCheme } from "./modules/scheme";
import { prepairAccordion } from "./modules/accordion";
import { prepairPartners } from "./modules/partners";
import { prepairButtonSend } from "./modules/sendForm";
import { prepairRepair } from "./modules/popupRepair";

clickEventListener();
adaptMenu();
inputPhone();
mouseListener();
mobileFormula();
changeRepairType(document.querySelector('.repair-types-nav__item-1'));
portfolioLoad();
prepairPopupPortfolio();
prepairTransparency();
prepairProblem();
prepairDesign();
prepairCheme();
prepairAccordion();
prepairPartners();
prepairButtonSend();
prepairRepair();