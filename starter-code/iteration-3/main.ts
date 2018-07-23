// Add the reference to the interface
import {TodoItemInterface, TodoListInterface} from "../iteration-3/interfaces"
// Create class TodoItem that implements the corresponding interface
class TodoItem implements TodoItemInterface {
    title: string;
    status: boolean;

    constructor(title: string){
        this.title = title;
        this.status = status;
    }

    toggleStatus(task):boolean {
        if (task === true) {
            return this.status
        } else {
            return this.status;
        }
    }
}
// Create class TodoList that implements the corresponding interface

class TodoList implements TodoListInterface {
    TodoItem: Array<string>;

    addTask(TodoItem:string):number {
        this.TodoItem.push(TodoItem);
        console.log(this.TodoItem.length);
        return this.TodoItem.length;
    }
}
// Execution
let task1 = new TodoItem('This is our first task');
let task2 = new TodoItem('Eat pizza 🍕 yummy!!!');
let task3 = new TodoItem('Finish this iteration 1!! 🤓');
let task4 = new TodoItem('Finish this iteration 2!! 🤓');
let task5 = new TodoItem('Finish this iteration 3!! 🤓');

let myTodos = new TodoList();

console.log("Number of items:", myTodos.addTask(task1));
console.log("Number of items:", myTodos.addTask(task2));
console.log("Number of items:", myTodos.addTask(task3));
console.log("Number of items:", myTodos.addTask(task4));
console.log("Number of items:", myTodos.addTask(task5));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask(task3));
console.log("Number of items:", myTodos.deleteTask(task4));
console.log("Number of items:", myTodos.deleteTask(task5));
myTodos.listUncomplete();
