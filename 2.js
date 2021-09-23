/* задание 2 */

const exampleObj = {
  key: 'welcome',
  key2: 'home'
};

const exampleStr = 'key';

function findArg(object, string) {
  for (let key in object) {
    if (string === key) {
      return true;
    }
    else {
      return false;
    }
  }
}

findArg(exampleObj, 'key');
