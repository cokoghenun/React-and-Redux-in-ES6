import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import PropTypes from "prop-types";

class CoursesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      course: {
        title: ""
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    const course = this.state.course;
    course.title = e.target.value;
    this.setState({ course });
    console.log(this.props.course)
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.dispatch(courseActions.createCourse(this.state.course));
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h3>Add Course</h3>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.course.title}
        />
        <input type="submit" value="Save" />
        {/* {this.props.courses.map(course => (
          <div key={course.title}>{course.title}</div>
        ))} */}
      </form>
    );
  }
}
CoursesPage.PropTypes = {
  courses: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
};
function mapStateToProps(state) {
  return {
    course: state.course
  };
}

export default connect(mapStateToProps)(CoursesPage);
