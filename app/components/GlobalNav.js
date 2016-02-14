"use strict";

import React from 'react'
import { Link } from 'react-router'
import Actions from '../actions'

const dark = 'hsl(200, 20%, 20%)'
const light = '#fff'
const styles = {}

styles.wrapper = {
  padding: '10px 20px',
  overflow: 'hidden',
  background: dark,
  color: light
}

styles.link = {
  padding: 11,
  color: light,
  fontWeight: 200
}

styles.activeLink = {
  ...styles.link,
  background: light,
  color: dark
}

class GlobalNav extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.logOut = this.logOut.bind(this);
  }

  logOut() {
    alert('log out')
  }

  switchLanguage(key, event) {
    Actions.switchLanguage(key);
  }
  
  render() {
    const { user } = this.props

    return (
      <div style={styles.wrapper}>
        <div style={{ float: 'left' }}>
          <Link to="/" style={styles.link}>{this.props.data.home}</Link>{' '}
          <Link to="/calendar" style={styles.link} activeStyle={styles.activeLink}>{this.props.data.calendar}</Link>{' '}
          <Link to="/grades" style={styles.link} activeStyle={styles.activeLink}>{this.props.data.grades}</Link>{' '}
          <Link to="/messages" style={styles.link} activeStyle={styles.activeLink}>{this.props.data.messages}</Link>{' '}
          <a href="#" data-target="#" onClick={this.switchLanguage.bind(this,'en')}>EN</a>{' '}
          <a href="#" data-target="#" onClick={this.switchLanguage.bind(this,'lt')}>LT</a>{' '}
          <a href="#" data-target="#" onClick={this.switchLanguage.bind(this,'ru')}>RU</a>
        </div>
        <div style={{ float: 'right' }}>
          <Link style={styles.link} to="/profile">{user.name}</Link> <button onClick={this.logOut}>log out</button>
        </div>
      </div>
    )
  }
}

GlobalNav.defaultProps = {
  user: {
    id: 1,
    name: 'Ryan Florence'
  }
}

export default GlobalNav
