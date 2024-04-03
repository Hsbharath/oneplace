export const initialState = {
  loading: false,
  data: [],
  error: false,
};

export const fetchReducer = (state, action) => {
  switch (action.type) {
    case 'FETCHING_START':
      return {
        loading: true,
        data: [],
        error: false,
      };
    case 'FETCHING_SUCCESS':
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case 'FETCHING_FAILURE':
      return {
        loading: false,
        data: [],
        error: true,
      };
    default:
      return state;
  }
};
