const questionReducer = (state = [], action) => {
    switch (action.type) {
      case 'GET_QUESTION':
        return action.payload;
      case 'CLEAR_QUESTION':
        return {};
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.child
  export default questionReducer;