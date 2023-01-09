import React, { useContext } from "react";
import { TransactionContext } from "../../context/context";

export const Transactions = () => {
  const { account } = useContext(TransactionContext);

  console.log(account);
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
      </div>
    </div>
  );
};
