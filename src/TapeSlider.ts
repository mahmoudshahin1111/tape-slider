import * as $ from 'jquery';
import { IParseable } from './contract/IParseable';
import { ITapeSliderData } from './api/ITapeSliderData';
import { TapeSliderItem } from './TapeSliderItem';
import { ITapeSliderOptions } from './api/ITapeSliderOptions';
import * as rxJs from 'rxjs';
export class TapeSlider implements IParseable {
    private tapeSliderNodeRef:HTMLElement;
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
        this.tapeSliderNodeRef = this.parse();
        this.tapeContainerEl.append(this.tapeSliderNodeRef);
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
    startMove(){
        rxJs.interval(100).subscribe(e=>{
            console.log(this.tapeSliderNodeRef);
            
        });
    }
}

