import React, { Component } from "react";
import { connect } from "react-redux";
class Result extends Component {
  render() {
    const { formData } = this.props;
    // console.log(formData);
    return (
      <div id="result">
        <h1>Results</h1>
        <hr />
        <strong>Total Stock:</strong>
        <label>{formData.stock}</label>
        <hr />
        <strong>Algorithm:</strong>
        <label>{formData.algorithm}</label>
        <hr />
        <table style={{ margin: "0px 20px" }}>
          <thead>
            <tr>
              <th style={{ padding: "0px 20px" }}>Name</th>
              <th style={{ padding: "0px 20px" }}>Price</th>
              <th style={{ padding: "0px 20px" }}>Quantity Purchased</th>
              <th style={{ padding: "0px 20px" }}>Time</th>
            </tr>
          </thead>
          <tbody>
            {formData.orders.map((order) => (
              <tr>
                <td style={{ padding: "0px 20px" }}>{order.name}</td>
                <td style={{ padding: "0px 20px" }}>{order.price}</td>
                <td style={{ padding: "0px 20px" }}>{order.qty}</td>
                <td style={{ padding: "0px 20px" }}>{order.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapPropsToState(state) {
  return {
    formData: state.formData,
  };
}
export default connect(mapPropsToState)(Result);
