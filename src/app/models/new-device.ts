export class NewDevice {

    deviceNumber: string;
    planId: number;
    planNumber: number;
    planCost: number;

    constructor(deviceNumber: string, planId: number, planNumber: number, planCost: number) {
        this.deviceNumber = deviceNumber;
        this.planId = planId;
        this.planNumber = planNumber;
        this.planCost = planCost;
    }
}
