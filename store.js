//1. store -> tempat simpen data
//2. reducer -> login perubahan data
//3. dispacth/action -> pemicu perubahan data / reducer

//store
const { createStore } = require("redux");

const globalState = {
  value: 2,
  age: 18,
};
//reducer harus pure function
//tidak ada varibale dari luar function, harus return dari immutable
const reducer = (state = globalState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        value: state.value + 3,
      };
    case "CHANGE":
      return {
        ...state,
        age: action.newValue,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

store.dispatch({
  type: "INCREMENT",
});
store.dispatch({
  type: "CHANGE",
  newValue: 40,
});

const state = store.getState();

console.log("ini State : ", state);
