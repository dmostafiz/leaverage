import React from 'react'

import { TextBlock, RectShape } from 'react-placeholder/lib/placeholders';
import ReactPlaceholder from 'react-placeholder';

const CustomPlaceholder = () => (
  <div className='my-placeholder'>
    <RectShape color='gray' style={{width: 25, height: 70}} />
    <TextBlock rows={6} color='blue'/>
  </div>
);

export default function TestPlaceholder(){
    return (
        <ReactPlaceholder customPlaceholder={<CustomPlaceholder />}>
           
        </ReactPlaceholder>

    )
}

