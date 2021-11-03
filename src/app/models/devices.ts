export class Devices {
    deviceId : number;
    deviceNumber : string;
    planId : number;
    planNumber : number;
    planCost: number;

    constructor(deviceId = 0, deviceNumber = '', planId = 0, planNumber = 0, planCost = 0) {
        this.deviceId = deviceId;
        this.deviceNumber = deviceNumber;
        this.planId = planId;
        this.planNumber = planNumber;
        this.planCost = planCost;
    }
}

// THIS IS THE DEVICES POJO