/*

    SEARCHABLE

    * no numeric constants

*/

class Calculator {
    readonly MIN_AGE = 67;

    agePartner: number;

    getGovernmentBenefits() {
        if (this.agePartner > this.MIN_AGE) {
            // do something
        }
    }
}
export { Calculator };
