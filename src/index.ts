
import { ITapeSliderOptions } from './api/ITapeSliderOptions';
import { TapeSlider } from './TapeSlider';
import { TapeSliderOptions } from './TapeSliderOptions';


export const make = function (selector: string, options: ITapeSliderOptions): TapeSlider {
    console.log(this);
    
    return new TapeSlider(selector, new TapeSliderOptions(options));
}