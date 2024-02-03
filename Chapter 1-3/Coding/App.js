import React from 'react';
import ReactDOM  from 'react-dom/client';
const heading = React.createElement(
    'h1', { id: 'heading', },
    "Namaste React ✨"
)
console.log(heading);

const Title = ()=> {
  return  <h1 id = "heading" className='head' tabIndex="5" > Namaste react using JSX  ✨✨</h1>
}


const HeadingComponent = ()=>  (
    <div id='container'>
        <Title></Title>
      <h1>React functional component</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent />);