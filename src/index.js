// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

// import React from 'react';
// import ReactDOM from 'react-dom';
// import Badge from './components/Badge'

//const name = 'sebas'
//const element = <h1>Hello, Platzi way Badges!</h1>;
//const element = React.createElement('a', {}, `hi, I\'m ${name}.`)
//const jsx = <h1>hola soy, {__true__expresiones__}</h1>

//const jsx = (
//   <div>
//     <h1>
//       hola soy, {name}
//     </h1>
//     <p>
//       I'm engineering
//     </p>
//   </div>
// );
// ReactDOM.render(__qué__, __dónde__);
//ReactDOM.render(jsx, container);

// react
import React from 'react';
import ReactDOM from 'react-dom';
// css
import 'bootstrap/dist/css/bootstrap.css'
import './global.css'
// components
import Badge from './components/Badge'
import BadgeNew from './pages/BadgeNew'
import Badges from './pages/Badges'

const container = document.getElementById('app');

ReactDOM.render(<Badges />, container)
