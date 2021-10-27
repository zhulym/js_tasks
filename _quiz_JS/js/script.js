////////////////////////////////
const x = function () { };
const y = function (a, b, c) { };
console.log(x.length); //0
console.log(y.length); //3
////////////////////////////////

class Event {
  constructor() {
    this.events = [];
  }
  subscribe(func) {
    this.events.push(func);
  }
  unsubscribe(func) {
    this.handler = [...this.handler].filter(el => el !== func);
  }
  emit(...arg) {
    this.events.forEach(func => func(...arg));
  }
}


function undoRedo(object) {
  let last;
  let save;
  let flag = false;
  return {
    set: function (key, value) {
      last = [true, key];
      save = object[key];
      object[key] = value;
    },
    get: function (key) {
      return object[key];
    },
    del: function (key) {
      last = [false, key];
      save = object[key];
      delete object[key];
    },
    undo: function () {
      if (!last) throw new Error('No undo operation');
      this.inverce();
      flag = true;
    },
    redo: function () {
      if (!flag) throw new Error('No redo operation');
      this.inverce();
      flag = false;
    },
    inverse: function () {
      if (!save) return;
      this.set(last[1], save);
      return save = undefined;
    }
  };
}