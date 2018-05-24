import React, { Component } from 'react';
import CourseServiceClient from '../services/CourseServiceClient';

class CourseList extends Component {

    constructor(props) {
        super(props);
        this.courseService = CourseServiceClient.instance;
    }

    render() {
        let courses = this.courseService.findAllCourses();
        console.log(courses);
        return (
            <div>
                Hello
            </div>
        )
        //return this.renderListCourses();
    }

    renderListCourses(courses) {
        let courseList = courses.map(function(course) {
            return <CourseRow title={course.title}
                              ownedBy={course.ownedBy}
                              lastUpdated={course.lastUpdated}
            />
        });
        return courseList;
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
                <td>{this.props.lastUpdated}</td>
                <td>
                    <button onClick={this.delete.bind(this)}>Delete</button>
                </td>
            </tr>
        )
    }
}

export default CourseList