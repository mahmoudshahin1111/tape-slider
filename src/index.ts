
import { ITapeSliderOptions } from './api/ITapeSliderOptions';
import { TapeSlider } from './TapeSlider';

const tapeSliderObj = new TapeSlider();
export const initialize =  function (selector:string,options:ITapeSliderOptions) {
    tapeSliderObj.boot(selector,options);
    return tapeSliderObj;
}