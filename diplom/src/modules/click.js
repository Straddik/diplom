'use strict';

import listPhone from "./listPhone";
import { popupMenu } from "./popupMenu";
import { closePopupMenu } from "./popupMenu";
import scrollIt from "./scrollIt";
import { closePopupRepair, changeActive, moveNavRepairLeft, moveNavRepairRight, popupRepair } from "./popupRepair";
import { popupPrivacy } from "./popupPrivacy";
import { closePrivacy } from "./popupPrivacy";
import { moveFormulaRight, moveFormulaLeft } from "./mobileFormula";
import { changeRepairType, moveRepairLeft, moveRepairRight, moveRepairMobileLeft, moveRepairMobileRight } from "./repairType";
import { movePortfolioLeft, movePortfolioRight, movePortfolioMobileLeft, movePortfolioMobileRight } from "./portfolio";
import { openPopupPortfolio, closePopupPortfolio, moveRightPopupPortfolio, moveLeftPopupPortfolio } from "./popupPortfolio";
import { moveTransparencyMobileLeft, moveTransparencyMobileRight, popupTransparency, closeTransparency, moveTransparencyPopupLeft, moveTransparencyPopupRight } from "./transparency";
import { moveProblemMobileLeft, moveProblemMobileRight } from "./problems";
import { openDesignSlider, changeDesignSlider, moveNavDesignLeft, moveNavDesignRight, popupDesign, closePopupDesign, movePopupDesignSliderLeft, movePopupDesignSliderRight } from "./design";
import { moveReviewLeft, moveReviewRight, openPopupConsult, closePopupConsult } from "./review";
import { switchScheme } from "./scheme";
import { activeAccordion } from "./accordion";
import { movePartnersLeft, movePartnersRight } from "./partners";
import { changeCheckbox, activateRecall, closePopupThank } from "./sendForm";

