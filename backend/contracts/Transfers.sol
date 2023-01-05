// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Transfers {

event Transaction(address from, address to, uint amount, string message, uint timestamp, string keyword);

uint transactionCount;


struct TransferStruct {
    address sender;
    address receiver;
    uint amount;
    string message;
    uint256 timestamp;
    string keyword;

}

TransferStruct[] transactions;

function addToBlockchain(address payable receiver, uint amount, string memory message, string memory keyword) public {
    transactionCount+=1;
    transactions.push(TransferStruct(msg.sender, receiver, amount, message, block.timestamp, keyword ));

emit Transaction(msg.sender, receiver, amount, message, block.timestamp, keyword );
}

function getTransactions() public view returns (TransferStruct[] memory) {
    return transactions;
}

function getTransactionCount() public view returns (uint){
 return transactionCount;   
}
}