
import { ITapeSliderOptions } from './api/ITapeSliderOptions';
import { TapeSlider } from './TapeSlider';

const tapeSliderObj = new TapeSlider();
export const initialize =  function (options:ITapeSliderOptions) {
    tapeSliderObj.boot(options);
    return tapeSliderObj;
}