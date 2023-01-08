import React, { useContext } from "react";
import { TransactionContext } from "../../context/context";

export const Transactions = () => {
  const {value} = useContext(TransactionContext);
  return <h1>Transactions</h1>;
};
