import React from 'react';
import ReactDOM from 'react-dom';

//react element = equivalent to dom element
//react component creation
const Title = () => <h1 className="head">hello this is jsx used component</h1>;
const Para = () => (
  <>
    <h1>{11000 + 3245}</h1>

    <Title></Title>
    <Title />
    <p>this is a trial for component composition</p>
  </>
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Para />);
