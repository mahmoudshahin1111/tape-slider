import { IParseable } from "./contract/IParseable";
import { ITapeSliderItemData } from "./api/ITapeSliderItemData";

export class TapeSliderItem implements IParseable {
    private data;
    constructor(data: ITapeSliderItemData) {
        this.data = data;
    }
    makeElementNode(): HTMLElement {
        const node = document.createElement('span');
        node.setAttribute('class','.ts-tapeSlider-item');
        return node;
    }
    parse(): HTMLElement {
        const node = this.makeElementNode();
        node.innerText = this.data.text;
        return node;
    }


}