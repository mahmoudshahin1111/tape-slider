import * as $ from 'jquery';
import { IParseable } from './contract/IParseable';
import { ITapeSliderData } from './api/ITapeSliderData';
import { TapeSliderItem } from './TapeSliderItem';
import { ITapeSliderOptions } from './api/ITapeSliderOptions';
import * as rxJs from 'rxjs';
export class TapeSlider implements IParseable {
    private tapeSliderNodeRef: HTMLElement;
    private options: ITapeSliderOptions;
    private selector: string;
    private tapeContainerEl: JQuery<HTMLElement>;
    private booted: boolean = false;
    private moveSub: rxJs.Subscription;
    constructor(selector: string, options: ITapeSliderOptions) {
        this.selector = selector
        this.options = options;
        this.tapeContainerEl = $(this.selector);
        this.booted = true;
        this.render();
        this.start();
    }
    private render() {
        this.tapeSliderNodeRef = this.parse();
        this.tapeContainerEl.append(this.tapeSliderNodeRef);
    }
    private parse(): HTMLElement {
        const node = this.makeElementNode();
        for (let i = 0; i < this.options.data.itemsData.length; i++) {
            node.appendChild(new TapeSliderItem(this.options.data.itemsData[i]).parse());
        }
        return node;
    }
    private makeElementNode(): HTMLElement {
        const node = document.createElement('div');
        node.setAttribute('class', 'ts-tapeSlider-container');
        return node;
    }
    start() {
        this.moveSub = rxJs.interval(100).subscribe(e => {
            console.log(this.tapeSliderNodeRef.scrollBy({ left: 1 }));
        });
    }
    stop() {
        this.moveSub.unsubscribe();
    }
    reset() {
        this.tapeSliderNodeRef.scrollTo({ left: 0 });
    }
}

