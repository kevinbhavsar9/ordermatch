import axios from "axios";

const url = "https://ordermatch.herokuapp.com/operations";

export const fifoOp = (data) => axios.post(`${url}/fifo`, data);
export const prorataOp = (data) => axios.post(`${url}/prorata`, data);
