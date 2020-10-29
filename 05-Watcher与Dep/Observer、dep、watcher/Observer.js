const Dep = require('./Dep')

class Observer {
  constructor(targetObject) {
    def(targetObject, '__ob__', this);//在 targetObject 上 添加  Observer 实例, setter时 通知该实例
    this.walk(targetObject)
    this.dep = new Dep()
  }

  walk(obj) {
    Object.keys(obj).forEach(key => {
      defineReactive(obj, key, obj[key])
    });
  }

}

function observe(data) {
  if (Object.prototype.toString.call(data) !== '[object Object]') {
    return
  }
  new Observer(data)
}

function defineReactive(obj, key, val) {
  observe(val)

  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter() {
      console.log('get');
      const ob = this.__ob__
      ob.dep.depend();
      return val
    },
    set: function reactiveSetter(newVal) {
      console.log('set');
      if (newVal === val) return
      val = newVal
      observe(newVal)
      const ob = this.__ob__
      ob.dep.notify();
    },

  })
}

function def(obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}


module.exports = Observer