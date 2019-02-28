import React, { Component } from "react";
// import axios from 'axios';
import { Route, NavLink, Switch, Redirect } from "react-router-dom";

import Users from "../Users/Users";
import Courses from "../Courses/Courses";
import Course from "../Course/Course";

class Home extends Component {
  state = {};

  render() {
    return (
      <div>
        <header>
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/courses"
                  exact
                  activeClassName="my-active"
                  activeStyle={{
                    color: "#fa923f",
                    textDecoration: "underline"
                  }}
                >
                  Courses
                </NavLink>
              </li>
              <li>
                <NavLink to="/users">Users</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route path="/users" component={Users} />
          {/* <Route path="/courses/:courseId/:courseTitle" component={Course} /> */}
          <Route path="/courses" component={Courses} />
          <Redirect from="/all-courses" to="/courses" />
          // Great for handing 404 cases
          <Route render={() => <h1>Not Found</h1>} />
        </Switch>{" "}
      </div>
    );
  }
}

export default Home;
