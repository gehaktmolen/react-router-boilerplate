"use strict";

/*globals COURSES:true */
import React from 'react'
import Dashboard from './Dashboard'
import GlobalNav from './GlobalNav'
import Store from '../store'

class App extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      content: Store.getContent()
    };

    this.onChange = this.onChange.bind(this);
  };

  componentDidMount() {
    Store.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    Store.removeChangeListener(this.onChange);
  }

  onChange(state) {
    this.setState({ 
      content: Store.getContent() 
    });
  }

  render() {
    return (
      <div>
        <GlobalNav data={this.state.content.page.menu} onChange={this.change}/>
        <div style={{ padding: 20 }}>
          {this.props.children || <Dashboard data={this.state.content.page.home} onChange={this.change} courses={COURSES} />}
        </div>
      </div>
    )
  }

}

module.exports = App
