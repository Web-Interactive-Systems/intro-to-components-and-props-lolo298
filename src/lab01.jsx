import { createElement } from './mini';
/**
 As mentioned earlier, jsx is a file extension introduced by react. 
 It allows us to combine html, js and css declaratively.
  
 An interesting feature of jsx is that we can render data based on js variables.
 Variables that are wrapped with curly braces will transpiled into their values. 

 Todo: Complete this code to render the following component.
       P.S. You should use two variables with jsx.
 
 ```
 <main>
  <h1>Hello, World!</h1>
  <p>My name is Alex Xela</p>
 </main>
 ```


 */

/** @jsx createElement */
export default function App() {
  const nom = 'Xela';
  const prenom = 'Alex';

  const body = (
    <main>
      <h1>Hello, World!</h1>
      <p>
        My name is {prenom} {nom}
      </p>
    </main>
  );

  return body;
}
