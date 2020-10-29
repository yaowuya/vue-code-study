const Observer = require("./Observer");
const Watcher = require("./Watcher");

const obj = {
  a: 1,
  b: {
    c: 2,
  },
};

new Observer(obj);
new Watcher(obj, "a", () => {
  console.log(9);
});

obj.a = "222";
