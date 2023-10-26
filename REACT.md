1.What is React?

=>React was born out of a need to make it easier for developers to build complex and interactive UIs. One of React's main goals is to minimize direct interactions with the actual DOM.

2.Who made React?

=>React was created by Jordan Walke, a software engineer at Facebook.

3.What is Babel?

=>Think of Babel as Google Translate but for code. It takes in JSX and spits out something browsers understand.

4.How does Babel convert html code in React into valid code?

5.What is ReactDOM used for? Write an example?

=>ReactDOM is like a bridge between React elements and actual DOM elements. Its job is to take the React elements and turn them into real DOM elements that get rendered on the page.

const reactRoot = ReactDOM.createRoot(rootElement)
reactRoot.render(element)

Here, ReactDOM.createRoot() creates a root node where your React elements will live. reactRoot.render(element) then takes the React element and transforms it into a real DOM element, finally attaching it to the root div in your HTML.

6.What are the packages that you need to import for react to work with?

=>1) React Package : https://www.unpkg.com/react@18.2.0/umd/react.development.js

2) React DOM Package : https://www.unpkg.com/react-dom@18.2.0/umd/react-dom.development.js
7.How do you add react to a web application?

=>Add react to a web application we need to foloow  few steps:
1) Create an empty div element. This is the area where you will use React to display the changes.
2) add three <script> tags to the HTML page right before the closing </body> tag.
3) Now create a index.js file and can write React with JSX or without JSX.
8.What is React.createElement?

=>React.createElement is a function used to create React elements which describes what you want to render on the page.These elements represent the structure of your UI.They are used by React to  create and update the actual DOM elements.

9.What are the three properties that createElement accept?

=>The three properties that a createElement accept are:
1) type - This property specifies what kind of element we want to render.
2) props - These properties specify attributes and event handlers associated with this component.
3) children - The child elements within this component.

10.What is the meaning of render and root?

=>React renders HTML to the web page by using a function called render(). The purpose of the function is to display the specified HTML code inside the specified HTML element.
The root element refers to the top-level element that is the parent of all other components.