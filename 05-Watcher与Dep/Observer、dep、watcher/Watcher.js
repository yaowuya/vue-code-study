const Dep = require("./Dep");

class Watcher {
  constructor(vm, exp, fn) {
    this.vm = vm;
    this.exp = exp;
    this.fn = fn;
    Dep.target = this; //将自己挂载到 Dep.target，调用 Dep.depend时会读取该变量
    this.vm[exp];
  }

  update() {
    //加入队列
  }
}

module.exports = Watcher;
