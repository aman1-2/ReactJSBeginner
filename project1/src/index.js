import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

/**
 * Your App.js file is actually just exporting a function so can we write a function here and render that function.
*/

//This shows that in React we have a naming convention of our React Component which is there name should start with a Cpital Letter
//There we can't keep our function name as myApp() it should be MyApp().
function MyApp() {
  return(
    <div>
      <h1>Created my Own myApp in React!</h1>
    </div>
  )
}

const reactElementObj = { //Infact even though JSX is getting converted to a plain react object at the end even though we can't directly 
// send an object why because here in this object we have given naming convention as per our please and React documention might have some 
// other way of implementation.
  type: 'h1',
  props: {},
  Children: "Someone Value"
};

const reactElement = (
  <h1> Custom React Element getting Rendered </h1>
)

// Now lets see what type of React object it expect from us. Lets see the React object getting created with the help of createElement method of React.
const element = React.createElement('h1', {}, "A React Element Created with the help of createElement method.")

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//    <React.StrictMode>
//     {/* <App /> */}
//     {/* <myApp /> */}
//     {/* <MyApp /> A valid way of calling the React Component but since this React component is function only therefore lets see can we call it as function or not. */}
//     {/* MyApp()  Throwing an error for this type of Syntax what if we modify our syntax a bit*/} 
//    </React.StrictMode>
// );

// root.render(reactElement);

const AppJS = () => {
  //This is More of like a Plain JS like syntax.
  // return React.createElement('div', {}, React.createElement('h1', {}, "Welcome to JSX Glimpse"));

  return (
      <div> 
          <h1>Function call shown in ReactJS</h1> 
      </div>
  );
}

root.render(AppJS());