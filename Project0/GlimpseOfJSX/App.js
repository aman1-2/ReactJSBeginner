// import React from "react";
// import ReactDOM from "react-dom/client";

const App = () => {
    //This is More of like a Plain JS like syntax.
    // return React.createElement('div', {}, React.createElement('h1', {}, "Welcome to JSX Glimpse"));

    return (
        <div> 
            <h1>Welcome to JSX Glimpse</h1> 
            <button>Click Me</button>
        </div>
    );
}

const rootNode = document.getElementById('root');
const root = ReactDOM.createRoot(rootNode);

root.render(<App />); //Here even if we pass App as function instead of component it will work absolutely fine.