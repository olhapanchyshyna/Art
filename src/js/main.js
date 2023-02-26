import modal from "./modules/modals";
import slider from "./modules/siders";
import forms from "./modules/forms";
import mask from "./modules/mask";
import checkTextInput from "./modules/checkTextInput";
import showMoreStyles from "./modules/showMoreStyles";
import calc from "./modules/calc";
import filter from "./modules/filter";
import picture from "./modules/picture";
import accordion from "./modules/accordion";
import burger from "./modules/burger";
import scrolling from "./modules/scrolling";
import drops from "./modules/drops";

window.addEventListener('DOMContentLoaded', () => {
    "use strict";

    let obj ={};

    modal();
    slider();
    forms(obj);
    mask('[name="phone"]');
    checkTextInput('[name="name"]');
    checkTextInput('[name="message"]');
    showMoreStyles();
    calc(obj);
    filter();
    picture('.sizes-block');
    accordion();
    burger();
    scrolling();
    drops();
});