"use strict"

import React from 'react';
import W3Comp from './W3Comp';

export default class extends W3Comp {
  
  constructor () {
    super();       
  }
  
  render () {
    const _class = this.importClassName().extendClassName('w3-navitem').get();
    const _props = this.getProps();
    return (      
      <li className={_class} {..._props}> 
        {this.props.children}
      </li>
    );
  }
  
} 