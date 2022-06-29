import React from "react";

const Tenant = ({ props }) => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Job</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.phone}</td>
            <td>{props.job}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Tenant;
