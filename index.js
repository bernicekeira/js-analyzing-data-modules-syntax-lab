// const { 
//   combineUsers 
//   } = require('../index');

  require('datejs');

  // describe('combineUsers function return', () => {
  // const combine = combineUsers(["Jim3","Pam5","Dwight77"],["Michael6","Eleanor22","Chidi202"],["Jack_jack","Julia_Oreo", "Bill_bore"])
  // });
  // console.log(combineUsers(["Jim3","Pam5","Dwight77"],["Michael6","Eleanor22","Chidi202"],["Jack_jack","Julia_Oreo", "Bill_bore"]));

  function combineUsers(...args) {
  
   const combinedObject = {users: [],
  merge_date: new Date().toString('10/19/2026')};

    for (const arr of args) {
      combinedObject.users = [...combinedObject.users, ...arr];
  }

  return combinedObject;
}

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};