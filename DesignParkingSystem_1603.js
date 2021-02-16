// Design a parking system for a parking lot. The parking lot has three kinds of parking space: big, medium, and small
    //- with a fixed number of slots for each size.

    // IMplement the ParkingSystem class:
        // -  ParkingSystem(int big, int medium, int small) initializes object of the ParkingSystem class.
            //- The number of slots for each parking space are given as a part of the contructor.
        
        // bool addCar(int CarType) checks whether there is a prking space of carType for the car that wants
            //- to get into the parking lot. carType can be of three kinds: big, medium, or small, which are 
            //- represented by 1,2, and 3 respectively. A car can only park in a parking space of its carType.
            //- If there is no space available, return false, else park the car in that size space and return true.

var ParkingSystem = function(big, medium, small){
   this.parking = [null, big, medium, small];
};

ParkingSystem.prototype.addCar = function(carType){
    if(this.parking[carType] > 0){
        this.parking[carType]--;
        return true;
    }
    return false;
};

let newparkingsystem = new ParkingSystem(1,1,0);
console.log(newparkingsystem.addCar(1));
console.log(newparkingsystem.addCar(2));
console.log(newparkingsystem.addCar(3));
console.log(newparkingsystem.addCar(1));