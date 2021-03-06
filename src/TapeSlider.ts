import * as $ from 'jquery';
import { TapeSliderItem } from './TapeSliderItem';
import * as rxJs from 'rxjs';
import { TapeSliderOptions } from './TapeSliderOptions';
export class TapeSlider {
    private tapeSliderNodeRef: HTMLElement;
    private selector: string;
    private moveSub: rxJs.Subscription;
    private hold: boolean = false;
    private tapeSliderOptions: TapeSliderOptions;
    private startedEvent: rxJs.Subject<TapeSlider> = new rxJs.Subject<TapeSlider>();
    private tickEvent: rxJs.Subject<number> = new rxJs.Subject<number>();
    private stoppedEvent: rxJs.Subject<TapeSlider> = new rxJs.Subject<TapeSlider>();

    constructor(selector: string, tapeSliderOptions: TapeSliderOptions) {
        this.selector = selector
        this.tapeSliderOptions = tapeSliderOptions;
    }
    boot() {
        try {
            this.tapeSliderOptions.validateOptions();
            this.render();
            this.registerElementListeners();
            this.start();
        } catch (e) {
            console.error(`%c`, e, {
                'font-size': '15px'
            });
        }
    }
    onStarted() {
        return this.startedEvent.asObservable();
    }
    onStopped() {
        return this.stoppedEvent.asObservable();
    }
    onTick() {
        return this.tickEvent.asObservable();
    }
    private render() {
        this.tapeSliderNodeRef = this.parse();
        $(this.selector).append(this.tapeSliderNodeRef);
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
        if (this.moveSub) {
            this.moveSub.unsubscribe();
        }

        this.moveSub = rxJs.interval(this.tapeSliderOptions.getSpeed()).subscribe(tick => {
            this.tapeSliderNodeRef.scrollBy({ left: 1 });
            if (this.isStartToEnd()) {
                this.restart();
            }
            this.tickEvent.next(tick);
        });
        this.startedEvent.next(this);
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
        this.stoppedEvent.next(this);
    }
    restart() {
        this.tapeSliderNodeRef.scrollTo({ left: 0 });
    }
}

