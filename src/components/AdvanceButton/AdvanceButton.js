import React from 'react';
import Icon from '@mdi/react';

import './AdvanceButton.style.css';

export default function AdvanceButton({advance, iconPath}) {
  return (
    <button className='eavf-advance-button' onClick={advance}>
      <Icon path={iconPath} />
    </button>
  );
};