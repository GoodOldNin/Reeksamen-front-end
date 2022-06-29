import React, { Component } from "react";
import { useState, useEffect } from "react";
import { seeAllHousesUrl } from "../settings";
import { seeAllTenantsUrl } from "../settings";
import { seeAllRentalsUrl } from "../settings";

import House from "./House";
import Tenant from "./Tenant";
import Rental from "./Rental";

const Lists = () => {
  const [houseList, setHouselist] = useState([]);

  useEffect(() => {
    const getHouse = async () => {
      const fromDB = await getHouses();
      setHouselist(fromDB);
    };
    getHouse();
  }, []);

  const getHouses = async () => {
    const res = await fetch(seeAllHousesUrl);
    const data = await res.json();
    return data;
  };

  const [tenantList, setTenantList] = useState([]);

  useEffect(() => {
    const getTenant = async () => {
      const fromDB = await getTenants();
      setTenantList(fromDB);
    };
    getTenant();
  }, []);

  const getTenants = async () => {
    const res = await fetch(seeAllTenantsUrl);
    const data = await res.json();
    return data;
  };

  const [rentalList, setRentalList] = useState([]);

  useEffect(() => {
    const getRental = async () => {
      const fromDB = await getRentals();
      setRentalList(fromDB);
    };
    getRental();
  }, []);

  const getRentals = async () => {
    const res = await fetch(seeAllRentalsUrl);
    const data = await res.json();
    return data;
  };

  return (
    <div>
      <h3>Houses:</h3>
      {houseList.length > 0 ? (
        houseList.map((element, index) => {
          return <House key={index} props={element} />;
        })
      ) : (
        <h1>HouseList is empty</h1>
      )}

      <h3>Tenants:</h3>
      {tenantList.length > 0 ? (
        tenantList.map((element, index) => {
          return <Tenant key={index} props={element} />;
        })
      ) : (
        <h1>TenantList is empty</h1>
      )}

      <h3>Tenants:</h3>
      {rentalList.length > 0 ? (
        rentalList.map((element, index) => {
          return <Rental key={index} props={element} />;
        })
      ) : (
        <h1>RentalList is empty</h1>
      )}
    </div>
  );
};

export default Lists;
