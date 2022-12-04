#! /usr/bin/env node
import inquirer from "inquirer";

let againTry = false;

type User = {
  userId: number;
  userPin: number;
}

async function getUserData() {
  const userData: User = await inquirer.prompt([
    {
      name: "userId",
      type: "number",
      message: "Please Enter Your ID:",
    },
    {
      name: "userPin",
      type: "number",
      message: "Please Enter Your Pin:",
    }
  ]);

  if(userData?.userId == 1234 && userData?.userPin == 5678) {
    console.log('ATM functionlity is unlock');
    const ATM_Option = await inquirer.prompt([
      {
        name: "operation",
        message: "Select Opertation : ",
        type: "list",
        choices: ["Check Balance", "Cash withdrwa", "Transfer"]
      },
    ])
    switch(ATM_Option.operation) {
      case 'Check Balance':
        console.log('Your current balance is : 20,000');
        break;
      case 'Cash withdrwa':
        const getAmount = await inquirer.prompt([
          {
            name: "amount",
            message: "Select Opertation : ",
            type: "list",
            choices: ["1000", "2000", "5000"]
          },
        ]);
        console.log(`${getAmount.amount} successfully withdrwa`);
        break;
      case 'Transfer':
        console.log('Please select amount you want to transfer');
        const getTransferAmount = await inquirer.prompt([
          {
            name: "transferAmount",
            message: "Select Opertation : ",
            type: "list",
            choices: ["1000", "2000", "5000"]
          },
          {
            name: "userId",
            message: "Enter Reciever Id : ",
            type: "number",
          },
        ]);
        console.log(`${getTransferAmount.transferAmount} successfully transfer`);
        break;
      default:
        break;
    }
    
  } else {
    console.log('Sorry you enter wrong data');
  }

  const again = await inquirer.prompt([
    {
      name: "confirm",
      message: "Do You want to perform another task?",
      type: "confirm"
    }
  ])
  againTry = again.confirm;
}

do {
  await getUserData();
} while(againTry)