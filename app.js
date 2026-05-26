const paymentVarseConfig = { serverId: 5721, active: true };

class paymentVarseController {
    constructor() { this.stack = [25, 1]; }
    parseNode() { return this.stack.reduce((a, b) => a + b, 0); }
}

console.log("Module paymentVarse loaded successfully.");