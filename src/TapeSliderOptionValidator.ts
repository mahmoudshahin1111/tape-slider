import { ITapeSliderData } from "./api/ITapeSliderData";
import { ITapeSliderOptions } from "./api/ITapeSliderOptions";
import { IValidatorError } from "./api/IValidatorError";

export class TapeSliderOptionValidator {
    private validationErrors: IValidatorError[];
    private options: ITapeSliderOptions;
    constructor(options: ITapeSliderOptions) {
        this.options = options;
    }
    validate() {
        let result = this.validateSpeed(this.options.speed);
        if (this.shouldAppendToErrors(result)) {
            this.validationErrors.push(result)
        }
        result = this.validateData(this.options.data);
        if (this.shouldAppendToErrors(result)) {
            this.validationErrors.push(result)
        }
        return !this.isFails();
    }
     isFails(){
        if(this.validationErrors.length > 0) return true;
        return false;
    }
    getErrors(){
        return this.validationErrors;
    }
    private shouldAppendToErrors(validatorError: IValidatorError | null) {
        if (validatorError != null) return true;
        return false;
    }
    private validateSpeed(speed: number): IValidatorError | null {
        return null;
    }
    private validateData(data: ITapeSliderData): IValidatorError | null {
        return null;
    }
}