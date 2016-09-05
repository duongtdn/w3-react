"use strict"

import React, { Component } from 'react';

export default class extends Component {
  constructor (props) {
    super(props);    

    this._lastAttr = false;
    this._class = '';
    this._props = {}; 
  }

  bind (...methods) {
    methods.forEach( method => this[method] = this[method].bind(this) );
  }

  extendClassName (...props) {
    props.forEach (prop => this._class += `${prop} `);
    this._lastAttr = '_class';  
    return this;
  }

  removeClassName (...props) {
    props.forEach (prop => this._class.replace(prop, ''));
    return this;
  }

  importClassName () {
    this._class = ''; // need it, as re-render should reset the _class
    Object.keys(this.props).forEach( prop => {     
      if (/(^w3-|^(s|m|l)([1-9]$|[1-9][0-2]$)|^w3x-)/.test(prop)) {    
        if (this.props[prop] === true) {
          this.extendClassName(prop);
        }                  
      } else if (prop === 'className') {
        this.extendClassName(this.props[prop]);
      } else if (prop !== 'left' && prop !== 'right') {
        this._props[prop] = this.props[prop];
      }
    });   
    this._lastAttr = '_class';  
    return this;
  }

  get (attr) {
    if (attr && this[`_${attr}`]) {
      return this[`_${attr}`];
    } else if (this._lastAttr) {
      const val = this[this._lastAttr];
      this._lastAttr = false; 
      return val;
    } else {
      return undefined;
    }
  }

  getClassName () {
    return this._class;
  }
  
  getProps () {
    if (this._props && Object.keys(this._props).length > 0) {
      return this._props;
    } else {
      return this.props;
    }
  }

}