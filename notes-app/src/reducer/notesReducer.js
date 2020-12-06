import * as actionTypes from "../actions/actionTypes";

const intialState = {
  notes: [],
  error: false,
};

const notesReducer = (state = intialState, action) => {
    let x = [...state.notes]
  switch (action.type) {
    case actionTypes.ADD_NOTES:
      console.log(action.payload);
      x.push(action.payload)
      return {
        ...state,
        notes: [...x]
      };

    // case actionTypes.DELETE_MEMBER:
    //     return {
    //         ...state,
    //         users: [...state.users.filter((f) => f.userid !== action.userid)]
    //     }

    default:
      return state;
  }
};

export default notesReducer;
