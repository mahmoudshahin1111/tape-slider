import * as $ from 'jquery';
export class TapeSlider {
    private selector: string;
    private tapeContainerEl: JQuery<HTMLElement>;
    constructor() {

    }
    boot(selector: string) {
        this.selector = selector;
        this.tapeContainerEl = $(this.selector);
    }
    add() {

    }
    remove() {

    }
    goToTapeItem() {

    }

}

