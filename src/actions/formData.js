import * as api from "../api";
export const ADD_FORM_DATA_TO_STORE = "ADD_FORM_DATA_TO_STORE";
export const PROCESS_FIFO = "PROCESS_FIFO";
export const PROCESS_PRORATA = "PROCESS_PRORATA";
export const CLEAR_STORE = "CLEAR_STORE";

export function sortAndDistribute(data) {
  return async (dispatch) => {
    try {
      let payloadOrders = data.orders;
      let orders = await payloadOrders.sort(function (a, b) {
        if (a.price === b.price) {
          return a.time - b.time;
        }
        return b.price > a.price ? 1 : -1;
      });
      console.log(orders);
      // let stocks = data.stock.toString();
      const newData = { ...data, orders: orders };

      const res = await api.fifoOp(newData);

      console.log(res.data);
      dispatch(processFIFO(res.data));
    } catch (error) {
      console.log(error.message);
    }
  };
}
export function sortAndDistributePro(data) {
  return async (dispatch) => {
    try {
      let payloadOrder = data.orders;
      let orders1 = payloadOrder.sort(function (a, b) {
        if (a.price === b.price) {
          return b.qty - a.qty;
        }
        return b.price > a.price ? 1 : -1;
      });
      console.log(orders1);

      const newData1 = { ...data, orders: orders1 };

      const res = await api.prorataOp(newData1);

      console.log(res.data);
      dispatch(processPRORATA(res.data));
    } catch (error) {
      console.log(error.message);
    }
  };
}
export function addFormDataToStore(data) {
  return {
    type: ADD_FORM_DATA_TO_STORE,
    payload: data,
  };
}
export function clearStore() {
  return {
    type: CLEAR_STORE,
  };
}
export function processFIFO(data) {
  return {
    type: PROCESS_FIFO,
    payload: data,
  };
}
export function processPRORATA(data) {
  return {
    type: PROCESS_PRORATA,
    payload: data,
  };
}
