// const findBestEmployee = function(employees) {
//   let max = 0;
//   let theMostProductive;

//   const names = Object.keys(employees);
//   //console.log(names);

//   for (const name of names) {
//     //console.log(name);
//     //console.log(employees[name]);
//     if (max < employees[name]) {
//       max = employees[name];
//       theMostProductive = name;
//     }
//   }
//   return {
//     theMostProductive,
//     tasksCompleted: max
//   };
// };

// Через цикл for in
// function findBestEmployee(employees) {
//   let max = 0;
//   let theMostProductive;

//   for (const employee in employees) {
//     const numOfTasks = employees[employee];
//     if (numOfTasks > max) {
//       max = numOfTasks;
//       theMostProductive = employee;
//     }
//   }
//   return theMostProductive;
// }

/*
 * Вызовы функции для проверки работоспособности реализации.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38
  })
); // lux
