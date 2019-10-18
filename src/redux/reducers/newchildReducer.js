const newchildReducer = (state = [], action) => {
    switch (action.type) {
      case 'GET_CHILD':
        return action.payload;
      case 'CLEAR_CHILD':
        return {};
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.child
  export default newchildReducer;