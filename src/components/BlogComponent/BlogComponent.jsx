import React from 'react';

const BlogComponent = () => {
    return (
        <div className='my-5 px-4 md:px-0 md:w-9/12 mx-auto bg-gray-200 rounded-2xl shadow-md'>
            <div className='bg-white mx-4 mt-8 p-6 rounded-2xl'>
                <h1 className='text-2xl font-bold mb-2'>Props vs state</h1>
                <div className='text-justify text-slate-500'>In React, props and state are two fundamental concepts used to manage the data and behavior of a component.

                    Props, short for "properties," are passed to a component as an input, and they are immutable. They are defined by the parent component and can be thought of as a way for the parent to communicate with its child components. The child component can access the props through its props object and use them to render its UI or pass them down to its own child components.

                    State, on the other hand, is managed within a component and represents the current state of that component. It is mutable and can be updated through the setState method. When the state changes, React re-renders the component to reflect the new state. Unlike props, state is not passed from a parent component but is initialized within the component itself.

                    In general, props are used for data that is passed down from parent to child, while state is used for data that is managed within a component and can change over time. Using props and state correctly is crucial to building effective and maintainable React applications.</div>
            </div>

            <div className='bg-white m-4 p-6 rounded-2xl'>
                <h1 className='text-2xl font-bold mb-2'>How does useState work?</h1>
                <div className='text-justify text-slate-500'>In React, useState is a Hook that allows functional components to use state. It works by returning an array containing two elements:
                    <ol className='m-2'>
                        <li>1. The first element is the current state value, initially set to the value passed as an argument to useState. This value can be any JavaScript data type, including primitives, objects, and arrays.</li>
                        <li>2. The second element is a function that can be used to update the state. When this function is called with a new value, React will re-render the component with the new state value.</li>
                    </ol>
                </div>
            </div>

            <div className='bg-white m-4 p-6 rounded-2xl'>
                <h1 className='text-2xl font-bold mb-2'>Purpose of useEffect other than fetching data.</h1>
                <div className='text-justify text-slate-500'>useEffect is a powerful Hook in React that allows you to perform side effects in function components. While one of the most common use cases for useEffect is fetching data from APIs or other sources, it can also be used for a wide range of other purposes, including:

                    <ul className='m-2'>
                        <li>1. Updating the title of the page: You can use useEffect to update the title of the page based on the current state or props of the component. This can be useful for creating dynamic page titles.</li>
                        <li className='my-2'>2. Handling window resize events: You can use useEffect to add event listeners to the window object, such as listening for window resize events. This allows you to update the UI based on changes in the window size.</li>
                        <li>3. Animating components: useEffect can be used to trigger animations when a component mounts, updates, or unmounts. For example, you can use it to add and remove CSS classes to trigger animations.</li>
                        <li className='my-2'>4. Managing timers and intervals: useEffect can be used to manage timers and intervals within a component. This can be useful for creating animations, updating the UI based on elapsed time, or scheduling tasks.</li>
                        <li>5. Setting up and tearing down third-party libraries: useEffect can be used to initialize and clean up third-party libraries or other resources. For example, you can use it to initialize a map component or a chat widget.</li>
                    </ul>
                    Overall, useEffect is a powerful tool for managing side effects in function components. While fetching data is a common use case, it can be used for a wide range of other purposes as well.</div>
            </div>

            <div className='bg-white m-4 p-6 rounded-2xl'>
                <h1 className='text-2xl font-bold mb-2'>How Does React work?</h1>
                <div className='text-justify text-slate-500'>React is a JavaScript library that allows developers to build user interfaces using a declarative and component-based approach. Here's an overview of how React works:

                <ul className='m-2'>
                    <li><strong>Components: </strong>React applications are built from components, which are reusable and composable building blocks for UIs. Components can be thought of as functions that take in data as input (called "props") and return JSX (JavaScript XML) elements, which describe the UI.</li>
                    <li className='my-2'><strong>Components: </strong> Virtual DOM: React uses a virtual representation of the DOM (Document Object Model) to optimize performance. The virtual DOM is a lightweight copy of the actual DOM, which React uses to track changes and updates to the UI. When the state or props of a component change, React updates the virtual DOM and calculates the minimum number of changes needed to update the actual DOM. This process, known as "reconciliation," is one of the key features of React's performance optimization.</li>
                    <li><strong>State Management: </strong>React provides a way to manage the state of components using the useState Hook. State represents the current data and behavior of a component and can be updated using the setState method. When the state of a component changes, React re-renders the component with the new state, which updates the UI.</li>
                    <li className='my-2'><strong>Rendering: </strong>React uses a "one-way data flow" model where changes to the UI are driven by changes to the state or props of a component. When a component's state or props change, React re-renders the component and its child components.</li>
                    <li><strong>Reactivity: </strong> React provides a reactive programming model where changes to the state or props of a component trigger re-renders of the component and its children. This allows for a responsive and interactive UI that updates in real-time based on user interactions and data changes.</li>
                </ul>
                    Overall, React's component-based architecture, virtual DOM, state management system, rendering model, and reactivity make it a powerful and efficient library for building complex and interactive user interfaces.</div>
            </div>
        </div>
    );
};

export default BlogComponent;