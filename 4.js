let allVoltage = new Array();

function ElectricalDevice (name, voltage) {
    this.name = name,
    this.plugged = false,
    this.voltage = voltage
};

ElectricalDevice.prototype.switchOn = function(allVoltage) {
    this.plugged = true,
    allVoltage.push(this),
    console.log(`The ${this.name} was turned on. Current voltage: ${this.voltage}`);
};

ElectricalDevice.prototype.switchOff = function(allVoltage) {
  this.plugged = false,
  removeFromVoltage(allVoltage, this);
  console.log(`The ${this.name} was turned off.`);
};

function removeFromVoltage(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      arr.splice(i, 1);
    }
  }
}

function LampDevice(name, voltage, brightness, colour) {
  this.name = name,
  this.voltage = voltage,
  this.brightness = brightness,
  this.colour = colour
}

LampDevice.prototype = new ElectricalDevice();

LampDevice.prototype.switchOn = function(allVoltage) {
  this.plugged = true,
  allVoltage.push(this),
  console.log(`The ${this.name} was turned on. Current voltage: ${this.voltage}, brightness: ${this.brightness}, colour: ${this.colour}`);
}

function allPower(allVoltage) {
  let consumed = 0;
  allVoltage.forEach((i) => {
    if (i.plugged) {
      consumed = consumed + i.voltage;
    }
  });
  return consumed;
}
const lamp = new LampDevice('lamp', 25, 50, 'red');
const PC = new ElectricalDevice('pc', 150);
const fridge = new ElectricalDevice('fridge', 300);
const tableLamp = new LampDevice('table lamp', 45, 100, 'white');
  
lamp.switchOn(allVoltage);
PC.switchOn(allVoltage);
console.log(`General consumption: ${allPower(allVoltage)}`);
fridge.switchOn(allVoltage);
console.log(`General consumption: ${allPower(allVoltage)}`);
lamp.switchOff(allVoltage);
console.log(`General consumption: ${allPower(allVoltage)}`);
tableLamp.switchOn(allVoltage);
console.log(`General consumption: ${allPower(allVoltage)}`);