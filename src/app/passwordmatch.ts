import { Validator, NG_VALIDATORS, AbstractControl } from "@angular/forms";
import { Directive, Input, Attribute } from "@angular/core";

@Directive({
    selector: "[appPasswordMatch]",
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: PasswordMatch,
        multi: true
    }]
})

export class PasswordMatch implements Validator {
    constructor( @Attribute("reverse") public reverse: string ) {}

    @Input() appPasswordMatch: string;

    private get isReverse() {
        if (!this.reverse) {
            return false;
        }
        return this.reverse === "true" ? true: false;
     }

    validate(control: AbstractControl): {[key: string]: any} | null {
        const compare = control.parent.get(this.appPasswordMatch);
        
        if (compare && compare.value !== control.value && !this.isReverse) {
            return { "notEqual": true };
        }

        if (compare && compare.value == control.value && this.isReverse) {
            delete compare.errors["notEqual"];
            compare.setErrors(null);
        }

        if (compare && compare.value !== control.value && this.isReverse) {
            compare.setErrors({"notEqual": true});
        }
        return null;
    }
}
