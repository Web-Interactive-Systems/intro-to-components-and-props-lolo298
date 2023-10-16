import { createElement } from './mini';
/**
 Another interesting feature of jsx it that we can render data using js APIs.

 Todo: Complete this code to render the following component.
  P.S. You should use an array of strings or objects combined with jsx and `js map` function
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map


 ```
 <main>
  <ul>
    <li>item 1</li>
    <li>item 2</li>
  </ul>
 </main>
 ```

 */

/** @jsx createElement */
export default function App() {
  const list = ['item 1', 'item 2', 'item 3', 'item 4', 'item 5'];

  const body = (
    <main>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </main>
  );

  return body;
}
