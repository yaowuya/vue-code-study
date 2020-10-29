class Dep {
  constructor() {
    this.subs = [];
  }

  addSub(sub) {
    this.subs.push(sub);
  }

  depend() {
    this.subs.push(Dep.target);
  }

  notify() {
    for (let i = 0; i < this.subs.length; i++) {
      this.subs[i].fn();
    }
  }
}

Dep.target = null;

module.exports=Dep
