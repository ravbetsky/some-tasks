// Map IE11
(function(w) {
  // If has Map, do not support iterable methods
  if (typeof w.Map === 'function' && typeof w.Map.prototype.entries === 'undefined') {
    var mapSet = w.Map.prototype.set;

    function iterator(cb) {
      var acc;
      return function () {
        acc = [];
        w.Map.prototype.forEach.call(this, function (value, key) {
          acc = cb(value, key, acc);
        })
        return acc;
      }
    }

    // Fix not returning isntance
    w.Map.prototype['set'] = function (key, value) {
      mapSet.call(this, key, value);
      return this;
    }

    w.Map.prototype['entries'] = iterator(function (value, key, acc) {
      return acc.concat([[value, key]])
    });

    w.Map.prototype['keys'] = iterator(function (value, key, acc) {
      return acc.concat(key)
    });

    w.Map.prototype['values'] = iterator(function (value, key, acc) {
      return acc.concat(value)
    });
  }
})(window);
