"use strict"

import React from 'react';
import W3Comp from './W3Comp';

export default class extends W3Comp {
  
  constructor () {
    super();       
  }
  
  render () {    
    const _class = this.importClassName().get();  
    const _hover = this._extractHover();
    const _props = this.getProps();
    return (      
      <li className = {_class}> <a className = {_hover} {..._props} > 
        {this.props.children}
      </a> </li>
    );
  }

  // I need to extract w3-hover class to pass it to <a> element instead of <li>
  _extractHover() {
    // pattern find every w3-hover-[color]
    let hover = '';
    const matches = this._class.match(/w3-hover-\S+\s/g);
    if (matches) {
      matches.forEach( c => {
        hover += `${c} `
        this.removeClassName(c);
      });     
    }
    return hover;
  }
  
} 