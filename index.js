const produceDrivingRange = function (blockRange){
  return function(startBlock, endBlock){
    let start = parseInt(startBlock);
    let end = parseInt(endBlock);
    let distanceTravelled = Math.abs(end-start);
    let difference = blockRange - distranceTravelled;

    if (difference > 0){
      return `Within range by ${difference}`
    }
    else {
      return `${Math.abs(difference)} block out of range`
    }
  }
}

const produceTipCalculator = function(percentage){
  return function(fare){
    return fare*percentage
  }
}

const createDriver = function(){
  let DriverId = 0
  return class{
    constructor(name){
      this.name = name;
      this.id = ++DriverId;
    }

  }
}
