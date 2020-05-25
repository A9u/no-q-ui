import React from "react";

import { Table } from "reactstrap";
import "./table-responsive.css";

const Store = (store, index) => {
  return (
    <tr key={index} className="store">
      <td>{store.name}</td>
      <td>{store.address}</td>
      <td>{store.category_names}</td>
      <td>{store.pincode}</td>
      <td>{store.code}</td>
    </tr>
  );
};

const StoreList = ({ stores }) => {
  let list = stores.map((store, index) => Store(store, index));
  return (
    <div className="container-fluid">
      <Table striped bordered responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Categories</th>
            <th>Pincode</th>
            <th>Code</th>
          </tr>
        </thead>
        <tbody>{list}</tbody>
      </Table>
    </div>
  );
};

export default StoreList;
