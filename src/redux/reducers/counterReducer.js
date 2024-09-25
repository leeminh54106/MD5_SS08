const counterReducer = (state = 10, action) => {
  console.log(action);
  switch (action.type) {
    case 'increment':
      state += 1;
      return state;
    case 'decrement':
      state -= 1;
      return state;
    default:
      return state;
  }
};

export default counterReducer;
