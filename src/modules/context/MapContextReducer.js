const reducer = (state, action) => {
  console.log('Reducer');
  switch (action.type) {
    case 'updateMyLocation':
      return {
        ...state,
        my_location: action.payload.location,
      };
    case 'updateParticipantsLocation':
      return {
        ...state,
        participants: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
