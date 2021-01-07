import axios from "axios";

// interfaces describe structure of objects
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const URL = "https://jsonplaceholder.typicode.com/todos/1";

axios.get(URL).then(resp => {
  const todo = resp.data as Todo;
  // after this if i try to extract data with wrong prop ts will warn me
  // const ID = todo.ID   creates warning
  const { id, title, completed } = todo;
  console.log(id, title, completed);
});

// inorder to run ts file, it needs to be converted to js file
// "tsc index.ts" command does the conversion
// to run it on node use "node index.js"
// "ts-node index.ts" is the shortcut for steps above

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(id, title, completed);
};
