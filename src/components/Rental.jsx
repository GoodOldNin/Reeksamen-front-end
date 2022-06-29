import React from "react";

const Rental = ({ props }) => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>StartDate</th>
            <th>EndDate</th>
            <th>Price per year</th>
            <th>Deposit</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.id}</td>
            <td>{props.startDate}</td>
            <td>{props.endDate}</td>
            <td>{props.priceAnnual}</td>
            <td>{props.deposit}</td>
            <td>{props.contactPerson}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Rental;
