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
    private moveSub: rxJs.Subscription;
    private hold: boolean = false;
    constructor(selector: string, options: ITapeSliderOptions) {
        this.selector = selector
        this.options = options;
        this.tapeContainerEl = $(this.selector);
        this.render();
        this.registerElementListeners();
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
    private registerElementListeners() {
        document.addEventListener('mouseup', (e: MouseEvent) => this.onMouseUp(e));
        this.tapeSliderNodeRef.addEventListener('mousedown', (e: MouseEvent) => this.onMouseDown(e));
        this.tapeSliderNodeRef.addEventListener('mousemove', (e: MouseEvent) => this.onMouseMove(e));
    }
    start() {
        this.moveSub = rxJs.interval(this.getSpeed()).subscribe(e => {
            this.tapeSliderNodeRef.scrollBy({ left: 1 });
            if (this.isStartToEnd()) {
                this.restart();
            }
        });
    }
    private getSpeed() {
        return this.options.speed ? this.options.speed : 100;
    }
    private isStartToEnd() {
        return (this.tapeSliderNodeRef.scrollLeft + this.tapeSliderNodeRef.clientWidth + (this.tapeSliderNodeRef.clientWidth / 2)) >= this.tapeSliderNodeRef.scrollWidth;
    }
    private onMouseDown(e: MouseEvent) {
        this.hold = true;
        this.stop();
    }
    private onMouseMove(e: MouseEvent) {
        if (!this.hold) return;
        this.tapeSliderNodeRef.scrollBy({ left: -e.movementX });
    }
    private onMouseUp(e: MouseEvent) {
        this.hold = false;
        this.start();
    }
    stop() {
        this.moveSub.unsubscribe();
    }
    restart() {
        this.tapeSliderNodeRef.scrollTo({ left: 0 });
    }
}

