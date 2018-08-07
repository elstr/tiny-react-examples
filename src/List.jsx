import React, { Component } from "react";
export default class List extends Component {
  render() {
    const { products } = this.props;
    return (
      <div>
        <ul style={{ listStyle: "none" }}>
          {products.map((item, i) => {
            return <li key={i}> {item.description} </li>;
          })}
        </ul>
      </div>
    );
  }
}
