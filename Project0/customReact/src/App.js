function customReactRender(reactElement, container) {
    const element = document.createElement(reactElement.type);
    element.innerHTML = reactElement.children;

    for(const prop in reactElement.props) {
        if(prop == 'children')  continue;
        element.setAttribute(prop, reactElement.props[prop]);
    }

    container.appendChild(element);
}

const reactElement = { //Fourth element passed is some variable which is already evaluated.
    type: 'h1',
    props: {
        style: "background-color: aqua;"
    },
    children: "Its a Custom React Build Page"
};

const container = document.getElementById('root');
customReactRender(reactElement, container);