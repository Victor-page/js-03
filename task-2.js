const countProps = function(obj) {
  const keys = Object.keys(obj);
  //console.log(keys);
  //console.log(Object.values(obj));
  //console.log(Object.entries(obj));

  return keys.length;
};

/*
 * Вызовы функции для проверки работоспособности реализации.
 */
console.log(countProps({})); // 0

console.log(countProps({ name: "Mango", age: 2 })); // 2

console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); // 3
