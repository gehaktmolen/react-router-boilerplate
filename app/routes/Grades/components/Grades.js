"use strict";

import React from 'react'
import Store from '../../../store'

class Grades extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      content: Store.getContent()
    };

    this.onChange = this.onChange.bind(this);
  }

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
        <h2>{this.state.content.page.grades.header}</h2>
        <p>{this.state.content.page.grades.text}</p>
      </div>
    )
  }

}

module.exports = Grades
