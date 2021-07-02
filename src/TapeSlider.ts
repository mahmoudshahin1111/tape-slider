import * as $ from 'jquery';
import { IParseable } from './contract/IParseable';
import { ITapeSliderData } from './api/ITapeSliderData';
import { TapeSliderItem } from './TapeSliderItem';
import { ITapeSliderOptions } from './api/ITapeSliderOptions';
export class TapeSlider implements IParseable {
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
        this.render();

    }
    render() {
        this.tapeContainerEl.append(this.parse());
    }
    parse(): HTMLElement {
        const node =this.makeElementNode();
        for (let i = 0; i < this.data.itemsData.length; i++) {
            node.appendChild(new TapeSliderItem(this.data.itemsData[i]).parse());
        }
        return node;
    }
    makeElementNode():HTMLElement{
        const node =  document.createElement('div');
        node.setAttribute('class','ts-tapSlider-container');
        return node;
    }

}

