import React, { Component } from 'react';
import CourseServiceClient from '../services/CourseServiceClient';

class CourseList extends Component {

    constructor(props) {
        super(props);
        this.courseService = CourseServiceClient.instance;
        this.createCourse = this.createCourse.bind(this);
        this.deleteCourse = this.deleteCourse.bind(this);
        this.state = {
            courses: []
        }
    }

    render() {
        return this.renderListCourses(this.state.courses);
    }

    componentDidMount() {
        this.courseService.findAllCourses().then((value) => this.setState({courses : value}));
    }

    renderListCourses(courses) {
        let courseList = courses.map(function(course) {
            return <CourseRow title={course.title}
                              ownedBy={course.modified}
                              lastUpdated={course.modified}
            />
        });
        return courseList;
    }

    createCourse() {

    }

    deleteCourse() {

    }

    
}

class CourseRow extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tr className="list-group-item">
                <td>{this.props.title}</td>
                <td>{this.props.ownedBy}</td>
                <td>{this.props.modified}</td>

            </tr>
        )
    }
}

export default CourseList