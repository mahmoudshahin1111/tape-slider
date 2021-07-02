
import { ITapeSliderOptions } from './api/ITapeSliderOptions';
import { TapeSlider } from './TapeSlider';

const tapeSlider: TapeSlider | undefined | null = null;
export const initialize = function (selector: string, options: ITapeSliderOptions): TapeSlider {
    if (tapeSlider) return tapeSlider;
    return new TapeSlider(selector, options);
}