import React from "react";

const House = ({ props }) => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Address</th>
            <th>City</th>
            <th>Rooms</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.id}</td>
            <td>{props.address}</td>
            <td>{props.city}</td>
            <td>{props.numberOfRooms}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default House;
