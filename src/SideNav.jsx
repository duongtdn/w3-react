"use strict"

import React from 'react';
import W3Comp from './W3Comp';

export default class extends W3Comp {
  
  render() {    
    const _class = ( this.props.right ) ? 
                      this.importClassName()
                          .extendClassName('w3-sidenav', 'w3x-right-0', 'w3-border-left')
                          .get()
                    :
                      this.importClassName()
                          .extendClassName('w3-sidenav', 'w3x-left-0', 'w3-border-right')
                          .get();    
    const _props = this.getProps();
    return (
      <nav className = { _class } {..._props} >
        {this.props.children}
      </nav>
    );
  }

}