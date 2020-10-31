var salesOffices = {}; //发布者
salesOffices.clientList = []; //订阅的用户

salesOffices.listen = function (fn) {
  this.clientList.push(fn);
};
salesOffices.trigger = function () {
  // 触发订阅者们收到订阅后要触发的事件
  for (var i = 0, fn; (fn = this.clientList[i++]); ) {
    fn.apply(this, arguments);
  }
};

salesOffices.listen(function (price, squareMeter) {
  console.log(`价格${price}`);
});

salesOffices.listen(function (price, squareMeter) {
  console.log(`价格${price}`);
  console.log(`squareMeter = ${squareMeter}`);
});

salesOffices.trigger(20000, 99);
salesOffices.trigger(23333, 110);