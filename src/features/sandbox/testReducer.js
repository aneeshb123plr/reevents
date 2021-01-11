export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

const initialState = {
  data: 45,
};

export const increment = (payload) => {
  return {
    type: INCREMENT_COUNTER,
    payload: payload,
  };
};

export const decrement = (payload) => {
  return {
    type: DECREMENT_COUNTER,
    payload: payload,
  };
};

export default function testReducer(state = initialState, { type, payload }) {
  switch (type) {
    case INCREMENT_COUNTER:
      return {
        ...state,
        data: state.data + payload,
      };
    case DECREMENT_COUNTER:
      return {
        ...state,
        data: state.data - payload,
      };
    default:
      return state;
  }
}
