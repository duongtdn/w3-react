"use strict"

export default class {
  
  constructor () {
    this._events = {}
    this._bind ('on');
  }
  
  on (name, handler) {
    this._events[name] = handler;
  }
  
  emit (name, evt) {
    if (this._events[name]) {
      this._events[name](evt); 
    }    
  }
  
  removeListerner (name) {
    this._events[name] = null;
  }
  
  _bind (...methods) {
    methods.forEach (method => this[method] = this[method].bind(this));
  }
  
}