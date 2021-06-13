import React, { Component } from "react";
import { connect } from "react-redux";
import { TextField, Button } from "@material-ui/core";
import {
  sortAndDistribute,
  clearStore,
  sortAndDistributePro,
} from "../actions/formData";
class Form extends Component {
  constructor() {
    super();
    this.state = {
      stock: 0,
      algorithm: "",
      orders: [],
    };
  }
  addOrder() {
    this.setState({
      ...this.state,
      orders: [
        ...this.state.orders,
        {
          name: "",
          price: 0,
          qty: 0,
          time: 0,
        },
      ],
    });
  }
  handleStockChange = (e) => {
    this.setState({ ...this.state, stock: e.target.value });
  };
  handleAlgoChange = (e) => {
    this.setState({ ...this.state, algorithm: e.target.value });
  };
  handlePriceChange = (e, index) => {
    let arr1 = this.state.orders;
    arr1[index].price = e.target.value;
    this.setState({ ...this.state, orders: arr1 });
  };
  handleQtyChange = (e, index) => {
    let arr = this.state.orders;
    arr[index].qty = e.target.value;
    this.setState({ ...this.state, orders: arr });
  };
  handleTimeChange = (e, index) => {
    let arr2 = this.state.orders;
    arr2[index].time = e.target.value;
    this.setState({ ...this.state, orders: arr2 });
  };
  handleNameChange = (e, index) => {
    let arr3 = this.state.orders;
    arr3[index].name = e.target.value;
    this.setState({ ...this.state, orders: arr3 });
  };

  handleRemoveBtn = (index) => {
    console.log(index);
    let aee = this.state.orders;
    aee.splice(index, 1);
    console.log(this.state.orders);
    this.setState({ ...this.state, orders: aee });
    // console.log(index);
  };
  handleCalculateBtn = () => {
    if (this.state.algorithm === "FIFO") {
      this.props.dispatch(sortAndDistribute(this.state));
    } else {
      this.props.dispatch(sortAndDistributePro(this.state));
    }
    // this.props.dispatch(addFormDataToStore(this.state));
  };

  handleClearBtn = () => {
    this.props.dispatch(clearStore());
    let btn1 = document.getElementById("radio1");
    let btn2 = document.getElementById("radio2");
    btn1.checked = false;
    btn2.checked = false;
    this.setState({
      stock: 0,
      algorithm: "",
      orders: [],
    });
  };
  render() {
    return (
      <div id="form">
        <h1>FORM</h1>
        {/* <label>Add Stock:</label>
        <input
          type="number"
          value={this.state.stock}
          onChange={this.handleStockChange}
        /> */}
        <TextField
          name="name"
          variant="outlined"
          label="Add Stock"
          type="number"
          value={this.state.stock}
          fullWidth
          onChange={(e) =>
            this.setState({ ...this.state, stock: e.target.value })
          }
        ></TextField>
        <hr />
        <label>Algorithm:</label>
        <label>FIFO</label>
        <input
          type="radio"
          name="algo"
          value="FIFO"
          onChange={this.handleAlgoChange}
          id="radio1"
        />
        <label>PRO-RATA</label>
        <input
          type="radio"
          name="algo"
          value="PRO-RATA"
          onChange={this.handleAlgoChange}
          id="radio2"
        />
        <hr />
        <label>Orders</label>
        {this.state.orders.map((order, index) => {
          return (
            <div key={index} id={index}>
              {/* <input
                placeholder="Name"
                type="text"
                required
                onChange={(e) => this.handleNameChange(e, index)}
              /> */}
              <TextField
                name="name"
                variant="outlined"
                label="Name"
                // fullWidth
                onChange={(e) => this.handleNameChange(e, index)}
                style={{ margin: "10px" }}
              ></TextField>
              {/* <input
                placeholder="Add Price"
                type="number"
                required
                onChange={(e) => this.handlePriceChange(e, index)}
              /> */}
              <TextField
                name="name"
                variant="outlined"
                label="Add Price"
                type="number"
                style={{ margin: "10px" }}
                onChange={(e) => this.handlePriceChange(e, index)}
              ></TextField>
              {/* <input
                placeholder="Add Quantity"
                type="number"
                required
                onChange={(e) => this.handleQtyChange(e, index)}
              /> */}
              <TextField
                name="name"
                variant="outlined"
                label="Add Quantity"
                type="number"
                style={{ margin: "10px" }}
                onChange={(e) => this.handleQtyChange(e, index)}
              ></TextField>
              {/* <input
                placeholder="Time"
                type="number"
                required
                onChange={(e) => this.handleTimeChange(e, index)}
              /> */}
              <TextField
                name="name"
                variant="outlined"
                label="Add Time"
                type="number"
                style={{ margin: "10px" }}
                // fullWidth
                onChange={(e) => this.handleTimeChange(e, index)}
              ></TextField>
              {/* <button onClick={(e) => this.handleRemoveBtn(index)}>
                Remove
              </button> */}
              <Button
                variant="contained"
                color="secondary"
                onClick={(e) => this.handleRemoveBtn(index)}
              >
                Remove
              </Button>
            </div>
          );
        })}
        <hr />
        {/* <button onClick={(e) => this.addOrder(e)}>Add Buy Order</button> */}
        <Button
          variant="contained"
          color="primary"
          onClick={(e) => this.addOrder(e)}
          style={{ margin: "0px 20px" }}
        >
          Add Buy Order
        </Button>
        <hr />
        {/* <button onClick={this.handleCalculateBtn}>Calculate</button> */}
        <Button
          variant="contained"
          color="primary"
          onClick={this.handleCalculateBtn}
          style={{ margin: "10px 20px" }}
        >
          Calculate
        </Button>
        {/* <button onClick={this.handleClearBtn}>Clear</button> */}
        <Button
          variant="contained"
          color="secondary"
          onClick={this.handleClearBtn}
        >
          Clear
        </Button>
      </div>
    );
  }
}

function mapPropsToState(state) {
  return {};
}

export default connect(mapPropsToState)(Form);
