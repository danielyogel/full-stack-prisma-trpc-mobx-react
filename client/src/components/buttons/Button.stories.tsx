import React from 'react';
import { Button } from './Button';

export function ButtonStory() {
  return (
    <Button
      onClick={() => {
        console.log('clicked');
      }}  
    >
      Text
    </Button>
  );
}
