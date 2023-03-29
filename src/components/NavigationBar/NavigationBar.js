import React from 'react';

import './NavigationBar.style.css';

export default function NavigationBar({length, current, changeImg}) {
  
  function createButtons() {
    let buttons = [];
    for (let index = 0; index < length; index++) {
      if (index === current){
        buttons.push(<button onClick={changeImg} value={index} key={index} style={{backgroundColor: 'black'}}></button>)
      } else {
        buttons.push(<button onClick={changeImg} value={index} key={index}></button>)
      }
    }
    return buttons;
  }
  
  return (
    <nav className='eavf-navigation-bar'>
      {createButtons()}
    </nav>
  );
};