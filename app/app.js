/*eslint-disable no-unused-vars */
import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import stubbedCourses from './stubs/COURSES'

const rootRoute = {
  component: 'div',
  childRoutes: [ {
    path: '/',
    component: require('./components/App'),
    childRoutes: [
      require('./routes/Calendar'),
      require('./routes/Course'),
      require('./routes/Grades'),
      require('./routes/Messages'),
      require('./routes/Profile')
    ]
  } ]
}

render(
  <Router history={browserHistory} routes={rootRoute} />,
  document.getElementById('example')
)

// I've unrolled the recursive directory loop that is happening above to get a
// better idea of just what this Router looks like, or just look at the
// file system :)
//
// import { Route } from 'react-router'

// import App from './components/App'
// import Course from './routes/Course/components/Course'
// import AnnouncementsSidebar from './routes/Course/routes/Announcements/components/Sidebar'
// import Announcements from './routes/Course/routes/Announcements/components/Announcements'
// import Announcement from './routes/Course/routes/Announcements/routes/Announcement/components/Announcement'
// import AssignmentsSidebar from './routes/Course/routes/Assignments/components/Sidebar'
// import Assignments from './routes/Course/routes/Assignments/components/Assignments'
// import Assignment from './routes/Course/routes/Assignments/routes/Assignment/components/Assignment'
// import CourseGrades from './routes/Course/routes/Grades/components/Grades'
// import Calendar from './routes/Calendar/components/Calendar'
// import Grades from './routes/Grades/components/Grades'
// import Messages from './routes/Messages/components/Messages'

// render(
//   <Router>
//     <Route path="/" component={App}>
//       <Route path="calendar" component={Calendar} />
//       <Route path="course/:courseId" component={Course}>
//         <Route path="announcements" components={{
//           sidebar: AnnouncementsSidebar,
//           main: Announcements
//         }}>
//           <Route path=":announcementId" component={Announcement} />
//         </Route>
//         <Route path="assignments" components={{
//           sidebar: AssignmentsSidebar,
//           main: Assignments
//         }}>
//           <Route path=":assignmentId" component={Assignment} />
//         </Route>
//         <Route path="grades" component={CourseGrades} />
//       </Route>
//       <Route path="grades" component={Grades} />
//       <Route path="messages" component={Messages} />
//       <Route path="profile" component={Calendar} />
//     </Route>
//   </Router>,
//   document.getElementById('example')
// )




let Api = require('./api');

let Menu = React.createClass ({
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"
            aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">React Flux</a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li className="active"><a href="#home">{this.props.data.home} <span className="sr-only">(current)</span></a></li>
              <li><a href="#about">{this.props.data.about}</a></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#" data-target="#">EN</a></li>
              <li><a href="#" data-target="#">LT</a></li>
              <li><a href="#" data-target="#">RU</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
});

let Home = React.createClass ({
  render() {
    return (
      <div className="jumbotron" id="home">
        <div className="container">
          <h1>{this.props.data.header}</h1>
          <p>{this.props.data.text}</p>
          <p><a className="btn btn-primary btn-lg" href="#" role="button">{this.props.data.goUp}</a></p>
        </div>
      </div>
    );
  }
});

let About = React.createClass ({
  render() {
    return (
      <div className="jumbotron" id="about">
        <div className="container">
          <h1>{this.props.data.header}</h1>
          <p>{this.props.data.text}</p>
          <p><a className="btn btn-primary btn-lg" href="#" role="button">{this.props.data.goUp}</a></p>
        </div>
      </div>
    );
  }
});

let Page = React.createClass ({

  render() {

    let content = Api.getContent().page;

    return (
      <div>
        <Menu data={content.menu}/>
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <Home data={content.home}/>
              <About data={content.about}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

render(<Page />, document.getElementById('page'));