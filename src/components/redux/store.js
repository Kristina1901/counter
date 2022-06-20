import createStore from 'redux';
const initialization = {
  counter: {
    value: 10,
  },
};
const reducer = (state = initialization, { type, payload }) => {
  switch (type) {
    case 'counter/Increment':
      return {
        ...state,
        ...state.counter,
        value: state.counter.value + payload,
      };
    case 'counter/Decrement':
      return { counterValue: state.counterValue - payload };
    default:
      return state;
  }
};
const store = createStore(reducer);
export default store;
