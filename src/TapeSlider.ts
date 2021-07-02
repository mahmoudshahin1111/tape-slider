import * as $ from 'jquery';
import { IRenderable } from './contract/IRenderable';
import { ITapeSliderData } from './api/ITapeSliderData';
import { TapeSliderItem } from './TapeSliderItem';
import { ITapeSliderOptions } from './api/ITapeSliderOptions';
export class TapeSlider implements IRenderable {
    private data: ITapeSliderData;
    private selector: string;
    private tapeContainerEl: JQuery<HTMLElement>;
    private booted: boolean = false;
    constructor() {

    }

    boot(options: ITapeSliderOptions) {
        debugger
        this.selector = options.selector;
        this.data = options.data;
        this.tapeContainerEl = $(this.selector);
        this.booted = true;
        this.run();

    }
    run() {
        this.tapeContainerEl.append(this.render());
    }
    render(): HTMLElement {
        const node = document.createElement('div');
        console.log(this.data);
        
        for (let i = 0; i < this.data.itemsData.length; i++) {
            const tapeSliderItem = new TapeSliderItem(this.data.itemsData[i]);
            node.appendChild(tapeSliderItem.render());
        }
        return node;
    }


}

