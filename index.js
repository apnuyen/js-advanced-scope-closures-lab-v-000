const produceDrivingRange = function (){
  return function()
}

const produceTipCalculator = function(){
  return
}

const createDriver = function(){
  let DriverId = 0
  return class{
    constructor(name){
      this.name = name
      this.id = ++DriverId;
    }

  }
}
