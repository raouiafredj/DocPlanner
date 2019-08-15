import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Component1 from './Component1';
import Component2 from './component2';
import Component3 from './component3';
import Component4 from './Component4';
import Component5 from './Component5';
import Footer from './Footer'
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

const Main = () => <div>

<Component1 />
<Component2 />
<Component3 />
<Component4/>
<Component5 />
<Footer/>
</div>
ReactDOM.render(<Main />, document.getElementById('root'));

