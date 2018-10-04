/*

    FLAG ARGUMENTS

    * passing a boolean is a truly horrible practice
    * it shouts that the function does more than one thing
    * one thing if the flag is true and another if the flag is false!

*/

class Calculator {
    constructor(formValue: string) {
        if (JSON.parse(formValue)) {
            this.doThingWhenTrue;
        } else {
            this.doThingWhenFalse;
        }
    }

    doThingWhenTrue() {}

    doThingWhenFalse() {}
}
export { Calculator };
