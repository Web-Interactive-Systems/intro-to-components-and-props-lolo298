import { createElement } from './mini';
/**
 
Another interesting feature of jsx it that component are just functions.

We can pass arguments to a component to personalize its appearence.
Components' arguments are called `props` (short for properties).

Todo: Complete this code to render the following component.
    You should pass an array of objects as props

 <main>
  <ul>
    <li>Learn declatirative dom, <span>done</span></li>
    <li>Learn dom rendering, <span>doing</span></li>
  </ul>
 </main>
 
 */

const todos = [
  {
    id: 'todo-0',
    status: 'done',
    name: 'Learn declatirative dom',
  },
  {
    id: 'todo-1',
    status: 'doing',
    name: 'Learn dom rendering',
  },
];

function TodoItem({ todo }) {
  // returns an html li item with its name and status
  const { name, status } = todo;

  return (
    <li>
      {name}, <span>{status}</span>
    </li>
  );
}

function TodoList({ list }) {
  return (
    <ul>
      {list.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
        />
      ))}
    </ul>
  );
}

/** @jsx createElement */
export default function App() {
  const body = (
    <main>
      <h1>Hello List</h1>
      <TodoList list={todos} />
    </main>
  );

  return body;
}
