export const createPromiseThunk = (type, promiseCreator) => {
  const name = type.replaceAll('_REQUEST', '');
  const [SUCCESS, FAILURE] = [`${name}_SUCCESS`, `${name}_FAILURE`];

  return param => async dispatch => {
    dispatch({ type, param });
    try {
      const payload = await promiseCreator(param);
      dispatch({ type: SUCCESS, payload });
    } catch (e) {
      dispatch({ type: FAILURE, payload: e, error: true });
    }
  };
};

export const reducerUtils = {
  initial: (initialData = null) => ({
    loading: false,
    data: initialData,
    error: null
  }),
  loading: (prevState = null) => ({
    loading: true,
    data: prevState,
    error: null
  }),
  success: payload => ({
    loading: false,
    data: payload,
    error: null
  }),
  error: error => ({
    loading: false,
    data: null,
    error: error
  })
};

export const handleAsyncActions = (type, key, keepData = false) => {
  const name = type.replaceAll('_REQUEST', '');
  const [SUCCESS, FAILURE] = [`${name}_SUCCESS`, `${name}_FAILURE`];
  return (state, action) => {
    switch (action.type) {
      case type:
        return {
          ...state,
          [key]: reducerUtils.loading(keepData ? state[key].data : null)
        };
      case SUCCESS:
        return {
          ...state,
          [key]: reducerUtils.success(action.payload)
        };
      case FAILURE:
        return {
          ...state,
          [key]: reducerUtils.error(action.payload)
        };
      default:
        return state;
    }
  };
};

const defaultIdSelector = param => param;
export const createPromiseThunkById = (
  type,
  promiseCreator,
  idSelector = defaultIdSelector
) => {
  const name = type.replaceAll('_REQUEST', '');
  const [SUCCESS, FAILURE] = [`${name}_SUCCESS`, `${name}_FAILURE`];
  return param => async dispatch => {
    const id = idSelector(param);
    dispatch({ type, param, meta: id });
    try {
      const payload = await promiseCreator(param);
      dispatch({ type: SUCCESS, payload, meta: id });
    } catch (e) {
      dispatch({ type: FAILURE, error: true, payload: e, meta: id });
    }
  };
};

export const handleAsyncActionsById = (type, key, keepData = false) => {
  const name = type.replaceAll('_REQUEST', '');
  const [SUCCESS, FAILURE] = [`${name}_SUCCESS`, `${name}_FAILURE`];
  return (state, action) => {
    const id = action.meta;
    switch (action.type) {
      case type:
        return {
          ...state,
          [key]: {
            ...state[key],
            [id]: reducerUtils.loading(
              keepData ? state[key][id] && state[key][id].data : null
            )
          }
        };
      case SUCCESS:
        return {
          ...state,
          [key]: {
            ...state[key],
            [id]: reducerUtils.success(action.payload)
          }
        };
      case FAILURE:
        return {
          ...state,
          [key]: {
            ...state[key],
            [id]: reducerUtils.error(action.payload)
          }
        };
      default:
        return state;
    }
  };
};