import { useEffect, useReducer } from 'react';

import { fetchReducer, initialState } from '../reducers/fetchReducer';

function useFetch(url) {
  const [state, dispatch] = useReducer(fetchReducer, initialState);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    dispatch({ type: 'FETCHING_START' });
    const fetchData = async () => {
      try {
        const response = await fetch(url, { signal });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        dispatch({ type: 'FETCHING_SUCCESS', payload: result });
      } catch (error) {
        dispatch({ type: 'FETCHING_FAILURE' });
      }
    };

    fetchData();

    return () => {
      abortController.abort();
    };
  }, [url]);

  return state;
}

export default useFetch;
