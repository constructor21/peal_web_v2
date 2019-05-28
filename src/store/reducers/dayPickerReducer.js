
const dayPickerReducer = (state=[], action) => {

  switch(action.type) {

    case 'ADD':
      return [...state, action.payload]
      console.log(state);

    case 'REMOVE':
      state = [];
      console.log(state);
      return state;

    default:
      return state
  }

}

export default dayPickerReducer
