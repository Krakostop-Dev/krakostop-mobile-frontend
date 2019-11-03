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
    default:
      return state;
  }
};
