import React from 'react';
// import DogIndex from './dog_index';
import Clock from './clock.jsx';
import Tabs from './tabs';

const Root = (props) => {
  return (
    <div className='root'>
      <Tabs />
      <Clock />
    </div>
  )
}

export default Root;