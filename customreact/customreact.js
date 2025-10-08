function customRender(reactElement, Container) {
    const domElement = document.createElement(reactElement.type);

    domElement.setAttribute("href", reactElement.props.href);
    domElement.setAttribute("target", reactElement.props.target);

   
    // Use textContent for plain text children
    domElement.textContent = reactElement.children;

   Container.appendChild(domElement);
}

const reactElement = {
    type: "a",
    props: {
        href: "https://google.com",
        target: "_blank" // fixed typo here
    },
    children: "Click me to Visit Google"
};

const mainContainer = document.getElementById('root');
customRender(reactElement, mainContainer);

