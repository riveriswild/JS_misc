let allVoltage = new Array();

class ElectricalDevice {
  constructor(options) {
    this.name = options.name,
    this.plugged = false,
    this.voltage = options.voltage
  }

  switchOn(allVoltage) {
    this.plugged = true,
    allVoltage.push(this),
    console.log(`The ${this.name} was turned on. Current voltage: ${this.voltage}`);
  }

  removeFromVoltage(arr, value) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === value) {
        arr.splice(i, 1);
      }
    }
  }

  switchOff(allVoltage) {
    this.plugged = false,
    this.removeFromVoltage(allVoltage, this);
    console.log(`The ${this.name} was turned off.`);
  };
}

class LampDevice extends ElectricalDevice {
  constructor(options) {
    super(options);
    this.name = options.name,
    this.voltage = options.voltage,
    this.brightness = options.brightness,
    this.colour = options.colour
  }

  switchOn(allVoltage) {
    this.plugged = true,
    allVoltage.push(this),
    console.log(`The ${this.name} was turned on. Current voltage: ${this.voltage}, brightness: ${this.brightness}, colour: ${this.colour}`);
  }
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
fridge.switchOff(allVoltage);
console.log(`General consumption: ${allPower(allVoltage)}`);
tableLamp.switchOn(allVoltage);
console.log(`General consumption: ${allPower(allVoltage)}`);