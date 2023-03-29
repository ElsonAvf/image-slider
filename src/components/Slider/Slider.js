import React from 'react';
import {mdiMenuLeft, mdiMenuRight} from '@mdi/js';

import AdvanceButton from './../AdvanceButton/AdvanceButton';
import NavigationBar from './../NavigationBar/NavigationBar';

import './Slider.style.css';

export default function Slider({children}) {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  let timeout;
  
  function changeImg(e) {
    setCurrentIndex(Number(e.target.value))
    clearTimeout(timeout)
  }
  function next() {
    if (currentIndex + 1 < children.length) {
      setCurrentIndex(prevCurrentIndex => prevCurrentIndex + 1)
    } else {
      setCurrentIndex(0);
    };
    clearTimeout(timeout)
  };
  function previous() {
    if (currentIndex - 1 >= 0) {
      setCurrentIndex(prevCurrentIndex => prevCurrentIndex - 1);
    } else {
      setCurrentIndex(children.length - 1);
    };
    clearTimeout(timeout)
  };
  function change() {
    
  }
  
  React.useEffect(() => {
    timeout = setTimeout(next, 5000)
  }, [currentIndex]);
  
  return (
    <div className='eavf-slider-container'>
      <AdvanceButton advance={previous} iconPath={mdiMenuLeft}/>
      <img style={{width: '200px'}} src={children.length > 0 ? children[currentIndex] : '#'}/>
      <AdvanceButton advance={next} iconPath={mdiMenuRight} />
      <NavigationBar length={children.length} current={currentIndex} changeImg={changeImg}/>
    </div>
  );
}