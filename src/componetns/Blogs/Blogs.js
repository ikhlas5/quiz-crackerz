import React from 'react';

const Blogs = () => {
    return (
        <div className='m-20'>
            <h1 className='font-semibold text-4xl text-orange-500 underline mb-5'>Answer to Question</h1>
            
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                1. What is the purpose of react router?
                </div>
                <div className="collapse-content"> 
                    <p>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>
                </div>
                </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                2. How does context api work?
                </div>
                <div className="collapse-content"> 
                    <p>In English The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
                </div>
                </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                3. How does useref work in react?
                </div>
                <div className="collapse-content"> 
                    <p>useRef returns a mutable ref object whose .current property is initialized to the passed argument ( initialValue ). The returned object will persist for the full lifetime of the component. Essentially, useRef is like a “box” that can hold a mutable value in its .current property.</p>
                </div>
                </div>
        </div>
    );
};

export default Blogs;