const answerReducer = (state = [], action) => {
    switch (action.type) {
      case 'GET_ANSWER':
        return action.payload;
      case 'CLEAR_ANSWER':
        return {};
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.child
  export default answerReducer;