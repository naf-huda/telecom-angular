export class Plans {
    id : number;
    name : String;
    planType : number; 
    numDevices : number;

    constructor(id = 0, name = '', planType = 1, numDevices = 1) {
        this.id = id;
        this.name = name;
        this.planType = planType;
        this.numDevices = numDevices; 
    }
}

// THIS IS THE PLANS POJO