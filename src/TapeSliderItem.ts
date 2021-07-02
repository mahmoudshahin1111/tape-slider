import { IParseable } from "./contract/IParseable";
import { ITapeSliderItemData } from "./api/ITapeSliderItemData";

export class TapeSliderItem implements IParseable {
    private data;
    constructor(data: ITapeSliderItemData) {
        this.data = data;
    }
    makeElementNode(): HTMLElement {
        throw new Error("Method not implemented.");
    }
    parse(): HTMLElement {
        const node = document.createElement('span');
        node.innerText = this.data.text;
        return node;
    }
    

}