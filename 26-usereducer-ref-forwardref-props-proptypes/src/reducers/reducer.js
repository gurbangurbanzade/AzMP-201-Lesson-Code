function reducer(state, action) {
  // console.log("state", state);
  console.log("action", action);

  switch (action.type) {
    case "SetValue":
      return { ...state, value: action.value };

    case "SetData":
      return { value: "", data: [...state.data, action.value] };
    case "SetInc":
      return { ...state, count: ++action.count };
    case "SetNewValue":
      // let result=

      return { ...state, count: state.count - +action.newValue };

    default:
      break;
  }
}

export default reducer;

// let arr1 = [1, 2];
// let arr2 = [3, 4];

// arr1 = [...arr1, 4, 5, 6, 7, 8, ...arr1];

// let arr3 = [1, 2, 3, 4];
// arr3 = [...arr1, ...arr2];

// let obj1 = { name: "gurban" };
// let obj2 = { surname: "qurbanzada" };

// let obj = {
//   ...obj1,
//   ...obj2,
// };

// let a = {
//   ...obj1,
//   age: 30,
// };

// let b={
//     ...a,
//     student:false
// }

// let {
//     name:"gurban",
//     sadfgf
//     dsgfhgg
//     sadfgffhsd
// }
