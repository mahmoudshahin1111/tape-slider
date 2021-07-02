import * as $ from 'jquery';
import { TapeSliderItem } from './TapeSliderItem';
import * as rxJs from 'rxjs';
import { TapeSliderOptions } from './TapeSliderOptions';
export class TapeSlider  {
    private tapeSliderNodeRef: HTMLElement;
    private selector: string;
    private tapeContainerEl: JQuery<HTMLElement>;
    private moveSub: rxJs.Subscription;
    private hold: boolean = false;
    private tapeSliderOptions: TapeSliderOptions;
    constructor(selector: string, tapeSliderOptions: TapeSliderOptions) {
        this.selector = selector
        this.tapeSliderOptions = tapeSliderOptions;
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
        for (let i = 0; i < this.tapeSliderOptions.getData().itemsData.length; i++) {
            node.appendChild(new TapeSliderItem(this.tapeSliderOptions.getData().itemsData[i]).parse());
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
        this.moveSub = rxJs.interval(this.tapeSliderOptions.getSpeed()).subscribe(e => {
            this.tapeSliderNodeRef.scrollBy({ left: 1 });
            if (this.isStartToEnd()) {
                this.restart();
            }
        });
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

