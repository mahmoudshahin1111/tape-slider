
import { TapeSlider } from './api/TapeSlider';

const tapeSliderObj = new TapeSlider();
export const initialize =  function (selector: string) {
    tapeSliderObj.boot(selector);
    return tapeSliderObj;
}