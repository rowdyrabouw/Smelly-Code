/*

    FLAG ARGUMENTS

    * passing a boolean is a truly horrible practice
    * it shouts that the function does more than one thing
    * one thing if the flag is true and another if the flag is false!

*/

class Calculator {
    constructor(formValue: string) {
        this.doThingsWhenTrueOrFalse(JSON.parse(formValue));
    }

    doThingsWhenTrueOrFalse(flag: boolean) {
        if (flag) {
            // do thing when true
        } else {
            // do thing when false
        }
    }
}
export { Calculator };
