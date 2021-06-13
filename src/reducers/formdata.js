import {
  ADD_FORM_DATA_TO_STORE,
  CLEAR_STORE,
  PROCESS_FIFO,
  PROCESS_PRORATA,
} from "../actions/formData";

const initialState = {
  stock: 0,
  algorithm: "",
  orders: [],
};

export default function formData(state = initialState, action) {
  switch (action.type) {
    case ADD_FORM_DATA_TO_STORE:
      return action.payload;
    case PROCESS_FIFO:
      return action.payload;

    case PROCESS_PRORATA:
      return action.payload;
    case CLEAR_STORE:
      return initialState;

    default:
      return state;
  }
}
