"use strict";

let Dispatcher = require('./dispatcher');
let EventEmitter = require('events').EventEmitter;
let Api =  require('./api');

const ACTION_TYPES = require('./action-types');
const CHANGE_EVENT = 'change';

let _content;

let Store = Object.assign({}, EventEmitter.prototype, {

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  emitChange() {
    this.emit(CHANGE_EVENT);
  },

  getContent() {
    return _content;
  }
});

Dispatcher.register(function(action){
  switch(action.actionType) {
    case ACTION_TYPES.SWITCH_LANGUAGE:
      _content = Api.getContent(action.language);
      console.log('changing language! ' + action.language);
      Store.emitChange();
      break;
    case ACTION_TYPES.INIT_APP:
      _content = Api.getContent();
      Store.emitChange();
      break;
    default:
  }
});

module.exports = Store;