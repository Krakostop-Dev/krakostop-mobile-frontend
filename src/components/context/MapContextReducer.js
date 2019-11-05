export const reducer = (state, action) => {
  switch (action.type) {
    case 'changeMapPermissions':
      return {
        ...state,
        isMapPermissionsGranted: action.payload,
      };
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
