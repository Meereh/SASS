import React from 'react';
import Button from './components/Button';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <div className='buttons'>
        <Button>BUTTON</Button>
        <Button size="large">BUTTON</Button>
        <Button size='small'>BUTTON</Button>
      </div>
      <div className='buttons'>
        <Button color="pink">BUTTON</Button>
        <Button color="pink" size="large">BUTTON</Button>
        <Button color="pink" size='small'>BUTTON</Button>
      </div>
      <div className='buttons'>
        <Button color="gray">BUTTON</Button>
        <Button color="gray" size="large">BUTTON</Button>
        <Button color="gray" size='small'>BUTTON</Button>
      </div>
      <div className='buttons'>
        <Button outline={true}>BUTTON</Button>
        <Button color="pink" size="large" outline={true}>BUTTON</Button>
        <Button color="gray" size='small' outline={true}>BUTTON</Button>
      </div>
      <div className='buttons'>
        <Button fullWidth={true} size="large">BUTTON</Button>
        <Button color="pink" size="large" fullWidth={true}>BUTTON</Button>
        <Button color="gray" size='large' fullWidth={true} onClick={() => console.log("click!")} onMouseMove={() => console.log("mousemove!")}>BUTTON</Button>
      </div>
    </div>

  );
}

export default App;
