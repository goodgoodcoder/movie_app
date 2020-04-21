import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

/*
<APP/> : component (JS를 통해 html에 return하는 기능)
JSX = html + JS (React 개념)

react application(ReactDom.render())은 한 번에 하나의 component(<App />)만 rendering 할 수 있으므로
하나의 component 안에 다른 component를 포함시켜야 많은 component를 import 할 수 있다.

component는 재사용할 수 있다. (React의 장점)
*/