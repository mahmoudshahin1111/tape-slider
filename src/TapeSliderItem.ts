import { IRenderable } from "./contract/IRenderable";
import { ITapeSliderItemData } from "./api/ITapeSliderItemData";

export class TapeSliderItem implements IRenderable{
    private data;
    constructor(data:ITapeSliderItemData){
        this.data =data;
    }
    render(): HTMLElement {
        const node = document.createElement('span');
        node.innerText = this.data.text;
        return node;
    }
   
}