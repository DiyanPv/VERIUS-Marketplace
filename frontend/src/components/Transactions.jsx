import React, { useContext } from "react";
import { TransactionContext } from "../../context/context";
import { dummyData } from "../../utils/constants.js";
import { TransactionCard } from "./TransactionCard";

export const Transactions = () => {
  const { account, transactions } = useContext(TransactionContext);
  return (
    <div className="flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions">
      <div className="flex flex-col md:p-12 py-12 px-4">
        {account ? (
          <h3 className="text-white text-3xl text-center my-2">
            Latest Transactions
          </h3>
        ) : (
          <h3 className="text-white text-3xl text-center my-2">
            Connect Your Account to see Latest Transactions
          </h3>
        )}
        <div className="flex flex-wrap justify-center items-center mt-10 text-white">
          {(transactions || dummyData).map((el) => (
            <TransactionCard key={el.id} {...el} />
          ))}
        </div>
      </div>
    </div>
  );
};
