import Dispatcher from './dispatcher'
import EventEmitter from 'events'
import api from '.api'

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
      _content = api.getContent(action.language);
      Store.emitChange();
      break;
    case ACTION_TYPES.PUSH_MESSAGE:
      alert(action.message);
      Store.emitChange();
    case ACTION_TYPES.INIT_APP:
      _content = api.getContent();
      Store.emitChange();
      break;
    default:
  }
});

module.exports = Store;