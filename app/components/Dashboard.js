"use strict";

import React from 'react'
import { Link } from 'react-router'

class Dashboard extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { courses } = this.props

    return (
      <div>
        <h2>{this.props.data.header}</h2>
        <p>{this.props.data.text}</p>
        <h2>Courses</h2>{' '}
        <ul>
          {courses.map(course => (
            <li key={course.id}>
              <Link to={`/course/${course.id}`}>{course.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Dashboard
