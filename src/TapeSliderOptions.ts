import { ITapeSliderOptions } from "./api/ITapeSliderOptions";
import { TapeSliderOptionValidator } from "./TapeSliderOptionValidator";

export class TapeSliderOptions {
    private options: ITapeSliderOptions;
    private validator: TapeSliderOptionValidator;
    constructor(options: ITapeSliderOptions, tapeSliderOptionsValidator?: TapeSliderOptionValidator) {
        this.options = options;
        this.validator = tapeSliderOptionsValidator ? tapeSliderOptionsValidator : new TapeSliderOptionValidator(this.options);
    }
    validateOptions(){
        if(this.validator.validate()){
            throw {message:"options invalid",errors:this.validator.getErrors()};
        }
    }
    getSpeed(): number {
        if ((100 / this.options.speed) <= 5) {
            return 5;
        }
        else {
            return (100 / this.options.speed);
        }
    }
    getData() {
        return this.options.data;
    }
}