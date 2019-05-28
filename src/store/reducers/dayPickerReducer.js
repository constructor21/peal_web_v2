const initState = {
  days: [

  ]
}

const dayPickerReducer = (state=initState, action) => {

  switch(action.type) {

    case 'ADD':
      return [...state, action.payload]

    case 'REMOVE':
      const newState = [];
      return newState

    default:
      return state
  }

}

export default dayPickerReducer
