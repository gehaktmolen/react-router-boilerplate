"use strict";

import React from 'react'
import Store from '../../../store'

class Calendar extends React.Component {

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
    const events = [
      { id: 0, title: 'essay due 1' },
      { id: 1, title: 'essay due 2' },
      { id: 2, title: 'essay due 3' },
      { id: 3, title: 'essay due 4' }
    ]

    return (
      <div>
        <h2>{this.state.content.page.calendar.header}</h2>
        <p>{this.state.content.page.calendar.text}</p>
        <ul>
          {events.map(event => (
            <li key={event.id}>{event.title}</li>
          ))}
        </ul>
      </div>
    )
  }
}

module.exports = Calendar
