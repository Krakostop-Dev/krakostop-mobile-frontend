const reducer = (state, action) => {
  console.log('Reducer');
  switch (action.type) {
    case 'updateMyLocation':
      return {
        ...state,
        myLocation: action.payload.location,
      };
    case 'updateParticipantsLocation':
      return {
        ...state,
        participants: action.payload,
      };
    case 'setMap':
      return {
        ...state,
        map: action.payload.map,
      };
    default:
      return state;
  }
};

export default reducer;
