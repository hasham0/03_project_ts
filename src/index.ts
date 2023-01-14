#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";

// array to store todo message
const todoList: string[] = [];
let loop: boolean = true;

//loop to take multiple lodo inputs from user
while (loop) {
  //taking input
  const useInput = await inquirer.prompt([
    {
      type: "input",
      name: "todoMsg",
      message: "write your message:",
    },
    // asking for one more message
    {
      type: "confirm",
      name: "nextMsg",
      message: "Do you want to add more todo:",
      default: false,
    },
  ]);
  const { todoMsg, nextMsg } = useInput;
  //when nextmsg is equal to false loop ends
  loop = nextMsg;
  //when nextmsg is equal to true loop continue and push the value in todolist array
  if (todoMsg) {
    todoList.push(todoMsg);
  } else {
    console.log("write valide message");
  }
}

//In the end printing all the message in the todo list
if (todoList.length > 0) {
  console.log("Your todo list");
  todoList.forEach((val) => console.log(val));
} else {
  console.log("nothing in the todolist");
}