const clickEventListener = () => {
    const body = document.querySelector('body');
    body.addEventListener('click', (e) => {
        e.preventDefault();
        const target = e.target;
        if (target.closest('.header-contacts__arrow')) {
            listPhone();
        } else if (target.closest('.menu__icon')) {
            popupMenu();
        } else if (target.closest('.popup-menu-nav__item')) {
            scrollIt(target, 'down');
            closePopupMenu();
        } else if (target.closest('.menu-link')) {
            popupRepair();
            closePopupMenu();
        } else if (target.closest('.link-list-repair')) {
            popupRepair();
        } else if (target.closest('.button-footer')) {
            if (target.classList.contains('button-footer')) {
                scrollIt(target.childNodes[0], 'up');
            } else {
                scrollIt(target, 'up');
            };
        } else if (target.closest('.link-privacy')) {
            popupPrivacy();
        } else if (target.classList.contains('popup-privacy')) {
            closePrivacy();
        } else if (target.closest('#formula-arrow_right')) {
            moveFormulaRight();
        } else if (target.closest('#formula-arrow_left')) {
            moveFormulaLeft();
        } else if (target.closest('.repair-types-nav__item')) {
            changeRepairType(e.target);
        } else if (target.closest('#repair-types-arrow_left')) {
            moveRepairLeft();
        } else if (target.closest('#repair-types-arrow_right')) {
            moveRepairRight();
        } else if (target.closest('#nav-arrow-repair-left_base')) {
            moveRepairMobileLeft();
        } else if (target.closest('#nav-arrow-repair-right_base')) {
            moveRepairMobileRight();
        } else if (target.closest('#portfolio-arrow_left')) {
            movePortfolioLeft();
        } else if (target.closest('#portfolio-arrow_right')) {
            movePortfolioRight();
        } else if (target.closest('#popup_portfolio_left')) {
            moveLeftPopupPortfolio();
        } else if (target.closest('#popup_portfolio_right')) {
            moveRightPopupPortfolio();
        } else if (target.closest('#transparency-arrow_left')) {
            moveTransparencyMobileLeft();
        } else if (target.closest('#transparency-arrow_right')) {
            moveTransparencyMobileRight();
        } else if (target.closest('#transparency_left')) {
            moveTransparencyPopupLeft();
        } else if (target.closest('#transparency_right')) {
            moveTransparencyPopupRight();
        } else if (target.closest('#problems-arrow_left')) {
            moveProblemMobileLeft(target.closest('#problems-arrow_left').parentNode);
        } else if (target.closest('#problems-arrow_right')) {
            moveProblemMobileRight(target.closest('#problems-arrow_right').parentNode);
        } else if (target.closest('#reviews-arrow_left')) {
            moveReviewLeft();
        } else if (target.closest('#reviews-arrow_right')) {
            moveReviewRight();
        } else if (target.closest('#problems-arrow_right')) {
            moveProblemMobileRight(target.closest('#problems-arrow_right').parentNode);
        } else if (target.closest('#nav-arrow-popup-repair_left')) {
            moveNavRepairLeft();
        } else if (target.closest('#nav-arrow-popup-repair_right')) {
            moveNavRepairRight();
        } else if (target.closest('.close') && target.closest('.popup-transparency')) {
            closeTransparency();
        } else if (target.closest('#portfolio-arrow-mobile_left')) {
            movePortfolioMobileLeft();
        } else if (target.closest('.portfolio-slider__slide')) {
            openPopupPortfolio(target);
        } else if (target.closest('#portfolio-arrow-mobile_right')) {
            movePortfolioMobileRight();
        } else if (target.closest('.transparency-item__img')) {
            popupTransparency(target);
        } else if (target.closest('.designs-nav__item')) {
            openDesignSlider(target);
        } else if (target.closest('.link-list-designs') && target.closest('a')) {
            popupDesign();
        } else if (target.closest('.popup-design') && target.closest('.close')) {
            closePopupDesign();
        } else if (target.closest('#nav-arrow-designs_left')) {
            moveNavDesignLeft();
        } else if (target.closest('#nav-arrow-designs_right')) {
            moveNavDesignRight();
        } else if (target.closest('#popup_design_left')) {
            movePopupDesignSliderLeft();
        } else if (target.closest('#popup_design_right')) {
            movePopupDesignSliderRight();
        } else if (target.closest('.scheme-nav__item')) {
            switchScheme(target.closest('.scheme-nav__item'));
        } else if (target.closest('.title_block ')) {
            activeAccordion(target.closest('.title_block '));
        } else if (target.closest('#partners-arrow_left')) {
            movePartnersLeft();
        } else if (target.closest('#partners-arrow_right')) {
            movePartnersRight();
        } else if (target.closest('.button_wide')) {
            openPopupConsult();
        } else if (target.closest('.popup-repair-types-nav__item')) {
            changeActive(target);
        } else if (target.hasAttribute('name')) {
            if (target.getAttribute('name') === 'phone' && !target.closest('.done')) {
                target.setSelectionRange(4, 4);
                target.classList.add('done');
            }
        } else if (target.closest('.checkbox__label')) {
            changeCheckbox(target.closest('.checkbox__label'));
        } else if (target.closest('button') && (target.closest('.feedback__form') || target.closest('.feedback-block__form'))) {
            activateRecall(target);
        } else if (target.closest('.popup-consultation') && target.closest('.close') || target.closest('.popup-consultation') && !target.closest('.feedback-wrap')) {
            closePopupConsult();
        } else if (target.closest('.popup-thank') && target.closest('.close') || target.closest('.popup-thank') && !target.closest('.popup-thank-bg')) {
            closePopupThank();
        } else if (target.closest('.preview-block__item')) {
            changeDesignSlider(target.closest('.preview-block__item'));
        } else if (!target.closest('.popup-dialog-portfolio') && target.closest('.popup-portfolio')) {
            closePopupPortfolio();
        } else if (target.closest('.popup-menu')) {
            closePopupMenu();
        } else if (target.classList.contains('popup-repair-types') || target.closest('.close')) {
            closePopupRepair();
        } else {
            closePopupMenu();
        }
    })
};

export default clickEventListener;