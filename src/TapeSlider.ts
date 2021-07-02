import * as $ from 'jquery';
import { IParseable } from './contract/IParseable';
import { ITapeSliderData } from './api/ITapeSliderData';
import { TapeSliderItem } from './TapeSliderItem';
import { ITapeSliderOptions } from './api/ITapeSliderOptions';
export class TapeSlider implements IParseable {
    private options: ITapeSliderOptions;
    private selector: string;
    private tapeContainerEl: JQuery<HTMLElement>;
    private booted: boolean = false;
    constructor() {

    }

    boot(selector:string,options: ITapeSliderOptions) {
        this.selector = selector
        this.options = options;
        this.tapeContainerEl = $(this.selector);
        this.booted = true;
        this.render();

    }
    render() {
        this.tapeContainerEl.append(this.parse());
    }
    parse(): HTMLElement {
        const node =this.makeElementNode();
        for (let i = 0; i < this.options.data.itemsData.length; i++) {
            node.appendChild(new TapeSliderItem(this.options.data.itemsData[i]).parse());
        }
        return node;
    }
    makeElementNode():HTMLElement{
        const node =  document.createElement('div');
        node.setAttribute('class','ts-tapeSlider-container');
        return node;
    }

}

