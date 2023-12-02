//calculate uber price

class uber_price {
    constructor(distance) {
        this.basefare = 200;
        this.rateperkm = 15;
        this.distance = distance;
    }
    calculation() {
        if (this.distance <= 10) {
            return this.basefare;
        }
        else {
            return this.basefare + (this.distance * this.rateperkm);

        }
    }
}

let travel1 = new uber_price(20);
console.log(travel1.calculation());

