/ * задание 1 */

const dog = {
  ears: 4,
  nose: 'black',
  fur: 'white',
  tail: 'short'
}

const Joe = Object.create(dog);
Joe.nose = 'pink';
Joe.tail = 'long';

function getInfo(object) {
  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      console.log(`${key} : ${object[key]}`);
    }
  }
}

getInfo(Joe);