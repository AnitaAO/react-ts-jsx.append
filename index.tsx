import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);



/* 
CHALLENGE
Find out what happens if we try to append JSX to our div#root using .append() instead of ReactDOM

1. Create a sample page in JSX (>= 4 elements) and save them in a variable
2. Select the div with the ID of "root" and use `.append()` to append your JSX
3. See if you can guess what will show up in the browser before running the code
4. See if you can explain what actually shows up in the browser
*/

const Page = () => (
  <div>
    <h1>Why I Love React</h1>
    <h3>My reasons:</h3>
    <ol>
      <li>It is composable</li>
      <li>It is decalrative</li>
      <li>It's hirable</li>
      <li>It's actively maintained by skilled people</li>
    </ol>
    <p>...To be contd.</p>
  </div>
)


root.render(
  <StrictMode>
    {/* <App /> */}
    <Page />
  </StrictMode>
);


