
import { ITapeSliderOptions } from './api/ITapeSliderOptions';
import { TapeSlider } from './TapeSlider';
import { TapeSliderOptions } from './TapeSliderOptions';


export const initialize = function (selector: string, options: ITapeSliderOptions): TapeSlider {
    return new TapeSlider(selector, new TapeSliderOptions(options));
}