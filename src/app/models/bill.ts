export class Bill {
    planCost : number;
    phoneNumber : number;
    planNumber : number;

    constructor(planCost = 0, phoneNumber = 0, planNumber = 0) {
        this.planCost = planCost;
        this.phoneNumber = phoneNumber;
        this.planNumber = planNumber;
    }
}